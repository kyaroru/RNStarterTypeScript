import Actions from '../../actions';
import { TokenActions } from '../../actions/persist/token';

export type TokenState = string | null;

const getInitialState = (): TokenState => {
  return null;
};

function token(state: TokenState, action: TokenActions): TokenState {
  if (typeof state === 'undefined') {
    return getInitialState();
  }
  switch (action.type) {
    case Actions.SET_TOKEN:
      return action.token;
    default:
      return state;
  }
}

export default token;
