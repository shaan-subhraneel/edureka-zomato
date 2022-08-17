import React, {Component} from 'react';
import './main.css'
import {Link, withRouter} from 'react-router-dom'

const url = "https://zomato-subhraneel-backend.herokuapp.com/userinfo";
class Header extends Component {

    constructor(){
        super();

        this.state={
            userData:'',
            userImg:'',
            userName:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('userinfo');
        sessionStorage.setItem('loginStatus',false);
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('uName');
        sessionStorage.removeItem('uImg');
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name ||  sessionStorage.getItem('uName') !== null){
            if(sessionStorage.getItem('uName') !== null){
                let name =  sessionStorage.getItem('uName');
                let image = sessionStorage.getItem('uImg');
                return(
                    <>
                <li class="nav-item">
                                <span class="nav-link text-white"></span> Hi <img src={image} style={{height:50,width:50}}/> {name}
                </li>
                <li class="nav-item">
                            <button onClick={this.handleLogout} class="nav-link text-white" id="account">Logout</button>
                        </li>
                    </>
                )
            }else{
                let data = this.state.userData;
                let outArray = [data.name, data.email, data.phone, data.role];
                sessionStorage.setItem('userinfo',outArray);
                sessionStorage.setItem('loginStatus',true)
                return(
                    <>
                <li class="nav-item">
                                <span class="nav-link text-white">Hi {data.name}</span>
                </li>
                <li class="nav-item">
                            <Link onClick={this.handleLogout} class="nav-link text-white" id="account">Logout</Link>
                        </li>
                    </>
                )
            }

        }else{
            return(
                <>
                <li class="nav-item">
                    <Link to="/login" class="nav-link text-white">Login</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/register" class="nav-link text-white" id="account">Create an Account</Link>
                    </li>
                </>
            )
        }
        
    }

    render(){
        return(
            <div id="top">
                <ul class="nav justify-content-end">
                {this.conditionalHeader()}
                </ul>
            </div>
        )
    }

    //getuser info after login 
    componentDidMount(){

        /* Login With JWT */
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header)