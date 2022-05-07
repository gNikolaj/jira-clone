import { todosTypes } from "../types";

export const setTodos = (todos: any) => ({
  type: todosTypes.SET_TODOS,
  payload: todos,
});
