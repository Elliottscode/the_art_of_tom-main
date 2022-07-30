import React, {useState} from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import './Navbar.scss'







export default class Navbar extends React.Component{



    render() {
        return (
                <nav className="Navbar" >
                    <ul>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "White" : "black" })} className="text-link" to="/" >Home</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "White" : "black" })} className="text-link" to="/collection" >Collection</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "White" : "black" })} className="text-link" to="/about" >About</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "White" : "black" })} className="text-link" to="/Categories" >Categories</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "White" : "black" })} className="text-link" to="/support" >Support</NavLink>
                        
                    </ul>
                </nav>
        );
    }
}