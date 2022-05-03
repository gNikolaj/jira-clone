import React from 'react';
import BoardColumn from "./board-column";

const Board = () => {
    return (
        <div className='board'>
            <h2>Board</h2>
            <div className="board-box">
                <BoardColumn name={'To Do'}/>
                <div className="verticalLine"/>
                <BoardColumn name={'In Progress'}/>
                <div className="verticalLine"/>
                <BoardColumn name={'Done'}/>
            </div>
        </div>
    );
};

export default Board;
