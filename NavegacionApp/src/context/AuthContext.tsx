import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// Definir que información tiene el context

export interface AuthState {
  isLoggedIn: boolean;
  username?: string; //optional
  favouriteIcon?: string; //optional
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
};

// Interface para definir lo que va en el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  signOut: () => void;
  setFavIcon: (name: string) => void;
  setUsername: (name: string) => void;
}

//Crear contexto

export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor de estado

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const signOut = () => {
    dispatch({type: 'signOut'});
  };

  const setFavIcon = (name: string) => {
    dispatch({type: 'setFavIcon', payload: name});
  };

  const setUsername = (name: string) => {
    dispatch({type: 'setUsername', payload: name});
  };

  return (
    <AuthContext.Provider
      value={{
        authState: authState,
        signIn: signIn,
        signOut: signOut,
        setFavIcon: setFavIcon,
        setUsername: setUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
