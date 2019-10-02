import React from "react";
const Item = props => {
  return (
    <p>
      {props.task}
      <button onClick={() => props.removeItem(props.id)}>X</button>
    </p>
  );
};

export default Item;
