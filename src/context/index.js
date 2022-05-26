import { createContext, useContext, useReducer } from 'react';
import ACTIONS from './types';

const initialState = {
  userInformation: {
    user: null,
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

  const dispatches = {
    login,
    logout,
  };

  return (
    <context.Provider value={{ state, dispatches }}>{children}</context.Provider>
  );
};

export const useContextState = () => useContext(context);