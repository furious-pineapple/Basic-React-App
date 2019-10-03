import React from "react";
import "./DisplayList.css";

const DisplayList = props => {
  return (
    <div className="list">
      <h3>{props.title}</h3>
      {props.items}
    </div>
  );
};

export default DisplayList;
