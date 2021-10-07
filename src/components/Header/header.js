import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './header.css'
const Header = () => {
    return (
        <div className="header">

            <img className="logo" src={logo} alt="" />
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/view-order">Order Review</Link>
                <Link to="/inventory">Manage Inventory here</Link>
            </nav>
        </div>
    );
};


export default Header;