import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <div class="col-lg-4 col-md-12">
                    <Link to={`/listing/${item.mealtype_id}`} key={item._id} class="card">
                    <img class="card-img-top" src={item.meal_image} alt={item.mealtype}/>
                    <div class="card-body">
                    <h5 class="card-title">{item.mealtype}</h5>
                    <p class="card-text">{item.content}</p>
                    </div>
                </Link>
                </div>
                )
            })
        }

    }

    return(
            <>
            {listMeal(props)}
            </>
    )
}


export default QuickDisplay;
