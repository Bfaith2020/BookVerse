import React from "react";
import "./App.css";

import HeroSection from "./components/Hero section/HeroSection";
import WhoWeAre from "./components/Who we are/WhoWeAre";
import BookQuote from "./components/BookQuote/BookQuote";
import CommunitySection from "./components/CommunitySection/CommunitySection";
import FeaturedBooks from "./components/FeaturedBooks/FeaturedBooks";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

// ✅ Import AuthProvider (Update the path if needed)
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <HeroSection /> {/* Navbar is already included in HeroSection */}
        <WhoWeAre />
        <BookQuote />
        <main>
          <CommunitySection />
          <FeaturedBooks />
          <Newsletter />
          <Footer />
        </main>
      </div>
    </AuthProvider>
  );
};

export default App;
