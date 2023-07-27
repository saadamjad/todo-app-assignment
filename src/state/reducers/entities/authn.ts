import {RESET_REDUCER} from '../../action-types/common';
import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../../action-types/register';

const INITIAL_STATE = {
  users: {
    teachers: [
      {
        id: 1,
        email: 'saad@gmail.com',
        password: '12345',
      },
    ],
    students: [
      {
        id: 1,
        email: 'student@gmail.com',
        password: '12345',
      },
    ],
  },
  loggedInUser: {},
};

const AuthnEntityReducer = (
  state = INITIAL_STATE,
  action: IAction,
): allAnyTypes => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      const data = {
        ...state.users,
        teachers: [...state.users.teachers, action.payload],
      };
      return {
        ...state,
        users: data,
      };
    }

    case LOGIN_SUCCESS: {
    
      return {
        ...state,
        loggedInUser: action.payload,
      };
    }

    case RESET_REDUCER: {
      return {
        ...INITIAL_STATE,
      };
    }

    default:
      return state;
  }
};

export {AuthnEntityReducer};
