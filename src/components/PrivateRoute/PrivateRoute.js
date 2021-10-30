import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { ClapSpinner } from "react-spinners-kit";
import { Container } from 'react-bootstrap';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const loading = true;
  if (isLoading) {
    return (
      <Container className="d-flex justify-content-center align-items-center my-5">
        <ClapSpinner
          size={50}
          color="#66fe89"
          loading={loading}
        />
      </Container>
    )
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