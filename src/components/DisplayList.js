import React from "react";

const DisplayList = props => {
  return (
    <div>
      <h3>{props.title}</h3>
      {props.items}
    </div>
  );
};

export default DisplayList;
