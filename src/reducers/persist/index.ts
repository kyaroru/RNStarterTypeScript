import { combineReducers } from 'redux';
import token, { TokenState } from './token';

export type PersistState = {
  token: TokenState,
};

export default combineReducers<PersistState>({
  token,
});
