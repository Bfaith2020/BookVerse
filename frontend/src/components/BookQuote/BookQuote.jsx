import React from "react";
import "./BookQuote.css";

const BookQuote = () => {
  return (
    <section className="book-quote">
      <div className="quote-container">
        <div className="quote-line"></div>
        <p className="quote-text">“There is no friend as loyal as a book.”</p>
        <p className="quote-author">–Ernest Hemingway</p>
        <div className="quote-line"></div>
      </div>
    </section>
  );
};

export default BookQuote;