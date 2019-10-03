import React from "react";
const Item = props => {
  return (
    <div>
      <p>{props.task}</p>
      <button onClick={() => props.removeItem(props.id)}>Delete</button>
      <button onClick={() => props.updateStatus(props.id)}>
        {props.status ? "X" : "✓"}
      </button>
    </div>
  );
};

export default Item;
