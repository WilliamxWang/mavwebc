import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color:'white'
    }
    return (
        <nav className= "navbar">
            <Link style={navStyle} to="/">
            <h3>Home</h3>
            </Link>
            <ul className= "navlinks">
                <Link style={navStyle} to="/users">
                <li>users</li>
                </Link>
                {/*<Link style={navStyle} to ="/albmus">
                <li>albums</li>
                </Link>
                <Link style={navStyle} to ="/photos">
                <li>photos</li>
                </Link>*/}
            </ul>
        </nav>
    );
}

export default Nav;
