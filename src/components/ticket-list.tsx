import React from 'react';
import Ticket from "./ticket";

const TicketList = () => {

    return (
        <div className='ticket-list'>
            <h2>Tickets list</h2>
            <div className='ticket-box'>
                <Ticket/>
                <Ticket/>
                <Ticket/>
                <Ticket/>
            </div>
        </div>
    );
};

export default TicketList;
