import Actions from '../../actions';
export type ITokenState = string;

function token(state: string | null = null, action: Action) {
  switch (action.type) {
    case Actions.SET_TOKEN:
      return action.token;
    default:
      return state;
  }
}

export default token;
