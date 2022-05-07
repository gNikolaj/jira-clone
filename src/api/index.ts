import axios from "axios";

export const getTickets = async () => {
  const { data: ticketArray } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return ticketArray;
};

export const getUsers = async () => {
  const { data: usersList } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return usersList;
};
