export interface RoleContextProps {
  roleUser: string[] ;
  setUserRole: (role:string[] | []) => void;
  IsRolePage:(pagerole:string) =>void
}