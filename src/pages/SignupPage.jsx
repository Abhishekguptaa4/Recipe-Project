import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./../styles/SignupPage.css";

const SignupPage = () => {
  const [role, setRole] = useState("user");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // To store password mismatch errors
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Validate password match
    if (password !== confirmPassword) {
      setError("Password not same!!");
      return;
    }

    // Clear error if passwords match
    setError("");

    // Navigate to respective pages based on role
    if (role === "chef") {
      navigate("/chef");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="signup-container">
      <h1>Join Recipe Manager</h1>
      <form className="signup-form" onSubmit={handleSignup}>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <select onChange={(e) => setRole(e.target.value)} required>
          <option value="user">User</option>
          <option value="chef">Chef</option>
        </select>
        <button type="submit">Sign Up</button>
      </form>
      <div className="login-down">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
