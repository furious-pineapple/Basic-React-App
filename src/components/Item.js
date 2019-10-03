import React from "react";
const Item = props => {
  return (
    <div>
      <p>{props.item.task}</p>
      <button onClick={props.removeItem}>Delete</button>
      <button onClick={props.updateStatus}>
        {props.item.status ? "X" : "✓"}
      </button>
    </div>
  );
};

export default Item;
