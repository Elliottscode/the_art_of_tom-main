import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'

export default class Navbar extends React.Component{
    render() {
        return (
            <nav className="Navbar">
                <div className="Navbar_container">
                    <ul id="nav">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/support">Support</Link>
                    </ul>
                </div>
            </nav>
        
        );
    }
}