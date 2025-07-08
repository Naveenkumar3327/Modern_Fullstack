import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // ✅ CSS path
import { FaUniversity } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">
                    <FaUniversity className="logo-icon" />
                    <span>SECE</span>
                </div>


                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <div className="auth-buttons">
                    <Link to="/login" className="btn login-btn">Login</Link>
                    <Link to="/signup" className="btn signup-btn">Sign Up</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
