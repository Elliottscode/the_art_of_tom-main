import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'

export default class Navbar extends React.Component{
    render() {
        return (
            <nav className="Navbar">
                <div className="Navbar_container">
                    <ul id="nav">
                        <Link className="text-link" to="/">Home</Link>
                        <Link className="text-link" to="/about">About</Link>
                        <Link className="text-link" to="/faq">FAQ</Link>
                        <Link className="text-link" to="/contact">Contact</Link>
                        <Link className="text-link" to="/support">Support</Link>
                    </ul>
                </div>
            </nav>
        
        );
    }
}