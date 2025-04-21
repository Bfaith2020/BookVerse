import React from "react";
import "./BookCard.css";

const BookCard = ({ image, title, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-cover" />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
};

export default BookCard;
