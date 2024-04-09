import React from 'react';
import axios from 'axios';

const BookList = ({ books, onDeleteBook }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      onDeleteBook(id);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <ul>
      {books.map(book => (
        <li key={book._id}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p>{book.status}</p>
          <button onClick={() => handleDelete(book._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
