import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropDown: false,
        }
    }

    renderDropdown = () => {
        return (
                <ul className="droplink-head">
                    {this.props.dropMenu.map((navItem) => (
                        <Link className={`droplinks ${navItem.displayBottom}`} key={navItem.key} to={navItem.href}>
                        <li className={`droplinks ${navItem.displayBottom}`}>{navItem.name}</li>
                        </Link>
                    )
                    )}
                </ul>
        )
    }

    handleMouseEnter = () => {
        this.setState({showDropDown: true})
    }

    handleMouseLeave = () => {
        this.setState({showDropDown: false})
   
    }


    render() {
        return (
            <div onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} className="link">
                <Link className="droplink-head" to={this.props.tie}>{this.props.name}</Link>
                {this.state.showDropDown === true ? this.renderDropdown() : null}
                
            </div>
        )
    }
}


export default DropDown;