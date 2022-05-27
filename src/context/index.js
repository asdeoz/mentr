import { createContext, useContext, useReducer } from 'react';
import ACTIONS from './types';

const initialState = {
  userInformation: {
    user: null,
    error: null,
  },
};

const USER_ID_KEY = 'USER_ID';

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
    sessionStorage.setItem(USER_ID_KEY, user.id);
    dispatch({ type: ACTIONS.LOGIN, user });
  };

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
  };

  const getLoggedUser = async () => {
    try {
      if (state?.userInformation?.user) return state?.userInformation?.user;
      if (sessionStorage.getItem(USER_ID_KEY)) {
        const userId = sessionStorage.getItem(USER_ID_KEY);
        const options = {
          method: 'GET',
        };
        const response = await fetch(`/api/user?userId=${userId}`, options);
        const user = await response.json();
        if (user) dispatch({ type: ACTIONS.LOGIN, user });
        return user;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

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
    getLoggedUser,
    saveUser,
  };

  return (
    <context.Provider value={{ state, dispatches }}>{children}</context.Provider>
  );
};

export const useContextState = () => useContext(context);