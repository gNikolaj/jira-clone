import React, {useEffect} from 'react';
import './App.css';
import TicketList from "./components/ticket-list";
import Board from "./components/board";
import {getTickets, getUsers} from "./api";
import {useDispatch} from 'react-redux';
import {setUsers} from "./store/actions/userActions";
import {setTodos} from "./store/actions/todosAction";

export default App;

function App() {

    const dispatch = useDispatch();

    const colors = ['#F9ED69', '#F08A5D', '#B83B5E', '#6A2C70'];

    const getInitialsFromUsers = (userList:any) => {
        const nameAndSurname: any = userList.map((item: any) => {
            return item.name.split(' ');
        })

        const initials: any = nameAndSurname.map((item: any) => {
            let tmp = '';
            item.forEach((value: any) => {
                tmp += value.charAt(0);
            });
            return tmp;
        })

        return initials;
    }

    const finalTodoList = (initials:any) => {
        getTickets().then((ticketArray) => {
            const filteredTickets = ticketArray.filter((item: any) => {
                return item.id % 20 === 0;
            })

            filteredTickets.map((item: any, index: number) => {
                item.completed = 'To Do';
                item.color = colors[index % colors.length];
                item.initials = initials[index];
            })

            dispatch(setTodos({todos: filteredTickets}));
        });
    }

    useEffect(() => {
        getUsers().then((userList) => {
            dispatch(setUsers({users: userList}));
            const userInitials = getInitialsFromUsers(userList);
            finalTodoList(userInitials);
        });
    }, [])

    return (
        <div className="App">
            <TicketList/>
            <Board />
        </div>
    );
}
