import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="container text-center mt-5">
      <div className="content-404">
        <img
          src="/assets/images/404.png"
          className="img-responsive w-50"
          alt=""
        />
        <h1>
          <b>OPPS!</b> We Couldn’t Find this Page
        </h1>
        <p>
          Uh... So it looks like you block something. The page you are looking
          for has up and Vanished.
        </p>
        <h2>
          <Link to="/">Click me back to Home</Link>
        </h2>
      </div>
    </div>
  );
}

export default Page404;
