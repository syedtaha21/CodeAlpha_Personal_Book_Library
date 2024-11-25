import React from 'react';
import './Home.css'; // Ensure you keep custom CSS minimal, as Bootstrap handles most styles
import { Link } from 'react-router-dom';

function Home() {
  const image = require('../images/books23.png');
  
  return (
    <div className="home-page bg-dark text-white vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">
          {/* Left Column */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="display-2 fw-bold mb-4">Book Store</h1>
            <h2 className="display-6 mb-4">Your Gateway to Knowledge</h2>
            <p className="lead text-secondary">
              Discover a wide range of books tailored just for you. Dive in and explore your next great read!
            </p>
            <Link to="/books" className="btn btn-primary btn-lg px-5 py-3 mt-3 shadow-sm">
              View Books
            </Link>
          </div>
          
          {/* Right Column */}
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src={image}
              alt="Books"
              className="img-fluid rounded shadow-lg animate__animated animate__fadeInRight"
              style={{ maxHeight: '80vh' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
