
export type SignInActions =
  { type: 'AUTH/SIGN_IN_FAIL', errors: string[] } |
  { type: 'AUTH/SIGN_IN', credentials: object } |
  { type: 'AUTH/SIGN_IN_SUCCESS', token: string };
