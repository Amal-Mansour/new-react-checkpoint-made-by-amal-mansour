import React from 'react'
import { Rate } from 'antd';
import './Rating.css'



const desc = ["terrible", "bad", "normal", "good", "wonderful"]

const RatingMovie = ({ filterRating, movieRating, rating, setRating }) => {

    const handleChange = value => { setRating(value) };
    
    return (

        < span className="RateContainer">
            {filterRating ?

                <Rate tooltips={desc} onChange={handleChange} value={rating} />
                :
                <Rate value={movieRating} disabled />
            }

        </span>
    )
}

export default RatingMovie;








