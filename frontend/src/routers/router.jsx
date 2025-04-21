import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import React, { useState } from "react";
import "../components/Hero section/HeroSection.css"; // Corrected import path
import Login from "../components/Login/Login.jsx";

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
      </div>
    </div>
  );
};

// Define routes properly
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
