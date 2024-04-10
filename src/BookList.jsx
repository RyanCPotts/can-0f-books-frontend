import React from 'react';

const BookList = ({ books, onDeleteBook }) => {
  return (
    <ul>
      {books.map(book => (
        <li key={book._id}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p>{book.status}</p>
          <button onClick={() => onDeleteBook(book._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
