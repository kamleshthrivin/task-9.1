import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./Register.css"; // specific styles for register page

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      navigate("/"); // after register, redirect to login
    } catch (err) {
      setError(err.message || "Could not register");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Sign Up</h1>

        <form onSubmit={handleRegister}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            required
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Enter email"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            required
            type="password"
            name="password"
            value={form.password}
            onChange={onChange}
            placeholder="Enter password"
          />

          <label htmlFor="confirm">Confirm Password</label>
          <input
            id="confirm"
            required
            type="password"
            name="confirm"
            value={form.confirm}
            onChange={onChange}
            placeholder="Re-enter password"
          />

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>

        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
