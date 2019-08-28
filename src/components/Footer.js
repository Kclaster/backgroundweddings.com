import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  console.log('this is firrrring')
    return (
        <div className="footer-container">
            <div className="icon-container">
                <div className="footer-links">
                <h3 className="footer-title">Services</h3>
                <Link className="footer-link" to="/services/WeddingService">Weddings</Link>
                <Link className="footer-link" to="/services/EventService">Events</Link>
                </div>
                <div className="footer-links">
                <h3 className="footer-title">Company</h3>
                <Link className="footer-link"  to="/Weddings">Stories</Link>
                <Link className="footer-link"  to="/AboutMe">About</Link>
                </div>
                <div className="footer-links">
                <h3 className="footer-title">Reach Me</h3>
                <Link className="footer-link"  to="/Contact">Contact</Link>
                </div>
            </div>
            <div className="copyright">
                BackGround Weddings Established 2019
            </div>
        </div>
    )
    
}



export default Footer;