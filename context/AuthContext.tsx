import { useRole } from '@/hooks/useRoles';
import { AuthContextProps } from '@/interface/auth';
import React, { createContext, useState, ReactNode } from 'react';


export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { setUserRole } = useRole();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    setIsAuthenticated(true);
    setUserRole(["admin"])
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};