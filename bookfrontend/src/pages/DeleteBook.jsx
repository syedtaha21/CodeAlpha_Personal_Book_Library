// src/components/DeleteBook.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteBook = () => {
  const { id } = useParams();  // Get the book ID from the URL
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log("Book ID to delete:", id);

    axios.delete(`http://localhost:1000/api/v1/deleteBooks/${id}`)  // Dynamic URL
      .then(() => {
        alert('Book deleted successfully!');
        navigate('/books');  // Redirect to main page after deletion
      })
      .catch(error => {
        console.error('Error deleting book:', error.response?.data || error.message);
        alert('Failed to delete the book. Please try again.');
      });
  };

  return (
    <div className='bg-dark d-flex justify-content-center align-items-center text-white' style={{ minHeight: "91.5vh" }}>
      <div className='text-center'>
        <h2 className="mb-4 text-danger">Confirm Deletion</h2>
        <p>Are you sure you want to delete this book?</p>
        <button className="btn btn-danger me-3" onClick={handleDelete}>Yes, Delete</button>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteBook;
