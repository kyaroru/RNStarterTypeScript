const AUTH = 'AUTH';

export const SIGN_IN = `${AUTH}/SIGN_IN`;
export const SIGN_IN_SUCCESS = `${AUTH}/SIGN_IN_SUCCESS`;
export const SIGN_IN_FAIL = `${AUTH}/SIGN_IN_FAIL`;

type SignInAction = { type: 'AUTH/SIGN_IN', credentials: object };
type SignInSuccessAction =  { type: 'AUTH/SIGN_IN_SUCCESS', token: string };
type SignInFailAction = { type: 'AUTH/SIGN_IN_FAIL', errors: string[] };

export type SignInActions = SignInFailAction | SignInAction | SignInSuccessAction;

export const signIn = (credentials: object) => ({
  type: SIGN_IN,
  credentials,
});

export const signInSuccess = (token: string) => ({
  type: SIGN_IN_SUCCESS,
  token,
});

export const signInFail = (errors: string[]) => ({
  type: SIGN_IN_FAIL,
  errors,
});
