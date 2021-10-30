import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { PushSpinner } from "react-spinners-kit";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const loading = true;
  if (isLoading) {
    <PushSpinner
      size={30}
      color="#686769"
      loading={loading}
    />
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.displayName ? (
          children
        ) : (
          <Redirect
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