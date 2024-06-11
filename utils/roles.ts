import { Pages } from "@/enum/page";
import { RoleMap } from "@/types/role";

export const roles: RoleMap = {
    [Pages.AdminPage]: ['admin'],
    [Pages.ManagerPage]: ['admin', 'manager'],
    [Pages.HomePage]: ['admin',"user"],
    [Pages.LoginPage]: ['admin', 'user'],
    [Pages.ErrorPage]: ['admin', 'user'],
  };
  