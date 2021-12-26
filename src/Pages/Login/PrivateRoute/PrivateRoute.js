import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let {user} = useAuth();
    let location = useLocation();
    if(user.email){
      return children
    }
    return <Navigate to="/login" state={{from: location}} />;
};

export default PrivateRoute;