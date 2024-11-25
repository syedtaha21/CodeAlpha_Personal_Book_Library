// src/components/UpdateBook.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateBook = () => {
  const { id } = useParams(); // Extract the book ID from URL params
  const navigate = useNavigate(); // To redirect after updating
  const [book, setBook] = useState({ bookname: '', price: '', image: '' });

  // Fetch the book data for pre-filling the form
  useEffect(() => {
    axios.get(`http://localhost:1000/api/v1/updateBooks/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error('Error fetching book:', error));
  }, [id]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:1000/api/v1/updateBook/${id}`, book)
      .then(() => {
        alert('Book updated successfully!');
        navigate('/'); // Redirect to the main page
      })
      .catch(error => console.error('Error updating book:', error));
  };

  return (
    <div className=' text-white bg-dark d-flex justify-content-center align-items-center' style={{minHeight:"91.5vh"}}>
      <h2 className="mb-4" style={{display:"flex", marginRight:"5%", textAlign:"center"}}>Update Book</h2>
      <form  style={{width:"700px", alignItems:"center"}} onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Book Name</label>
          <input type="text" className="form-control" name="bookname" value={book.bookname} onChange={handleChange} required />
        </div>
        <div className="form-group mb-3">
          <label>Price</label>
          <input type="number" className="form-control" name="price" value={book.price} onChange={handleChange} required />
        </div>
        <div className="form-group mb-3">
          <label>Image URL</label>
          <input type="text" className="form-control" name="image" value={book.image} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;