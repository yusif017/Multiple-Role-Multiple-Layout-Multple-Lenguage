import { RoleMap } from '@/types/role';
import { roles } from '@/utils/roles';
import { NextPageWithLayout } from 'next';

export const getRoles = (Component: NextPageWithLayout): string[] => {
  const componentName = Component.displayName || Component.name || '';
  return roles[componentName] || [];
};

export const getAllRoles = (): RoleMap => {
  return roles;
};