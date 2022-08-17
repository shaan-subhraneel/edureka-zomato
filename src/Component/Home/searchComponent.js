import React, {Component} from 'react';
import './search.css';
import {withRouter} from 'react-router-dom';

const url = "https://zomato-subhraneel-backend.herokuapp.com/location";
const restUrl = "https://zomato-subhraneel-backend.herokuapp.com/restaurants"

class Search extends Component {

    constructor(props){
        super(props)

        this.state={
            location:'',
            restaurants:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
                )
            })
        }
    }

    handleCity = (event) => {
        let stateId = event.target.value;
        console.log(stateId)
        fetch(`${restUrl}?stateId=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }

    handleRest = (event) => {
        const restId = event.target.value;
        this.props.history.push(`/details?restId=${restId}`)
    }


    render(){
        console.log(">>>search>>>",this.props)
        return(
            <>
                <div class="d-flex justify-content-center">
                <h3 id="e_logo">e!</h3>
            </div>
            <div class="d-flex justify-content-center container">
                <h4 id="heading_text">Find the best restaurants, cafés, and bars</h4>
            </div>
            <div class="d-flex justify-content-center">
            <div class="row container">
            <select class="col-lg-5 col-md-12" onChange={this.handleCity}>
                            <option>----SELECT YOUR CITY-----</option>
                           {this.renderCity(this.state.location)}
                        </select>
                        <select className="restSelect col-lg-5 col-md-12" onChange={this.handleRest}>
                            <option>----SELECT YOUR Restaurants-----</option>
                            {this.renderRest(this.state.restaurants)}
                        </select>
            </div>
        </div>
                
            </>
        )
    }

    // api calling on page load
    componentDidMount() {
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Search);