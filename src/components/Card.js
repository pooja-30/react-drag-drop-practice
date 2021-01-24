import React from "react";

function Card(props) {
  function dragStart(e) {
    e.dataTransfer.setData("card_id", e.target.id);
  }

  function dragOver(e) {
    e.preventDefault();
  }
  return (
    <div
      id={props.id}
      className={props.className}
      onDragOver={dragOver}
      draggable="true"
      onDragStart={dragStart}
    >
      {props.children}
    </div>
  );
}

export default Card;
