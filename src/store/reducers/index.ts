import {combineReducers} from "redux";
import userReducer from './userReducer';
import todosReducer from "./todosResucer";

const rootReducer = combineReducers({
    users: userReducer,
    todos: todosReducer
})

export default rootReducer;