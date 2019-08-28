import React from 'react';
import '../styles/Link.css';
import { Link } from 'react-router-dom'

const Tie = (props) => {
    return (
        <div>
            <Link to={props.link} className="link" >{props.name}</Link>
        </div>
    )

}


export default Tie