import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css'


const Login = () => {

  const { signInUsingGoogle } = useAuth();

  const location = useLocation()
  const redirect_uri = location.state?.from || "/shop";
  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then(result => {
        history.push(redirect_uri)
      })
  }

  return (
    <div className="login-form">
      <div className="shadow">
        <h2>Log in</h2>
        <form>
          <input type="email" placeholder="your email" className="input-field" />
          <br /><br />
          <input type="password" name="" id="" placeholder="password" className="input-field" />
          <br /><br />
          <button className="btn-regular">Continue</button>
        </form>
        <hr />
        <button className="google-btn" onClick={handleGoogleSignIn}>

          <p className="flex">
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="" />
            <span> Login with google  </span>
          </p>

        </button>
        <p>New user?</p>
        <button><Link to="resister">Create accoutn</Link></button>
      </div>

    </div>
  );
};

export default Login;