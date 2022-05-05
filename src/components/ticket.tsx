import React from 'react';

interface TicketProps {
    name: string;
    text: string;
    status: string;
}

const Ticket = ({name, text, status}: TicketProps) => {

    const changeStatus = (e:any) => {
        e.preventDefault();
    }

    return (
        <button className='ticket' onClick={changeStatus}>
            <div className='circle'>
                <p>{name}</p>
            </div>
            <div className='ticket-text'>
                <p>{text}</p>
            </div>
            <div className='ticket-state'>{status}</div>
        </button>
    );
};

export default Ticket;
