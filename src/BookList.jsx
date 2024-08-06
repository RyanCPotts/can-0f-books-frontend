import React from 'react';

const BookList = ({ books, onDeleteBook, onEditBook }) => {
  return (
    <ul>
      {books.map(book => (
        <li key={book._id}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p>{book.status}</p>
          <button onClick={() => onDeleteBook(book._id)}>Delete</button>
          <button onClick={() => onEditBook(book)}>Edit</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
