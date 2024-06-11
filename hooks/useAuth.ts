import { AuthContext } from "@/context/AuthContext";
import { AuthContextProps } from "@/interface/auth";
import { useContext } from "react";

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
  