import React from 'react';
import '../Styles/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo">MyApp</div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
