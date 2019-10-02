import React from "react";
const Item = props => {
  return (
    <p>
      {props.task}
      <button onClick={() => props.removeItem(props.id)}>Delete</button>
      <button onClick={() => props.updateStatus(props.id)}>
        {props.status ? "X" : "✓"}
      </button>
    </p>
  );
};

export default Item;
