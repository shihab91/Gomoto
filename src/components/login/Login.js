import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
// import useFirebase from '../../hooks/useFirebase';
import { useHistory, useLocation } from "react-router";
import "./Login.css"
import useAuth from '../../hooks/useAuth';
const Login = () => {
  const { handleGoogleSignIn, setUser, setError, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/home";

  console.log(redirectUrl);

  const signInWithGoogle = () => {
    setIsLoading(true)
    handleGoogleSignIn()
      .then(result => {
        setUser(result.user)
        history.push(redirectUrl)
      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false));
  }
  return (
    <div className="login d-flex align-items-center">
      <Container>
        <div>
          <Card className="login-card mx-auto py-5">
            <div className="login-form d-flex justify-content-center align-items-center flex-column">
              <h3>Login with</h3>
              <button className="my-4 login-btn" onClick={signInWithGoogle}><FcGoogle />Continue with Google</button>
              <p>Don't have an account? <Link to="/register">Create a new account</Link> </p>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Login;