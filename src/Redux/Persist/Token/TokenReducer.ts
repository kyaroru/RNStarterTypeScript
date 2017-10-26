import { TokenStateActions } from './TokenActions';
import { ITokenState } from './TokenTypes';

export const TokenStateReducer = (state: ITokenState, action: TokenStateActions): ITokenState => {
  if (typeof state === 'undefined') {
    return getInitialState();
  }
  switch (action.type) {
    case 'PERSIST/SET_TOKEN':
      return {
        token: action.token,
      };
    default:
      return state;
  }
};

const getInitialState = (): ITokenState => {
  return {
    token: null,
  };
};
