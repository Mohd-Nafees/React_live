import React from "react";
import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import {
  Book,
  ContactPhone,
  Description,
  Home,
  ImportantDevices,
  Info,
} from "@material-ui/icons";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-center text-lg-start text-white mt-5"
      style={{ backgroundColor: "#3e4551", disable: true }}
    >
      <div className="container p-4 pb-0 text-center">
        <section>
          <div className="row">
            <div className="col-lg-12 col-md-6 mb-4 mb-md-0 text-center">
              <h5 className="text-uppercase">FOOTER CONTENTS</h5>
              <hr className="mb-4 bg-white" />
              <p className="text">
                Every great developer you know got there by solving problems
                they were unqualified to solve until they actually did it.
                <br />
                One of my most productive days was throwing away 1000 lines of
                code.
                <br />
                The computer was born to solve problems that did not exist
                before.
              </p>
            </div>
          </div>
          <hr className="mb-4 bg-white" />

          <div className="row">
            <div className="container header ">
              <ul className="me-auto mb-2 mb-lg-0 list-inline">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    style={{ color: "white" }}
                  >
                    <Home style={{ marginBottom: "5px" }} /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/portfolio"
                    style={{ color: "white" }}
                  >
                    <ImportantDevices style={{ marginBottom: "5px" }} />{" "}
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/blog"
                    style={{ color: "white" }}
                  >
                    <Book style={{ marginBottom: "5px" }} /> Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/resume"
                    style={{ color: "white" }}
                  >
                    <Description style={{ marginBottom: "5px" }} /> Resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    style={{ color: "white" }}
                  >
                    <Info style={{ marginBottom: "5px" }} /> About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact"
                    style={{ color: "white" }}
                  >
                    <ContactPhone style={{ marginBottom: "5px" }} /> Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="mb-4 bg-white" />

        <section className="mb-4 text-center">
          <div
            className="link-icons mt-3 text-center"
            style={{ height: "45px" }}
          >
            <a href="https://www.facebook.com/mohd.nafees.56027" target={"_blank"} rel="noreferrer">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/nafees786_92/" target={"_blank"} rel="noreferrer">
              <Instagram />
            </a>
            <a href="https://www.linkedin.com/in/mohd-nafees-58172321b/" target={"_blank"} rel="noreferrer">
              <LinkedIn />
            </a>
            <a href="/" target={"_blank"} rel="noreferrer">
              <Twitter />
            </a>
            <a href="/" target={"_blank"} rel="noreferrer">
              <YouTube />
            </a>
            <a href="mailto:uniquedeveloper143@gmail.com" target={"_blank"} rel="noreferrer">
                <Email />
              </a>
            <a href="https://github.com/uniquedeveloper143" target={"_blank"} rel="noreferrer">
              <GitHub />
            </a>
          </div>
        </section>
      </div>

      <div
        className="text-center p-3 copy"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        {/* © 2022 Copyright:  */}
        {/* <a className="text-white" href="https://mdbootstrap.com/">
          Port Folio
        </a> */}
        Copyright &copy;
        <script>document.write(new Date().getFullYear());</script> All rights
        reserved | This template is made by Mohd Nafees.
      </div>
    </footer>
  );
}

export default Footer;
