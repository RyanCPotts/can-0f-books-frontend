import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddBookForm from './AddBookForm';
import BookList from './BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3001/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleAddBook = async (newBook) => {
    try {
      const response = await axios.post('http://localhost:3001/books', newBook);
      setBooks(prevBooks => [...prevBooks, response.data]);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      setBooks(prevBooks => prevBooks.filter(book => book._id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };  

  return (
    <div>
      <h1>My Bookshelf</h1>
      <AddBookForm onAddBook={handleAddBook} />
      <BookList books={books} onDeleteBook={handleDeleteBook} />
    </div>
  );
};

export default App;
