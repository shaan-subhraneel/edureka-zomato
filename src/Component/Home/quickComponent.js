import React,{Component} from 'react';
import '../../main.css';
import QuickDisplay from './quickDisplay';

const url = "https://zomato-subhraneel-backend.herokuapp.com/mealType";

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <>
            <div class="container" id="search">
            <h3>Quick Searches</h3>
            <p>Discover Restaurants by Type of Meal</p>
            <div class="row">
                
                <QuickDisplay mealData={this.state.mealType}/>
                
            </div>
            </div>
            </>
        )
    }

    //apicalling
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }

}

export default QuickSearch;