import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'
import openIcon from'../assets/images/open.png'






export default class Navbar extends React.Component{



    render() {
        return (
            <div id="wrapper">
                <nav className="Navbar" >
                    <ul className="nav">
                        <Link className="text-link" to="/" >Home</Link>
                        <Link className="text-link" to="/about" >About</Link>
                        <Link className="text-link" to="/faq" >FAQ</Link>
                        <Link className="text-link" to="/contact" >Contact</Link>
                        <Link className="text-link" to="/support" >Support</Link>
                    </ul>
                </nav>
            </div>
        );
    }
}