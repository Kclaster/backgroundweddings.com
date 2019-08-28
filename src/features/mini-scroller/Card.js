import React from 'react';
import one from '../../pics/Alyssa and Ryne/thirteen.jpg'
import two from '../../pics/Cori and Jesse/star.jpg'
import three from '../../pics/Hannah and Ben/three.jpg'
import four from '../../pics/Janie and Harold/five.jpg'

import './style.css'

const Card = (props) => {
    const { id, description } = props.property;
    
    const image = [one, two, three, four]

    return (
        <div id={`card-${id}`} className="card">
            <img src={image[id]} alt={description} />
        </div>
    )
}


export default Card;




