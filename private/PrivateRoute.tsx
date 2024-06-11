import { ReactNode, useEffect, FC, useState } from 'react';
import { useRouter } from 'next/router';
import { useRole } from '@/hooks/useRoles';

type PrivateRouteProps = {
  children: ReactNode;
  roles: string[];
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children, roles }) => {
// const myrole=["admin"]
//   if (roles.some(role => myrole.includes(role))) {
    
//   }
  const router = useRouter();

  const { roleUser } = useRole();
  console.log(roleUser);
  
  useEffect(() => {
    if (roles.some(role => roleUser.includes(role))) {
      
    
    } else {
      router.push('/error'); 
    }
  }, [router, roles]);




  return <>{children}</>;
};

export default PrivateRoute;
