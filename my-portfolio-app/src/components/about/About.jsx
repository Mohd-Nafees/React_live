import "./about.css";
import { ArrowDownward } from "@material-ui/icons";
import { Link } from "react-router-dom";

function About() {

  return (
    <div style={{ marginTop: "60px" }}>
      <div className="row topRow">
        <div className="col text-col">
          <p className="pText">
            <span className="hello">Hello friends!</span>
            <br />
            <br />
            I'm Mohd Nafess I'm from Ahemdabad Gujarat India -380023 I completed
            my Post Graduation Integrated Master of Computer Application(I-MCA)
            Degree from Indus University Ahmedabad.
            {/* Full Stack of a software Developer Front end development, Back end development, Database, Server, API, and version controlling systems. */}
          </p>
          <p className="pText">
            I can build an application using the following Back end Technology
            :-{" "}
            <span className="techLaguage">
              Python, Django, Django Rest Framework,{" "}
            </span>
            <br />
            and Front end Technology :-{" "}
            <span className="techLaguage">
              HTML, CSS, Bootstrap, JavaScript, Jquery, and ReactJs.
            </span>
          </p>
        </div>

        <div className="col image-col">
        {/* <img src="assets/images/Mohd Nafees Image2.png" alt="" className="rounded-circle z-depth-2 sideimage"/> */}
          <img
            src="assets/images/Mohd Nafees Image2.png"
            className="myImage"
            alt="..."
          />
          {/* <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div> */}
        </div>
      </div>

      <div className="container text-center">
        <p className="text-center contText">Our Achievements</p>
        <br />
        <p className="contp mb-4">
          Here my Skills and works. <ArrowDownward />
        </p>

        <div className="row skillsRow ">
          <div className="col skillsCol">
            <Link to="/resume">
              <p className="titleText">Experience</p>
              <p className="titleValue">1 + Years</p>
            </Link>
          </div>
          <div className="col skillsCol">
            <Link to="/skill">
              <p className="titleText">Skills</p>
              <p className="titleValue">12 +</p>
            </Link>
          </div>
          <div className="col skillsCol">
            <Link to="/certificate">
              <p className="titleText">Certificates</p>
              <p className="titleValue">6 +</p>
            </Link>
          </div>
          <div className="col skillsCol">
            <Link to="/project">
              <p className="titleText">Projects</p>
              <p className="titleValue">17 +</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
