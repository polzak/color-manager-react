import StarRating from "./StarRating";

const Color = ({id, title, color, rating=0, onRemove=f=>f, onRate=f=>f}) => 
    <section className="color-box" style={{ borderColor: color}}>
        <div className="remove">
            <button onClick={() => onRemove(id)}>X</button>
        </div>
        
        <h1>{title.toUpperCase()}</h1>
        <div className="color" style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating id={id} starsSelected={rating} onRate={onRate} />
        </div>
    </section>

export default Color