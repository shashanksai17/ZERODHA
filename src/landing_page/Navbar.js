import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mb-3" style={{ backgroundColor: "#ffffff", padding: "1rem" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="Logo" style={{ width:"25%" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link active" to="/signup">Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/About_Page">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/productPage">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/PricingPage/">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="SupportPage">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
