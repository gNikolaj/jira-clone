import {userTypes} from '../types';

const initialState = {users: []};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case userTypes.SET_USERS: {
            return {...state, ...action.payload}
        }
        default:
            return state;
    }
}

export default userReducer;