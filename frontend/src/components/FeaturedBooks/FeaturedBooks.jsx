import React, { useEffect } from "react";
import "./FeaturedBooks.css";

// Reusable BookCategory Component
const BookCategory = ({ title, description, books }) => {
  return (
    <div className="book-category slide-in">
      <div className="category-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="book-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card slide-in">
            <img src={book.src} alt={book.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

const FeaturedBooks = () => {
  useEffect(() => {
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll(".slide-in");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  const popularBooks = [
    { src: "/assets/book1.jpg", alt: "Book 1" },
    { src: "/assets/bookm.jpg", alt: "Book 2" },
    { src: "/assets/book3.jpg", alt: "Book 3" },
    { src: "/assets/bookk.jpg", alt: "Book 4" },
    { src: "/assets/book5.jpg", alt: "Book 5" },
  ];

  const newArrivals = [
    { src: "/assets/a.avif", alt: "Non-Fiction Book 1" },
    { src: "/assets/b5.jpg", alt: "Non-Fiction Book 2" },
    { src: "/assets/b.webp", alt: "Non-Fiction Book 3" },
    { src: "/assets/ee.webp", alt: "Non-Fiction Book 4" },
  ];

  return (
    <div className="featured-books">
      <h2 className="slide-in">Featured Books</h2>
      <BookCategory
        title="Popular"
        description="Explore our collection of popular books that have captivated readers worldwide. These titles are celebrated for their compelling stories and unforgettable characters."
        books={popularBooks}
      />
      <BookCategory
        title="New Arrivals"
        description="Check out the latest additions to our collection. From thrilling adventures to heartwarming tales, these books are perfect for every reader."
        books={newArrivals}
      />
    </div>
  );
};

export default FeaturedBooks;