export interface User {
  name: string;
  phoneNumber: string;
  email: string;
  isEmailConfirmed: boolean;
  username: string;
  roleId: number;
  twoFactorEnabled: boolean;
}
