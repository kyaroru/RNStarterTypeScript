import Actions from '../../actions';
import { SignInActions } from '../../actions/auth/signIn';

export type SignInState = {
  readonly isLoading: boolean,
  readonly errors: string[],
};

const getInitialState = (): SignInState => {
  return { isLoading: false, errors: [] };
};

function signIn(state: SignInState, action: SignInActions): SignInState {
  if (typeof state === 'undefined') {
    return getInitialState();
  }
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        isLoading: true,
        errors: [],
      };
    case Actions.SIGN_IN_SUCCESS:
      return {
        isLoading: false,
        errors: [],
      };
    case Actions.SIGN_IN_FAIL:
      return {
        isLoading: false,
        errors: action.errors,
      };
    default:
      return state;
  }
}

export default signIn;
