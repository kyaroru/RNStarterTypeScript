import { LoginStateActions } from './LoginActions';
import { ILoginState } from './LoginTypes';

export const LoginStateReducer = (state: ILoginState, action: LoginStateActions): ILoginState => {
  if (typeof state === 'undefined') {
    return getInitialState();
  }
  switch (action.type) {
    case 'AUTH/LOGIN':
      return {
        isLoading: true,
        errors: [],
      };
    case 'AUTH/LOGIN_SUCCESS':
      return {
        isLoading: false,
        errors: [],
      };
    case 'AUTH/LOGIN_FAIL':
      return {
        isLoading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};

const getInitialState = (): ILoginState => {
  return { isLoading: false, errors: [] };
};
