import React from "react";
import BoardColumn from "./board-column";
import { useSelector } from "react-redux";

const Board = () => {
  const ticketsList = useSelector((state: any) => state.todos.todos);

  return (
    <div className="board">
      <h2>Board</h2>
      <div className="board-box">
        <BoardColumn name={"To Do"} ticketsList={ticketsList} />
        <div className="verticalLine" />
        <BoardColumn name={"In Progress"} ticketsList={ticketsList} />
        <div className="verticalLine" />
        <BoardColumn name={"Done"} ticketsList={ticketsList} />
      </div>
    </div>
  );
};

export default Board;
