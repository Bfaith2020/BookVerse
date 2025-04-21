import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with the latest book releases, offers, and events. Sign up for our newsletter today!</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;