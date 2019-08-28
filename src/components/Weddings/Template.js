import React from 'react';
import '../../styles/Template.css'

const Template = (props) => {
    return (
        <div className="story-container">
            <img className="stillHeader" alt={props.name} src={props.header} />
            <div className="title">
                <div id="firstRow" className="firstRow">
                    <h1>{`${props.girlName} + ${props.boyName}`}</h1>

                </div>
                <div className="secondRow">
                    <h1>{props.lastName}</h1>
                </div>
            </div>
            <div className="testimony-container">
                <div className="testimony">
                    <p>
                        {props.testimony}
                    </p>
                </div>
            </div>
        </div>
    )
    }

export default Template;
