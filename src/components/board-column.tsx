import React from 'react';
import Ticket from "./ticket";

interface BoardProps {
    name: string;
}

const BoardColumn = ({name}: BoardProps) => {
    return (
        <div className='board-column'>
            <h3> {name} </h3>
            <div className='board-column-box'>
                <Ticket/>
                <Ticket/>
            </div>
        </div>
    );
};

export default BoardColumn;
