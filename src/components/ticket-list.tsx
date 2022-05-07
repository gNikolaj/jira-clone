import React from 'react';
import Ticket from "./ticket";
import {useSelector} from "react-redux";

const TicketList = () => {

    const ticketsList = useSelector((state:any) => state.todos.todos);

    return (
        <div className='ticket-list'>
            <h2>Tickets list</h2>
            <div className='ticket-box'>
                {
                    ticketsList.map((item:any, index:number) => (
                        <Ticket ticketInfo={item} hideStatus={false} key={index}/>
                    ))
                }
            </div>
        </div>
    );
};

export default TicketList;
