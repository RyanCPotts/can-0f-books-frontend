import React, { useState } from 'react';
import axios from 'axios';

const AddBookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/books', {
        title,
        description,
        status
      });
      onAddBook(response.data);
      setTitle('');
      setDescription('');
      setStatus('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <label>Status:</label>
      <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
