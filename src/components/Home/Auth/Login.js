import React, { useState } from "react";
import "./auth.css";
import {API_KEY} from "../../../shared/_constant";
import axios from 'axios';

export const Login = () => {
  const [overlayLeft, setOverlayLeft] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSignInClick = () => {
    setOverlayLeft(false);
    setEmail('');
    setName('');
    setPassword('');
  };

  const onSignUp = async (e) => {
    e.preventDefault()
    if(!name || !email || !password) {
      alert('empty value')
      return
    }
    try {
      const response = await axios.post(`${API_KEY}/khach_hang`, {
        email,
        mat_khau: password,
        ho_ten: name
      })
      if(response.status === 200) {
        window.open(`http://localhost:3000/admin/user/${response.data.id}`);
      }
    } catch(e) {
      console.log(e)
    }
  }

  const onSignIn = async (e) => {
    e.preventDefault();
    if(!email || !password) {
      alert('empty')
      return
    }

    try {
      console.log('try login')
    } catch(e) {
      console.log(e)
    }
  }

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
            <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="btn-auth" onClick={onSignUp}>SignUp</button>
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