import React from 'react';
import Ticket from "./ticket";

interface BoardProps {
    name: string;
    ticketsList: any;
}

const BoardColumn = ({name, ticketsList}: BoardProps) => {

    return (
        <div className='board-column'>
            <h3> {name} </h3>
                <div className='board-column-box'>
                    {ticketsList.map((item: any, index: number) => (
                        item.completed === name
                            ? <Ticket ticketInfo={item} hideStatus={true} key={index}/>
                            : null
                    ))}
                </div>
        </div>
    );
};

export default BoardColumn;
