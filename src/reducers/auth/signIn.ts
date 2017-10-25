import { SignInActions } from '../../actions/auth/signIn';

export type SignInState = {
  readonly isLoading: boolean,
  readonly errors: string[],
};

function signIn(state: SignInState, action: SignInActions): SignInState {
  if (typeof state === 'undefined') {
    return getInitialState();
  }
  switch (action.type) {
    case 'AUTH/SIGN_IN':
      return {
        isLoading: true,
        errors: [],
      };
    case 'AUTH/SIGN_IN_SUCCESS':
      return {
        isLoading: false,
        errors: [],
      };
    case 'AUTH/SIGN_IN_FAIL':
      return {
        isLoading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
}

const getInitialState = (): SignInState => {
  return { isLoading: false, errors: [] };
};

export default signIn;
