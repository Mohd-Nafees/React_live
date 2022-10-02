import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import Typical from "react-typical";
import "./profile.css";

function Profile() {
  return (
    <div className="px-0">
      <div className="row mx-5">
        <div className="col-6 profile-top">
          <div className="p-3 profile-container">
            <div className="profile-details-name mb-0">
              <div className="primary-text text-center">
                {" "}
                HEY THERE ! <span className="im"> I'M </span>
              </div>
            </div>

            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <div className="profile-text">
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Mohd Nafees",
                      2000,
                      "Web Developer",
                      2000,
                      // "Python Developer",
                      // 1000,
                      // "Django Developer",
                      // 1000,
                      // "Django Rest Framework Developer",
                      // 1000,
                      // "React.js Developer",
                      // 1000,
                    ]}
                  />
                </div>
                <span className="profile-role-tagline">
                  Builging unique web applications with front and back end in
                  various technologies.
                </span>
              </span>
            </div>

            <div
              className="link-icons mt-3 mb-2 text-center"
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

            <div className="profile-options text-center mt-3">
              {/* <button className="btn ">
                {""}
                Hire Me{" "}
              </button> */}
              <a href="assets/Certificates_Images/Mohd_Nafees_resume.pdf" download="mohd_nafees_cv.pdf">
                <button className="btn myResume"> Get Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="p-1">
            <div className="profile-image">
              <div className="inner-profile-box">
                <div
                  className=""
                  //   style={{
                  //     backgroundImage: `url("assets/images/images.jpg 14")`,
                  //     backgroundRepeat: "no-repeat",
                  //     width: "90%",
                  //     // height: "600px",
                  //     backgroundSize: "cover",
                  //   }}
                >
                  <img src="assets/images/Mohd Nafees Image2.png" alt="" className="rounded-circle z-depth-2 sideimage"/>
                  {/* <img
                    src="assets/images/images.jpg 12"
                    alt=""
                    className="rounded-circle z-depth-2 sideimage"
                  /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="right-link-icons mt-3 text-center">
            <a href="/">
              <Facebook />
            </a>
            <a href="/">
              <Instagram />
            </a>
            <a href="/">
              <LinkedIn />
            </a>
            <a href="/">
              <Twitter />
            </a>
            <a href="/">
              <YouTube />
            </a>
            <a href="/">
              <GitHub />
            </a>
          </div>

          <div className="right-profile-options text-center mt-3">
            {/* <button className="btn ">
                {""}
                Hire Me{" "}
              </button> */}
            <a href="assets/Certificates_Images/Mohd_Nafees_resume.pdf" download="mohd_nafees_cv.pdf">
              <button className="btn myResume"> Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
