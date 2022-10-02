import { ArrowDownward } from "@material-ui/icons";
import "./contact.css";
import GoogleMap from "./GoogleMap";
import emailjs from 'emailjs-com'
import { useState } from "react";
import Alert from "./Alert";

function Contact() {
  const [alert, setAlert] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, seMessage] = useState("");
  

  const changeHandlerName = (e) => {
    e.preventDefault();
    setName(e.target.value)
  };
  const changeHandlerPhone = (e) => {
    e.preventDefault();
    setPhone(e.target.value)
  };
  const changeHandlerEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  };
  const changeHandlerMessage = (e) => {
    e.preventDefault();
    seMessage(e.target.value)
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kwcymye', 'template_wile01x', e.target, 'vmXla_etECbtTzaw1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setName("")
      setEmail("")
      setPhone("")
      seMessage("")

      setAlert("success");
      setTimeout( () => {
       setAlert("")
     }, 5000);

  };

  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <p className="text-center contText">Get in touch</p>
      <br />
      <p className="contp">
        Do you need a full Stack Web Developer? Please contact me.{" "}
        <ArrowDownward />
      </p>
      <br />
      
      { alert ==="success" ? <Alert /> : "" }

      <div className="row mb-5">
        <div className="col mx-5">
          <GoogleMap />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <form className="was-validated" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                className="form-control"
                id="uname"
                placeholder="Full Name"
                name="name"
                pattern="[+.A-Za-z ]{3,}"
                required
                value={name}
                onChange={changeHandlerName}
              />
              <div className="valid-feedback">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="num">Mobile Number *</label>
              <input
                type="text"
                className="form-control"
                id="uname"
                placeholder="+91 9867450000"
                name="num"
                pattern="[+0-9]{10,}"
                required
                value={phone}
                onChange={changeHandlerPhone}
              />
              <div className="valid-feedback">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                value={email}
                onChange={changeHandlerEmail}
              />
              <div className="valid-feedback">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message *
              </label>
              <textarea
                className="form-control"
                name="message"
                id="exampleFormControlTextarea1"
                rows="3"
                minLength={8}
                required
                value={message}
                onChange={changeHandlerMessage}
              ></textarea>
              <div className="valid-feedback">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="remember"
                  required
                />{" "}
                I agree on form data.
                {/* <div className="valid-feedback">Valid.</div> */}
                <div className="invalid-feedback">
                  Check this checkbox to continue.
                </div>
              </label>
            </div>
            <button type="submit" className="btn btn-primary sub-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="row text-center contStyle">
        <div className="col-lg-3 col-sm-6 mydivstyle">
          <h4>
            <i className="fa fa-phone-square"> Call Me</i>
          </h4>
          {/* <p className="mt-3 font-weight-bold">
            <a className="text-danger" href="tel:+91 7048607063">
              +91 7048607063
            </a>{" "}
          </p> */}
          <p className="mt-3 font-weight-bold">
            <a className="text-danger" href="tel:+91 7490078839">
              +91 7490078839
            </a>{" "}
          </p>
        </div>

        <div className="col-lg-3 col-sm-6 mydivstyle">
          <h4>
            <i className="fa fa-envelope"> Send Email</i>
          </h4>
          <p className="mt-3 font-weight-bold">
            <a className="text-danger" href="mailto:m.nafees786.mn17@gmail.com">
              m.nafees786.mn17@gmail.com
            </a>{" "}
          </p>
        </div>

        <div className="col-lg-3 col-sm-6 mydivstyle">
          <h4>
            <i className="fa fa-address-card"> Office Address</i>
          </h4>
          <p className="mt-3 font-weight-bold">
            <a
              className="text-danger"
              href="http://maps.google.com/maps?q=M Akmal Dresses+Gautam Shah Estate+Rakhiyal+Ahmedabad+Gujarat+380023"
            >
              Ajit mil Rakhiyal Ahmedabad Gujarat-380023
            </a>{" "}
          </p>
        </div>

        <div className="col-lg-3 col-sm-6 mydivstyle">
          <h4>
            <i className="fa fa-clock-o"> Working Hours</i>
          </h4>
          <p className="mt-3 font-weight-bold text-danger">
            9 : 00 AM to 7 : 00 PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
