import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  const [status, setStatus] = useState("to-do-card");

  function drop(e) {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    var board_id = e.target.id;
    if (board_id == "to-do" || board_id == "progress" || board_id == "done") {
      card.className = board_id + "-card";
      e.target.appendChild(card);
    }
  }

  return (
    <div className="App">
      <div className="main">
        <Board id="to-do" className="board" drop={drop}>
          <Card id="card-1" className="to-do-card">
            <p>Card one</p>
          </Card>
          <Card id="card-2" className="to-do-card">
            <p>Card two</p>
          </Card>
          <Card id="card-3" className="to-do-card">
            <p>Card three</p>
          </Card>
        </Board>

        <Board id="progress" className="board" drop={drop}></Board>

        <Board id="done" className="board" drop={drop}></Board>
      </div>
    </div>
  );
}

export default App;
