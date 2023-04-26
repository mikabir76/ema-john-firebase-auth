import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if(loading){
        return <p>Loading........</p>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from : location}} replace={true}></Navigate>
};

export default PrivateRouter;