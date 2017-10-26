import { combineReducers } from 'redux';
import { TokenStateReducer } from './Token/TokenReducer';
import { ITokenState } from './Token/TokenTypes';

export interface IPersistState {
  TokenState: ITokenState,
}

export const PersistStateReducer = combineReducers<IPersistState>({
  TokenState: TokenStateReducer,
});
