import React, { useState } from 'react';

const AddBookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !status) {
      alert('Title and status are required.');
      return;
    }
    onAddBook({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
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

      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
