import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

function BestBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooks() {
      try {
        const response = await axios.get("http://localhost:3000/books");
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
    getBooks();
  }, []);

  return (
    <>
      {books.length ? (
        <Carousel>
          {books.map(book => (
            <Carousel.Item key={book._id}>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <p>{book.status}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <h3>No books found.</h3>
      )}
    </>
  );
}

export default BestBooks;
