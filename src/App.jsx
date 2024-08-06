// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddBookForm from './AddBookForm';
import BestBooks from './BestBooks';
import BookList from './BookList';
import EditBookForm from './EditBookForm';
import { Modal, Toast } from 'react-bootstrap';

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
      setToastMessage('Failed to fetch books. Please try again later.');
      setShowToast(true);
    }
  };

  const handleAddBook = async (bookData) => {
    try {
      const response = await axios.post('http://localhost:3000/books', bookData);
      setBooks(prevBooks => [...prevBooks, response.data]);
      setToastMessage('Book added successfully!');
      setShowToast(true);
    } catch (error) {
      console.error('Error adding book:', error);
      setToastMessage('Failed to add book.');
      setShowToast(true);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/books/${id}`);
      setBooks(prevBooks => prevBooks.filter(book => book._id !== id));
      setToastMessage('Book deleted successfully!');
      setShowToast(true);
    } catch (error) {
      console.error('Error deleting book:', error);
      setToastMessage('Failed to delete book.');
      setShowToast(true);
    }
  };

  const handleEditBook = (book) => {
    setSelectedBook(book);
    setShowEditModal(true);
  };

  const handleUpdateBook = async (bookId, updatedData) => {
    try {
      await axios.put(`http://localhost:3000/books/${bookId}`, updatedData);
      fetchBooks();
      setShowEditModal(false);
      setSelectedBook(null);
      setToastMessage('Book updated successfully!');
      setShowToast(true);
    } catch (error) {
      console.error('Error updating book:', error);
      setToastMessage('Failed to update book.');
      setShowToast(true);
    }
  };

  return (
    <div>
      <h1>Friday: My Bookshelf 4.0</h1>
      <AddBookForm onAddBook={handleAddBook} />
      <BestBooks />  
      <BookList books={books} onDeleteBook={handleDeleteBook} onEditBook={handleEditBook} />
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        {selectedBook && (
          <EditBookForm book={selectedBook} onUpdateBook={handleUpdateBook} />
        )}
      </Modal>
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>
    </div>
  );
};

export default App;
