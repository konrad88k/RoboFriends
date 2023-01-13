import React from "react";
import "./Card.css";


const Card = ({id, name, email}) => {
    return (
        <div className='card'>
            <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
            <div className='info'>
                <h2>{name}</h2>
                <div className='bar'></div>
                <p>{email.toLowerCase()}</p>
            </div>
        </div>
    )
}

export default Card;