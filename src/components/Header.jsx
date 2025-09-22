import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("auth");
      navigate("/login");
    } catch (err) {
      console.error("Sign out failed", err);
    }
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo */}
        <div className="logo">DEV@Deakin</div>

        {/* Search box */}
        <div className="search-box">
          <input
            className="search-input"
            placeholder="Search..."
          />
        </div>

        {/* Sign Out button */}
        <div className="action-buttons">
          <button className="signout-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
