import React from 'react';
import './style.css';
import VerticalNav from './VerticalNav';


class HamburgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayVertical: false
        }
    }

    handleClick = (x) => {
        x.currentTarget.classList.toggle("change");
        if (!this.state.displayVertical) {
            this.setState({displayVertical:true})
        } else {
            this.setState({displayVertical:false})
        }
      }

    render() {
        return (
            <div>
                <div className="hamburger-container" onClick={(el) => this.handleClick(el)}>
                <div className={this.state.displayVertical ? 'bar1 color-white' : 'bar1 color-standard'}></div>
                <div className={this.state.displayVertical ? 'bar2 color-white' : 'bar2 color-standard'}></div>
                <div className={this.state.displayVertical ? 'bar3 color-white' : 'bar3 color-standard'}></div>
                </div>
                {this.state.displayVertical && <VerticalNav />}
            </div>
        )

    }
}


export default HamburgerMenu;