// utils/AuthContext.js

import { USER_KEY } from "@/common/constants";
import { JwtPayload } from "@/common/interfaces/token";
import { User } from "@/common/interfaces/user";
import Cookies from "js-cookie";
import React, { createContext, useReducer, useContext, useEffect } from "react";

type stateType = {
  user: User | null;
};

// Define the initial state
const initialState: stateType = {
  user: null,
};

export type AuthDispatch = {
  type: typeof LOGIN | typeof LOGOUT;
  payload?: stateType | any;
};

// Create a context
const AuthContext = createContext({
  state: initialState,
  dispatch: (data: AuthDispatch) => {},
});

// Define actions
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// Reducer function
const authReducer = (state: typeof initialState, action: AuthDispatch) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action?.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

// Context provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const currentUser = Cookies.get(USER_KEY);
    if (currentUser) {
      const user = JSON.parse(currentUser);
      dispatch({ type: LOGIN, payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the context
export const useAuth = () => {
  return useContext(AuthContext);
};
