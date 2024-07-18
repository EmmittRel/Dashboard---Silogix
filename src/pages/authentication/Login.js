import React, { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-admin">
      <form className="login-form" action="">
        <h1 className="login-head">Hey there 👋, Welcome</h1>

        <label htmlFor="username">Email</label>
        <input
          className="login-input"
          type="text"
          id="username"
          name="email"
          required
        />

        <label htmlFor="password">
          <span>Password</span>
          <button
            type="button"
            className="show-password"
            onClick={togglePasswordVisibility}
          >
          
          {passwordVisible ? <RiEyeFill /> : <RiEyeOffFill />}&nbsp;
          {passwordVisible ? "Hide" : "Show"}
          </button>
        </label>
        <input
          className="login-input"
          type={passwordVisible ? "text" : "password"}
          id="password"
          name="password"
          required
        />

        <div>
          <label htmlFor="remember-me">
            <input type="checkbox" id="remember-me" name="remember" />
            <span className="login-span">Remember me</span>
          </label>

          <Link className="login-anchor" to="/forgot-password">
            Forgot your password?
          </Link>
        </div>

        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
