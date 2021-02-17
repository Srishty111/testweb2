import React from 'react'
import './Card.css'
function Card(a) {
    console.log(a.a);
    return (
        <div className="cards1">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
                <div className="image">
                    <img src={a.a.imageurl}></img>
                    </div>   
        </div>
        
    )
}

export default Card
