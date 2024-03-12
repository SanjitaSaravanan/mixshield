import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleSetActiveLink = (link) => {
    setActiveLink(link === activeLink ? null : link);
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark border-0">
          <div className="d-flex w-100 justify-content-between">
            <div className="col-md-7 d-flex align-items-start ">
              <Link to="/home" className="mixshield-text h1-400 navbar-brand align-self-start">
                MixShield 
              </Link>
            </div>
            <div className="col-md-5 d-flex align-items-end justify-content-evenly mr-0">
              <button
                className="navbar-toggler custom-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="navbarNavLabel">
                    Navigation
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ms-auto">
                  <ul className="navbar-nav justify-content-end">
                    <li className="nav-item mr-auto">
                      <Link
                        to="/home"
                        className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`}
                        onClick={() => handleSetActiveLink('Home')}
                      >
                       <span class="custom-h5">Home</span>
                      </Link>
                    </li>
                    <li className="nav-item mr-auto">
                      <Link
                        to="/about"
                        className={`nav-link ${activeLink === 'About' ? 'active' : ''}`}
                        onClick={() => handleSetActiveLink('About')}
                      >
                        <span class="custom-h5">About</span>
                      </Link>
                    </li>
                    <li className="nav-item mr-auto">
                      <Link
                        to="/contact"
                        className={`nav-link ${activeLink === 'Contact' ? 'active' : ''}`}
                        onClick={() => handleSetActiveLink('Contact')}
                      >
                        <span class="custom-h5">Contact</span>
                      </Link>
                    </li>
                    <li className="nav-item  mr-auto">
                      <Link
                        to="/feedback"
                        className={`nav-link ${activeLink === 'Feedback' ? 'active' : ''}`}
                        onClick={() => handleSetActiveLink('Feedback')}
                      >
                        <span class="custom-h5">Feedback</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
