import React from "react";

const Item = props => {
  return <li style={{ listStyleType: "none" }}>{props.task}</li>;
};

export default Item;
