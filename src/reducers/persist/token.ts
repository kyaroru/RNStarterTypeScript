import { TokenActions } from '../../actions/persist/token';

export type TokenState = string | null;

function token(state: TokenState, action: TokenActions): TokenState {
  if (typeof state === 'undefined') {
    return getInitialState();
  }
  switch (action.type) {
    case 'PERSIST/SET_TOKEN':
      return action.token;
    default:
      return state;
  }
}

const getInitialState = (): TokenState => {
  return null;
};

export default token;
