import Actions from '../../actions';

export type ISignInState = {
  readonly isLoading: boolean,
  readonly errors: string[],
};

function signIn(state: ISignInState = { isLoading: false, errors: [] }, action: Action) {
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
