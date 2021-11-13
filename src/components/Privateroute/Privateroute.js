import userEvent from '@testing-library/user-event';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) return 'loading';
  return (
      <Route
          {...rest}
          render={({ location }) => user.email ? children : <Redirect
              to={{
                  pathname: "/login",
                  state: { from: location }
              }}
          ></Redirect>}
      >

      </Route>
  );
};

export default PrivateRoute;

/* const Privateroute = ({ children, ...rest }) => {
    const {user}=useAuth();
    return (
    <Route
        {...rest}
      render={({ location })=>
      user.email? ( children ) : <Redirect>
          to={{
              pathname: "/login",
              state: { from: location }
            }}
      </Redirect>}
      >
    </Route>
    );
};

export default Privateroute; */