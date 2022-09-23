import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="bg-light">
      <nav class="navbar navbar-expand-lg container">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Alif Anugrah
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <Link to="/" class="nav-item text-decoration-none">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </Link>
              <Link to="/about" class="nav-item text-decoration-none">
                <a class="nav-link" href="#">
                  About
                </a>
              </Link>
              <Link to="/experience" class="nav-item text-decoration-none">
                <a class="nav-link" href="#">
                  Experience
                </a>
              </Link>
              <Link to="/skills" class="nav-item text-decoration-none">
                <a class="nav-link" href="#">
                  Skills
                </a>
              </Link>
              <Link to="/interest" class="nav-item text-decoration-none ">
                <a class="nav-link" href="#">
                  Interest
                </a>
              </Link>
              <Link to="/awards" class="nav-item text-decoration-none ">
                <a class="nav-link" href="#">
                  Awards
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
