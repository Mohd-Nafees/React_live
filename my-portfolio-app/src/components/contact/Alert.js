import React from "react";

function Alert() {
  return (
    <div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Thanks for contact me!</strong> Your response has been submitted successfully!!.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>

      </div>
    </div>
  );
}

export default Alert;
