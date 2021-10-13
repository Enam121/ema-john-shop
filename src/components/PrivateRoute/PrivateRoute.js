import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props) => {

  const { children, ...rest } = props;

  const { user } = useAuth();
  return (
    <Route
      {...rest}

      render={({ location }) =>
        user ? children
          : <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
      }

    />

  );
};

export default PrivateRoute;