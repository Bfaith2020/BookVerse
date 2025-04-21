import React, { useEffect, useRef } from 'react';
import './CommunitySection.css';

function CommunitySection() {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headerRef.current.classList.add('animate');
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section className="community-section">
      <div className="community-header" ref={headerRef}>
        <h2>Welcome to the Bookverse Community</h2>
        <p>
          Discover a world of literary and cultural events designed to bring book lovers together. From book clubs to annual fairs, there's something for everyone.
        </p>
      </div>
      <div className="community-content">
        <div className="community-card">
          <img src="/assets/bookclub.jpg" alt="Monthly Book Clubs" className="community-card-image" />
          <h3>Monthly Book Clubs</h3>
          <p>
            Join our monthly book clubs for adults and children, where we explore captivating stories and share our thoughts.
          </p>
        </div>
        <div className="community-card">
          <img src="/assets/pexels-sonya-zykova-1135690651-22738054.jpg" alt="Annual Book Fair" className="community-card-image" />
          <h3>Annual Book Fair</h3>
          <p>
            Celebrate the joy of reading at our annual book fair, featuring local authors, publishers, and unique finds.
          </p>
        </div>
        <div className="community-card">
          <img src="/assets/pexels-pixabay-417344.jpg" alt="Holiday Gift Bazaar" className="community-card-image" />
          <h3>Holiday Gift Bazaar</h3>
          <p>
            Find the perfect gift for your loved ones at our holiday bazaar, showcasing handcrafted items and literary treasures.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;