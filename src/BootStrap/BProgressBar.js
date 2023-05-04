import React from "react";
import { ProgressBar } from "react-bootstrap";
//variant:'warning','danger',;info','sucess
// striped variant="success"
function BProgressBar() {
  return (
    <div>
      <div style={{ display: "block", backgroundColor: "red" }}>
        <ProgressBar
          now={90}
          striped
          variant="success"
          label="nikhil"
          animated
        />
      </div>
    </div>
  );
}

export default BProgressBar;
