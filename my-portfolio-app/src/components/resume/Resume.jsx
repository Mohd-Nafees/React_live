import { ArrowDownward, LinkedIn, LocationOn, MailOutline, Phone } from "@material-ui/icons";
import "./resume.css";

function Resume() {
  const education = [
    {
      id: 1,
      degree: "MCA",
      collageName: "Indus University Ahmedabad, Gujarat",
      year: 2022,
      percentage: "8.14 CGPA",
    },
    {
      id: 2,
      degree: "BCA",
      collageName: "Indus University Ahmedabad, Gujarat",
      year: 2020,
      percentage: "6.04 CGPA",
    },
    {
      id: 3,
      degree: "12th Class",
      collageName: "R.U.Inter College (U.P.)",
      year: 2016,
      percentage: "68.20 %",
    },
    {
      id: 4,
      degree: "10th Class",
      collageName: "S.A.K.J. Intermediate College (U.P.)",
      year: 2014,
      percentage: "80.50 %",
    },
  ];

  const project = [
    {
      id: 1,
      title: "Student Management System (PHP, Mysql)",
      description:
        "Student Management System (PHP, Mysql) The project is based on\
      Student Management system. It helps to check Admin Panel\
      everything about students and maintain and also Student can see\
      their details by entering roll no.",
    },
    {
      id: 2,
      title: "Game (HTML, CSS, Javascript)",
      description:
        "This is an animation based Game, in this Game have two Animals\
      Cat and Dog that Cat is jump to save from Dog.",
    },
    {
      id: 3,
      title: "Gym Management System (Python, Django)",
      description:
        "The Project is a software designed to help the gym to keep the\
      track of the day to day activities which take place in the gym.\
      Project deals with an online system designed for management of\
      customers,enquiries, and equipments, payment etc.",
    },
    {
      id: 4,
      title: "Note Taker (Java Servlet,JSP,Hibernate)",
      description:
        "This project is documentation based that Can store Information\
      and perform CRUD operations.",
    },
    {
      id: 5,
      title: "Tip Calculator (HTML,CSS,Javascript)",
      description:
        "The project is based on Calculate the Tip for each Employees.",
    },
  ];
  const certificate = [
    {
      id: 1,
      title: "Building Web Applications with PHP (12/2020)",
      academy: "University of Michigan(Coursera)",
    },
    {
      id: 2,
      title: "Python Programming ( 11/2020)",
      academy: "Great Learning Academy",
    },
    {
      id: 3,
      title:
        "Gujcost Sponsored National Level Five Days STTP on AI and ML\
      Applications in Data Science",
      academy: "Indus University",
    },
    {
      id: 4,
      title: "DevOpsWorkshop",
      academy: "Agile Group of Companies",
    },
  ];

  return (
    <div
      className="bg-move-resume" style={{ marginTop: "60px" }}
      // style={{
      //   backgroundImage: `url("assets/images/n1.jpg")`,
      // }}
    >      <p className="text-center contText">Resume</p>

      <div className="mainTop container mb-5 mt-5">
        <div className="row resumeTopRow">
          <div className="col resumeTopCol" id="">
            <span className="nameText "> Mohd Nafees Software Developer</span>
            <br />
            <br />
            <p className="resumeText">
              I see myself as ambitious, self made and diligent person who
              believes in teamwork and has a good learning attitude with an
              aspiration to forge ahead of competition.
            </p>
          </div>

          <div className="col resumeBottomCol" id="">
            <p className="">
              {" "}
              <MailOutline /> m.nafees786.mn17@ gmail.com
            </p>
            <p>
              <Phone /> + 91 7490078839
            </p>
            <p>
              <LinkedIn /> mohd-nafees-58172321b
            </p>
            <p>
              <LocationOn /> Ahmedabad Gujarat, India - 380023
            </p>
          </div>

          <div className="col resumeMiddleCol" id="">
            <div className="imgDiv">
              <img src="assets/images/Mohd Nafees Image2.png" alt="" className="resumeImg" />
            </div>
          </div>
        </div>
      </div>

      <div className="row educationRow container">
        <div className="col-6">
          <div className="education">
            <span className="educationListText">EDUCATIONS</span>

            {education.map((data) => {
              return (
                <div className="educationList mb-2 mt-2">
                  <span className="degree">{data.degree}</span>
                  <p className="collageText">{data.collageName}</p>
                  <p className="percentage">
                    {" "}
                    {data.year} <div className="year"></div> {data.percentage}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="education mt-3">
            <span className="educationListText">PROJECTS</span>
            {project.map((data) => {
              return (
                <div className="educationList mb-2 mt-2 p-2">
                  <span className="degree projectTitle">{data.title}</span>
                  <p className="mt-2 projectText">{data.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-6">
          <div className="education">
            <span className="educationListText">EXPERIENCE</span>

            <div className="educationList mb-2 mt-2">
              <span className="degree">Software Development</span>
              <p className="collageText">
                Hyperlink Infosystem Ahmedabad, Gujarat
              </p>
              <p className="percentage">
                06-01-2022 <div className="year">--</div> Present
              </p>
              <p className="mt-2 projectText">
                <div class="row">
                  <div className="col-2"></div>
                  <div className="col-10 text-left">
                    <ul>
                      <li>Software development in Django Framework.</li>
                      <li>API development in Django Rest Framework.</li>
                      <li>Frant End development in React JS.</li>
                    </ul>
                  </div>
                </div>
              </p>
            </div>
          </div>

          <div className="education mt-3">
            <span className="educationListText">SKIILS</span>

            <div className="educationList mb-2 mt-2">
              <span className="degree">Tech Languages</span>
              <br />
              <p>
                <span className="techLan">Python</span>
                <span className="techLan">Django</span>
                <span className="techLan">Django Rest Framework</span>
                <span className="techLan">PHP</span>
                <span className="techLan">Java</span>
                <span className="techLan">HTML</span>
                <span className="techLan">CSS</span>
                <span className="techLan">Bootstrap</span>
                <span className="techLan">Javascript</span>
                <span className="techLan">JQuery</span>
                <span className="techLan">React JS</span>
                <span className="techLan">Material UI</span>
              </p>
            </div>

            <div className="educationList mb-2">
              <span className="degree">Languages</span>
              <br />
              <p>
                <span className="techLan">Hndi</span>
                <span className="techLan">English</span>
                <span className="techLan">Gujarati</span>
                <span className="techLan">Urdu</span>
              </p>
            </div>
          </div>

          <div className="education mt-3">
            <span className="educationListText">CERTIFICATES</span>

            {certificate.map((data) => {
              return (
                <div className="educationList mb-2 mt-2">
                  <span className="degree">{data.title}</span>
                  <p className="percentage">{data.academy}</p>
                </div>
              );
            })}
          </div>

          <div className="education mt-3">
            <span className="educationListText">INTERESTS</span>

            <div className="educationList mt-2">
              {/* <span className="degree">Tongue Languages</span> */}
              {/* <br /> */}
              <p>
                <span className="techLan">Reading</span>
                <span className="techLan">Coding</span>
                <span className="techLan">Traveling</span>
                <span className="techLan">Sports</span>
                <span className="techLan">Research and Development</span>
              </p>
            </div>
          </div>

          <div className="education mt-3">
            <span className="educationListText">STRENGTHS</span>

            <div className="educationList mt-2">
              {/* <span className="degree">Tongue Languages</span> */}
              {/* <br /> */}
              <p>
                <span className="techLan">Self motivated</span>
                <span className="techLan">Time punctual</span>
                <span className="techLan">Hard working</span>
                <span className="techLan">Quick learning ability</span>
                <span className="techLan">Problem solving skills</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
