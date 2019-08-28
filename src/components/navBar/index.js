import React from 'react';
import { connect } from 'react-redux';
import StandardNav from './standard';
import HamburgerMenu from './hamburger';
import './style.css';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hamburgerMenu: false
        }
    }

    setWindowWidth = () => {
        let { innerWidth } = window;
        console.log('akuna', window)
        console.log(innerWidth);
        if (innerWidth <= 550) {
            this.setState({
                hamburgerMenu: true
            })
        }  else {
            this.setState({
                hamburgerMenu: false 
            }) 
        }
    };

    componentDidMount() {
        this.setWindowWidth();
        window.addEventListener('resize', this.setWindowWidth);
    }

    render () {
        return (
            <div>
                
              {!this.state.hamburgerMenu && <StandardNav />}
                {this.state.hamburgerMenu && <HamburgerMenu />}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    height: state.setHeight.height
    }
};


export default connect(mapStateToProps)(NavBar);