import React from 'react';
import Ticket from "./ticket";

interface TicketsListProps {
    ticketsList: any;
    usersList: any;
}

const TicketList = ({ticketsList, usersList}: TicketsListProps) => {

    console.log(ticketsList);
    console.log(usersList);

    return (
        <div className='ticket-list'>
            <h2>Tickets list</h2>
            <div className='ticket-box'>
                {
                    ticketsList.map((item:any, index:number) => (
                        <Ticket name={'AA'} text={item.title} status={item.completed} key={index}/>
                    ))
                }
            </div>
        </div>
    );
};

export default TicketList;
