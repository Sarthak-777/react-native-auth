import React from 'react';
import AuthContext from './authContext';
import useStatesAndActions from './useStatesAndAction';

interface ContextProps {
  children: React.ReactNode;
}
const AuthProvider = ({children}: ContextProps) => (
  //@ts-ignore
  <AuthContext.Provider value={useStatesAndActions()}>
    {children}
  </AuthContext.Provider>
);
export default AuthProvider;
