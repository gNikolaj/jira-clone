import React, {useEffect, useState} from 'react';
import './App.css';
import TicketList from "./components/ticket-list";
import Board from "./components/board";
import {getTickets, getUsers} from "./api";

export default App;

function App() {

    const [todosArray, setTodosArray] = useState([]);
    const [usersArray, setUsersArray] = useState([]);

    useEffect(() => {
        getTickets().then((ticketArray) => {
            const filteredTickets = ticketArray.filter((item: any) => {
                return item.id % 20 === 0;
            })

            filteredTickets.map((item:any) => {
                item.completed = 'To Do';
            })
            setTodosArray(filteredTickets);
        });

        getUsers().then((usersList) => setUsersArray(usersList));
    }, [])

    return (
        <div className="App">
            <TicketList ticketsList={todosArray} usersList={usersArray}/>
            <Board ticketsList={todosArray} usersList={usersArray}/>
        </div>
    );
}
