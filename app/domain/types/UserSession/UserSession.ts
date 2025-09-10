export interface UserSession {
  accessToken: string;
  accessTokenExpires: Date;
  twoFactorRequired?: boolean;
}
