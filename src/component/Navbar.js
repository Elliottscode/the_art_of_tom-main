import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.scss'
import openIcon from'../assets/images/open.png'






export default class Navbar extends React.Component{



    render() {
        return (
                <nav className="Navbar" >
                    <ul>
                        <NavLink className="text-link" to="/" >Home</NavLink>
                        <NavLink activeClassName="activeLink" className="text-link" to="/about" >About</NavLink>
                        <NavLink activeClassName="activeLink" className="text-link" to="/faq" >FAQ</NavLink>
                        <NavLink activeClassName="activeLink" className="text-link" to="/contact" >Contact</NavLink>
                        <NavLink activeClassName="activeLink" className="text-link" to="/support" >Support</NavLink>
                    </ul>
                </nav>
        );
    }
}