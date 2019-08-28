import React from 'react';
import {Link} from 'react-router-dom';
import './VerticalNav.css'

const VerticalNav = () => {
    return (
        <div className="drop-down-container">  <div className="link-container">
                {verticalLinks.map(function(cur) {
                    return (
                    <Link className="vertical-link" key={cur.key} to={cur.href}>{cur.name}</Link>
                    )
                })}
            </div>
        </div>
    )
}


const verticalLinks = [
    {
    name:"Home",
    key: 1,
    href: "/",
    },
    {
    name: "Weddings",
    key: 3,
    href: "/services/WeddingService",
    },
    {
    name: "Events",
    key: 4,
    href: "/Services/EventService",
    },
    {
    name: "Stories",
    key: 5,
    href: "/Weddings",
    },
    {
    name: "About",
    key: 6,
    href: "/AboutMe",
    },
    {
    name: "Contact",
    key: 7,
    href: "/Contact",
    }
    
];

export default VerticalNav;