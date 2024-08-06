import React, { useState, useEffect } from 'react';
import './Forms.css'; // Import the specific CSS for forms

const EditBookForm = ({ book, onUpdateBook }) => {
  const [title, setTitle] = useState(book.title || '');
  const [description, setDescription] = useState(book.description || '');
  const [status, setStatus] = useState(book.status || '');

  useEffect(() => {
    setTitle(book.title || '');
    setDescription(book.description || '');
    setStatus(book.status || '');
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateBook(book._id, { title, description, status });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-book-form">
      <label htmlFor="title">Title:</label>
      <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

      <label htmlFor="status">Status:</label>
      <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
        <option value="">Select Status</option>
        <option value="To Read">To Read</option>
        <option value="Reading">Reading</option>
        <option value="Finished">Finished</option>
      </select>

      <button type="submit">Update Book</button>
    </form>
  );
};

export default EditBookForm;
