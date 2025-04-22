import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
  const isLoggedIn = false; // Change this to true to simulate a logged-in user
  const isAdmin = false; // Change this to true to simulate an admin user

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <LInk to = "/"> <h1 className="logo">Bookverse</h1></LInk>
       
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`navbar-center ${isMenuOpen ? "open" : ""}`}>
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className={`navbar-right ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>Home</li>
          <li className="dropdown">
            Categories ▼
            <ul className="dropdown-menu">
              <li>Fiction</li>
              <li>Non-fiction</li>
              <li>Romance</li>
              <li>Science Fiction</li>
              <li>Fantasy</li>
            </ul>
          </li>
          <li>New Arrivals</li>
          <li>Bestsellers</li>
          <li>Deals</li>
        </ul>
        <div className="cart">
          🛒 Cart <span className="cart-badge">2</span>
        </div>
        {!isLoggedIn ? (
          <div className="user-section">
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
          </div>
        ) : (
          <div className="user-dropdown">
            👤 My Account ▼
            <ul className="dropdown-menu">
              <li>Profile</li>
              <li>Wishlist</li>
              <li>Order History</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
        {isAdmin && (
          <div className="admin-dropdown">
            Admin ▼
            <ul className="dropdown-menu">
              <li>Manage Books</li>
              <li>Manage Orders</li>
              <li>View Users</li>
              <li>Dashboard</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;