import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    const {user,logOut}=useAuth()

    return (
        <div className="header-design">
            <img src={logo} alt="" srcset="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Review</NavLink>
                <NavLink to="/Work">Work</NavLink>
                {
                    user.email?
                    <button onClick={logOut}>log-out</button>
                    : <NavLink to='/Login'>Sign in</NavLink>

                }
                
            </nav>
        </div>
    );
};

export default Header;