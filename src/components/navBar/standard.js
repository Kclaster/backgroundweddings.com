import React from 'react';
import Tie from '../Tie';
import DropDown from '../../features/dropdown-menu'

const StandardNav = () => {
    return (
        <div className="navBar">
            <Tie name="Home" link="/" />
            <DropDown tie="/Services" dropMenu={dropDownLinks} name="Services" />
            <Tie link="/Weddings" name="Stories"/>
            <Tie link="/AboutMe" name="About"/>
            <Tie link="/Contact" name="Contact"/>
        </div>
    )
}

const dropDownLinks = [{
    name:"Weddings",
    key: 1,
    href: "/services/WeddingService",
    displayBottom: 'bottom'
    },
    {
    name: "Events",
    key: 2,
    href: "/Services/EventService",
    displayBottom: ''

    }
];

export default StandardNav;