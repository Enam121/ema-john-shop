import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './header.css'
import useAuth from '../../hooks/useAuth';


const Header = () => {

    const { logOut, user } = useAuth();

    return (
        <div className="header">

            <img className="logo" src={logo} alt="" />
            <nav>
                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/view-order">Order Review</Link>
                    <Link to="/inventory">Manage Inventory here</Link>
                </div>
                {user ?
                    <div className="login">
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/24/000000/external-user-interface-kiranshastry-lineal-color-kiranshastry-1.png" alt="" />
                        <span className="user-name"> {user.displayName} </span>
                        <button onClick={logOut}>Log out</button>
                    </div>
                    :
                    <Link to="login">Log in</Link>
                }
            </nav>
        </div>
    );
};


export default Header;