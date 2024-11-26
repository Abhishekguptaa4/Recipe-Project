import React from "react";
import { Link } from "react-router-dom";
import "./../styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome Back!</h1>
        <p>Log in to explore and manage your favorite recipes.</p>
      </div>
      <form className="login-form">
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="login-footer">
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
