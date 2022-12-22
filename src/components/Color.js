import StarRating from "./StarRating";

const Color = ({title, color, rating=0}) => 
    <section className="color-box" style={{ borderColor: color}}>
        <h1>{title.toUpperCase()}</h1>
        <div className="color" style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating starsSelected={rating} />
        </div>
    </section>

export default Color