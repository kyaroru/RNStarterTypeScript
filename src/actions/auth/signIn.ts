const AUTH = 'AUTH';

export const SIGN_IN = `${AUTH}/SIGN_IN`;
export const SIGN_IN_SUCCESS = `${AUTH}/SIGN_IN_SUCCESS`;
export const SIGN_IN_FAIL = `${AUTH}/SIGN_IN_FAIL`;

export type SignInActions = {
  SIGN_IN: {
    type: typeof SIGN_IN,
  },
  SIGN_IN_SUCCESS: {
    type: typeof SIGN_IN_SUCCESS,
  },
  SIGN_IN_FAIL: {
    type: typeof SIGN_IN_FAIL,
  },
};

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
