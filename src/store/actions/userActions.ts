import { userTypes } from "../types";

export const setUsers = (users: any) => ({
  type: userTypes.SET_USERS,
  payload: users,
});
