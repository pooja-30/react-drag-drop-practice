import React from "react";

function Board(props) {
  function dragOver(e) {
    e.preventDefault();
  }

  return (
    <div
      id={props.id}
      className={props.className}
      onDragOver={dragOver}
      onDrop={props.drop}
    >
      {props.children}
    </div>
  );
}

export default Board;
