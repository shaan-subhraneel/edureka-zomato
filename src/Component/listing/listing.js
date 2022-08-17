import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';
import Header from '../../header';

const url = "https://zomato-subhraneel-backend.herokuapp.com/restaurants";

class Listing extends Component {
    constructor(props){
        super(props)

        this.state={
            restaurants:''
        }
    }

    setDataPerFilter = (data) => {
        this.setState({restaurants:data})
    }

    render(){
        return(
            <>
                <div id="header2">
                <Header/>
                </div>
                <div class="main">
            <div class="left">
                <h1 class="left-heading">Filters</h1>
                            <hr/>
                            <CuisineFilter mealId={this.props.match.params.id}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <CostFilter restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                        </div>   
                        <div class="right">
                        <ListingDisplay listData={this.state.restaurants}/>
                            </div> 
                    </div>
                </>
        )
    }

    //calling api with axios 
    componentDidMount(){
        let mealId = this.props.match.params.id?this.props.match.params.id:1;
        sessionStorage.setItem('mealId',mealId);
        axios.get(`${url}?mealtype_id=${mealId}`)
            .then((res) => {this.setState({restaurants:res.data})})
    }
}

export default Listing;