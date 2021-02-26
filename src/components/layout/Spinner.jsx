import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt="Loading..."
        style={{
          width: "200px",
          display: "block",
        }}
      />
    </>
  );
};

export default Spinner;
