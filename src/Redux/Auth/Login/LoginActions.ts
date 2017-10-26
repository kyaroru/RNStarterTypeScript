import { ILoginCredentials } from './LoginTypes';

// export type LoginStateActions =
// { type: 'AUTH/LOGIN', credentials: ILoginCredentials } |
// { type: 'AUTH/LOGIN_FAIL', errors: string[] } |
// { type: 'AUTH/LOGIN_SUCCESS', token: string };

export type LoginAction = { type: 'AUTH/LOGIN', credentials: ILoginCredentials };
export type LoginFailAction = { type: 'AUTH/LOGIN_FAIL', errors: string[] };
export type LoginSuccessAction = { type: 'AUTH/LOGIN_SUCCESS', token: string };

export type LoginStateActions =
LoginAction |
LoginFailAction |
LoginSuccessAction;
