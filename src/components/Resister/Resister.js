import React from 'react';
import { Link } from 'react-router-dom';

const Resister = () => {
  return (
    <div className="login-form">
      <div className="shadow">
        <h2>Create Account</h2>
        <form>
          <input type="text" name="" id="" placeholder="Enter your name" className="input-field" />
          <br /><br />
          <input type="email" placeholder="Enter your email address" className="input-field" />
          <br /><br />
          <input type="password" name="" id="" placeholder="password (at least 6 charecter)" className="input-field" />
          <br /><br />
          <input type="password" name="" id="" placeholder="Re-enter-password " className="input-field" />
          <br /><br />
          <button className="btn-regular">Submit</button>
        </form>
        <hr />
        <button className="google-btn">
          <p className="flex">
            <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="" />

            <span> Signup with google  </span>
          </p>
        </button>
        <p>Already have an account? <Link to="login">Please login</Link>
        </p>
      </div>

    </div>
  );
};

export default Resister;