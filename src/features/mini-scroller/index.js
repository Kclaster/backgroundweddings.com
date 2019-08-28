import React from 'react';
import Card from './Card';
import data from '../../articles/pictureData';

import './style.css';




class MiniScroller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[1]
        }
    }


    nextProperty = () => {
        let newIndex;
        if (this.state.property.id === this.state.properties.length -1) {
            newIndex = 0
        } else {
            newIndex = this.state.property.id + 1;
        }
        this.setState({
            property:data.properties[newIndex]
        })
    }

    prevProperty = () => {
        let newIndex;
        if (this.state.property.id === 0) {
            newIndex = this.state.properties.length -1
        } else {
            newIndex = this.state.property.id - 1;
        }
        this.setState({
            property:data.properties[newIndex]
        })
    }

    render() {
        const { properties, property } = this.state;
        return (
            <div className="miniscroller">

                <div className={`cards-slider active-slide-${property.id}`}>
                <div onClick={() => this.nextProperty()}
                    disabled={property.id === data.properties.length-1} className="arrow-container right">
                    <div className="arrow-right"
                    onClick={() => this.nextProperty()}
                    disabled={property.id === data.properties.length-1}></div>
                </div>
                <div onClick={() => this.prevProperty()}
                    disabled={property.id === 0} className="arrow-container left">
                    <div className="arrow-left" onClick={() => this.prevProperty()}
                    disabled={property.id === 0}></div>
                </div>
                    <div className="cards-slider-wrapper" style={{ 'transform': `translateX(-${property.id*(100/properties.length)}%`}}>
                        {properties.map(property =>                         <Card key={properties.id} property={property} /> )}
                    </div>
                </div>
            </div>

        )
    }


}

export default MiniScroller;