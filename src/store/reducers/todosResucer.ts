import { todosTypes } from "../types";

const initialState = { todos: [] };

const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case todosTypes.SET_TODOS: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default todosReducer;
