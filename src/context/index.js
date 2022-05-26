import { createContext, useContext, useReducer } from 'react';
import ACTIONS from './types';

const initialState = {
  userInformation: {
    user: null,
    error: null,
  },
};

const context = createContext();

export const MentrContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer((currentState, action) => {
    switch (action.type) {
      case ACTIONS.LOGIN:
        return {
          ...currentState,
          userInformation: {
            ...currentState.userInformation,
            user: action.user,
          },
        };
      case ACTIONS.LOGOUT:
        return {
          ...currentState,
          userInformation: {
            ...currentState.userInformation,
            user: null,
          },
        };
      case ACTIONS.REQUEST_SAVE_USER_SUCCESS:
        return {
          ...currentState,
          userInformation: {
            ...currentState.userInformation,
            error: null,
            user: action.user,
          },
        };
      case ACTIONS.REQUEST_SAVE_USER_FAIL:
        return {
          ...currentState,
          userInformation: {
            ...currentState.userInformation,
            error: action.error,
          },
        };
      default:
        return currentState;
    }
  }, initialState);

  const login = (user) => {
    dispatch({ type: ACTIONS.LOGIN, user });
  };

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
  };

  const saveUser = async (user) => {
    try {
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      };
      const response = await fetch('/api/user', options);
      const data = await response.json();
      dispatch({ type: ACTIONS.REQUEST_SAVE_USER_SUCCESS, user: data?.data?.updateUser });
    } catch (error) {
      dispatch({ type: ACTIONS.REQUEST_SAVE_USER_FAIL, error });
    }
  }

  const dispatches = {
    login,
    logout,
    saveUser,
  };

  return (
    <context.Provider value={{ state, dispatches }}>{children}</context.Provider>
  );
};

export const useContextState = () => useContext(context);