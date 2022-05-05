import React from 'react';
import BoardColumn from "./board-column";

interface BoardProps {
    ticketsList: any;
    usersList: any;
}

const Board = ({ticketsList, usersList}:BoardProps) => {
    return (
        <div className='board'>
            <h2>Board</h2>
            <div className="board-box">
                <BoardColumn name={'To Do'} ticketsList={ticketsList} usersList={usersList}/>
                <div className="verticalLine"/>
                <BoardColumn name={'In Progress'} ticketsList={ticketsList} usersList={usersList}/>
                <div className="verticalLine"/>
                <BoardColumn name={'Done'} ticketsList={ticketsList} usersList={usersList}/>
            </div>
        </div>
    );
};

export default Board;
