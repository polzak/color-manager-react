import { Component } from 'react'
import Star from './Star'


const StarRating = ({
    starsSelected=0, totalStars=5, onRate=f=>f
}) =>
        <div>
            <div className="star-rating">
                {
                    [...Array(totalStars)].map((n,i) => 
                        <Star key={i}
                            selected={i < starsSelected}
                            onClick={() => onRate(i+1)}
                        />
                    )
                }
                
            </div>
            <p>Star Rating: {starsSelected} / {totalStars}</p>
        </div>

export default StarRating
