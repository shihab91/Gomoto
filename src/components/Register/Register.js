import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from "react-router";
import "./Register.css"
import useAuth from '../../hooks/useAuth';
const Register = () => {
  const { handleGoogleSignIn, setUser, setError, setIsLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/home";
  console.log(redirectUrl);
  const signInWithGoogle = () => {
    handleGoogleSignIn()
      .then(result => {
        setUser(result.user)
        history.push(redirectUrl)

      })
      .catch(err => setError(err))
      .finally(() => setIsLoading(false))
  }
  return (
    <div className="login d-flex align-items-center">
      <Container>
        <div>
          <Card className="login-card mx-auto py-5">
            <div className="login-form d-flex justify-content-center align-items-center flex-column">
              <h3>Register with</h3>
              <button className="my-4 login-btn" onClick={signInWithGoogle}><FcGoogle />Continue with Google</button>
              <p>Already have an account? <Link to="/login">Login</Link> </p>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Register;