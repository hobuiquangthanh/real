import React, { useState } from "react";
import "./auth.css";

export const Login = () => {
  const [overlayLeft, setOverlayLeft] = useState(false);

  const handleSignInClick = () => {
    setOverlayLeft(false);
  };

  const handleSignUpClick = () => {
    setOverlayLeft(true);
  };

  return (
    <div className="login">
      <div
        className={`custom-container ${
          overlayLeft ? "right-panel-active" : ""
        }`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-google"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <button className="btn-auth">SignUp</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-google"></i>
              </a>
              <a href="#" className="social">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <a href="#">Forgot Your Password</a>

            <button className="btn-auth">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost btn-auth"
                onClick={handleSignInClick}
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start journey with us</p>
              <button
                className="ghost btn-auth"
                onClick={handleSignUpClick}
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};