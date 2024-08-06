import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditBookForm = ({ book, onUpdateBook, show, onHide }) => {
  const [title, setTitle] = useState(book.title);
  const [description, setDescription] = useState(book.description || '');
  const [status, setStatus] = useState(book.status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBook = { title, description, status };
    await onUpdateBook(book._id, updatedBook);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="To Read">To Read</option>
              <option value="Reading">Reading</option>
              <option value="Finished">Finished</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditBookForm;
