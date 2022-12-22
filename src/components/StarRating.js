import Star from './Star'


const StarRating = ({
    id, starsSelected=0, totalStars=5, onRate=f=>f
}) =>
        <div>
            <div className="star-rating">
                {
                    [...Array(totalStars)].map((n,i) => 
                        <Star key={i}
                            selected={i < starsSelected}
                            onClick={() => onRate(id, i+1)}
                        />
                    )
                }
            </div>
            <p>Star Rating: {starsSelected} / {totalStars}</p>
        </div>

export default StarRating
