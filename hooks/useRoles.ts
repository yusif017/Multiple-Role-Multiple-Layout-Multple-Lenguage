import { RoleContext } from "@/context/RoleContext";
import { useContext } from "react";

export const useRole = () => {
    const context = useContext(RoleContext);
    if (!context) {
      throw new Error('useRole must be used within a RoleProvider');
    }
    return context;
  };