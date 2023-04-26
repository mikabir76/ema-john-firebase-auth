import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleSignOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(err => console.log(err))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user ? <><span className='text-white'>{user.email}</span> <button onClick={handleSignOut}>Sign out</button></> : <Link to="/login">Login</Link>
                }
                
                <Link to="/signup">Sign up</Link>
                
            </div>
        </nav>
    );
};

export default Header;