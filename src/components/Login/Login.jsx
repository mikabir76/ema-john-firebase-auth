import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const Login = () => {
    const {user, signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location?.state?.from?.pathname || '/';
    // console.log(user)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input className='input-field' type="email" name="email" id="" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input className='input-field' type="password" name="password" id="" required/>
            </div>
            <input className='btn-submit' type="submit" value="Login" />
            <p className='signup-text'><small>New to ema-john? <Link to='/signup'>create a new account</Link></small></p>
            <p className='error-text'></p>
            </form>
        </div>
    );
};

export default Login;