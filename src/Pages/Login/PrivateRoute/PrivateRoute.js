import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    let {user} = useAuth();
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
          
    );
};

export default PrivateRoute;