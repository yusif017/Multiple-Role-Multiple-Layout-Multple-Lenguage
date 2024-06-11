import { getAllRoles } from '@/helpers/getRoles';
import { RoleContextProps } from '@/interface/role';
import React, { createContext, useState, ReactNode } from 'react';

export const RoleContext = createContext<RoleContextProps | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<string[]| ["user"]>(["user"]);

  const isRole=(pagerole:string)=>{
    const rol = getAllRoles()
    return userRole.some(role => rol[pagerole].includes(role))
      }
      
  const updateRole = (role:string[]|[]) => {
    setUserRole(role);
  };

  return (
    <RoleContext.Provider value={{ roleUser:userRole, setUserRole: updateRole, IsRolePage:isRole}}>
      {children}
    </RoleContext.Provider>
  );
};
