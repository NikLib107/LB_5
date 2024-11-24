import { BaseContent } from './BaseContent';

export type Role = 'admin' | 'editor' | 'viewer';

export type Permission = {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
};

export type AccessControl<T extends BaseContent> = {
  role: Role;
  permissions: Permission;
  canAccess: (role: Role, action: keyof Permission) => boolean;
};
