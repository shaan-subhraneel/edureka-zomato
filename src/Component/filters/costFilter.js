import React,{Component} from 'react';
import axios from 'axios';

const url = "https://zomato-subhraneel-backend.herokuapp.com/filter";

class CostFilter extends Component{
   
    costCuisine = (event) => {
        let mealId = sessionStorage.getItem('mealId')
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1]
        let costUrl;
        if(event.target.value === ""){
            costUrl = `${url}/${mealId}`
        }else{
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})

    }

    render(){
        return(
            <>
            <p class="sub-heading">Cost Filter</p>
            <div onChange={this.costCuisine}>
            <label class="radios"><input type="radio" value="100-400" name="cost"/>100 to 400</label>
            <label class="radios"><input type="radio" value="401-700" name="cost"/>401 to 700</label>
            <label class="radios"><input type="radio" value="701-1000" name="cost"/>701 to 1000</label>
            <label class="radios"><input type="radio" value="1001-2000" name="cost"/>1001 to 2000</label>
            <label class="radios"><input type="radio" value="2001-5000" name="cost"/>2001 to 5000</label>
            </div>
            </>
        )
    }

}

export default CostFilter