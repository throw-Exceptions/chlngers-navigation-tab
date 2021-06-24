import React from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';

type UserContextProps = {
  children: React.ReactNode
}

const UserProvider = ({children}: UserContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export default UserProvider;

const UserStateContext = createContext<UserStateType | null>(null);
const UserDispatchContext = createContext<UserDispatchType | null>(null);

const initialState = {
  isLogin: false,
};
export type UserStateType = typeof initialState;

export const login = () => ({
  type: 'LOGIN'
});

export const logout = () => ({
  type: 'LOGOUT'
});

export type UserActionType = ReturnType<typeof login | typeof logout>;
export type UserDispatchType = React.Dispatch<UserActionType>;

const reducer = (state: UserStateType, action: UserActionType): UserStateType => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: true
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false
      };
    default:
      return state;
  }
};

export const useUserState = (): UserStateType => {
  const state: UserStateType | null = useContext(UserStateContext);
  if (state === null) throw new Error("Error: no UserStateContext");
  return state;
};

export const useUserDispatch = (): UserDispatchType => {
  const dispatch: UserDispatchType | null = useContext(UserDispatchContext);
  if (dispatch === null) throw new Error("Error: no UserDispatchContext");
  return dispatch;
};