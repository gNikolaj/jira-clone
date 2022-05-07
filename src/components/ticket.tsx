import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setTodos} from "../store/actions/todosAction";

interface TicketProps {
    ticketInfo: any
    hideStatus: boolean
}

const Ticket = ({ticketInfo, hideStatus}: TicketProps) => {

    const dispatch = useDispatch();
    const ticketsList = useSelector((state:any) => state.todos.todos);

    const sortTickets = (tmpList:any) => {
        tmpList.sort((a:any, b:any) => {
            let fa = a.completed.toLowerCase(),
                fb = b.completed.toLowerCase();
            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        });
    }

    const changeStatus = () => {
        let newStatus = '';
        if (ticketInfo.completed === 'To Do') {
            newStatus = 'In Progress';
        } else if (ticketInfo.completed === 'In Progress') {
            newStatus = 'Done';
        }
        const newTicketsList = ticketsList.map((item: any) => {
            if (item.id === ticketInfo.id) {
                return {...item, completed: newStatus}
            }
            return item;
        })
        sortTickets(newTicketsList);
        dispatch(setTodos({todos: newTicketsList}));
    }

    const clickTicket = (e:any) => {
        e.preventDefault();
        changeStatus();
    }

    return (
        <button className='ticket' onClick={clickTicket}>
            <div className='circle' style={{background: ticketInfo.color}}>
                <p>{ticketInfo.initials}</p>
            </div>
            <div className='ticket-text'>
                <p>{ticketInfo.title}</p>
            </div>
            {!hideStatus && <div className='ticket-state'>{ticketInfo.completed}</div>}
        </button>
    );
};

export default Ticket;
