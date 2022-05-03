import React, {useState} from 'react';
import './App.css';
import TicketList from "./components/ticket-list";
import Board from "./components/board";
import axios from "axios";

export default App;

function App() {
    // let todosArray, usersArray;

    // const [todosArray, setTodosArray] = useState();
    const [usersArray, setUsersArray] = useState();



    const getInfo = async () => {
        const todos = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const users = await axios.get('https://jsonplaceholder.typicode.com/users');

        setUsersArray(() => users.data);
    }


    getInfo().then();

    return (
        <div className="App">
            <TicketList/>
            <Board/>
        </div>
    );
}
