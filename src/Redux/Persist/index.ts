import { combineReducers } from 'redux';
import { TokenStateReducer } from './Token/TokenReducer';
import { ITokenState } from './Token/TokenState';

export interface IPersistState {
  TokenState: ITokenState,
}

export const PersistStateReducer = combineReducers<IPersistState>({
  TokenState: TokenStateReducer,
});
