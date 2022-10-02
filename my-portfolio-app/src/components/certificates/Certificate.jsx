import { ArrowDownward } from "@material-ui/icons";
import React from "react";
import "./certificate.css";

function Certificate() {
  const certificates = [
    {
      id:1,
      imgUrl:"assets/Certificates_Images/Coursera Certificate.jpg",
    },
    {
      id:2,
      imgUrl:"assets/Certificates_Images/Devops certification.jpg",
    },
    {
      id:3,
      imgUrl:"assets/Certificates_Images/GLA AAP.jpg",
    },
    {
      id:4,
      imgUrl:"assets/Certificates_Images/GLA QBA.jpg",
    },
    {
      id:5,
      imgUrl:"assets/Certificates_Images/STTP Certificate.jpg",
    },
    {
      id:6,
      imgUrl:"assets/Certificates_Images/Mohd Nafees GLA.jpg",
    },
  ]
  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <p className="text-center contText mt-5">Certificates</p>
      <br />
      <p className="contp mb-4">
        Here my Certificates that I avhieved. <ArrowDownward />
      </p>

      <div className="row techRow">
        {
            certificates.map((certi) => {
              return(
                <div className="col-6 certiDiv">
                {" "}
                <a href={certi.imgUrl} target={"_blank"} rel="noreferrer">
                  <img
                    src={certi.imgUrl}
                    alt=""
                    className="certiImg" 
                  />
                  <div className="overlay">
                    <div className="certiBtnText">Click to show me</div>
                  </div>
                </a>{" "}
              </div>
              )
            })
        }

      </div>
    </div>
  );
}

export default Certificate;
