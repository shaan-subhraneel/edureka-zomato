import React,{Component} from 'react';
import axios from 'axios';
import './cuisineFilter.css';

const url = "https://zomato-subhraneel-backend.herokuapp.com/filter";

class CuisineFilter extends Component{

    filterCuisine = (event) => {
        let mealId = this.props.mealId;
        let cuisineId = event.target.value;
        let cuisineUrl;
        if(cuisineId === ""){
            cuisineUrl = `${url}/${mealId}`
        }else{
            cuisineUrl = `${url}/${mealId}?cuisineId=${cuisineId}`
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})

    }

    render(){
        return(
            <>
            <p class="sub-heading">Cuisine</p>
            <div onChange={this.filterCuisine}>
            <label class="radios"><input type="radio" value="1" name="cuisine"/>North Indian</label>
            <label class="radios"><input type="radio" value="2" name="cuisine"/>South Indian</label>
            <label class="radios"><input type="radio" value="3" name="cuisine"/>Chinese</label>
            <label class="radios"><input type="radio" value="4" name="cuisine"/>Fast Food</label>
            <label class="radios"><input type="radio" value="5" name="cuisine"/>Street Food</label>
                </div>
            </>
        )
    }

}

export default CuisineFilter