import React from "react";
import "./navbar.css";
import {
  Book,
  ContactPhone,
  Description,
  Home,
  ImportantDevices,
  Info,
  ViewHeadline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import ListIcon from '@material-ui/icons/List';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="assets/images/777.gif"
            className="circle logo mb-2"
            alt="..."
            style={{ marginBottom: "5px" }}
          />
          <span className="logoTitile">Software Developer</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "1px solid red" }}
        >
          <span><ViewHeadline /> </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: "black" }}
              >
                <Home style={{ marginBottom: "5px" }} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/project"
                style={{ color: "black" }}
              >
                <ImportantDevices style={{ marginBottom: "5px" }} /> Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/testimonial"
                style={{ color: "black" }}
              >
                <Book style={{ marginBottom: "5px" }} /> Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/resume"
                style={{ color: "black" }}
              >
                <Description style={{ marginBottom: "5px" }} /> Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{ color: "black" }}>
                <Info style={{ marginBottom: "5px" }} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                style={{ color: "black" }}
              >
                <ContactPhone style={{ marginBottom: "5px" }} /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
