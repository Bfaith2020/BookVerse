// filepath: c:\Users\Admin\Desktop\bookstore\frontend\src\components\HeroSection.jsx
import React, { useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hero-section">
      <div className="hero-navbar">
        {/* Logo Section */}
        <div className="logo-section" onClick={() => window.location.reload()} style={{ cursor: "pointer" }}>
          <span className="logo">Bookverse</span>
        </div>

        {/* Hamburger Menu */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>

        {/* Search Bar Section */}
        <div className={`search-section ${isMenuOpen ? "open" : ""}`}>
          <div className="search-container">
            <input type="text" className="search-bar" placeholder="Search by title, author, or ISBN..." />
            <button className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="20px"
                height="20px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m2.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Section */}
        <div className={`nav-section ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-right">
            <span className="wishlist-icon" style={{ cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
            <span className="user-icon" style={{ cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </span>
            <span className="cart-icon" style={{ cursor: "pointer" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-15-16h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.97 0 1.1.9 2 2 2h12v-2h-11.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.72c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1h-16v2zm0 0h2v-2h-2v2z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="hero-content">
        <h1>BookVerse</h1>
        <p>Beyond the Book, Into the Verse.</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default HeroSection;