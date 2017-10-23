import { combineReducers } from 'redux';
import token, { ITokenState } from './token';

interface IStoreEnhancerState { }

export interface IPersistState extends IStoreEnhancerState {
  token: ITokenState,
}

export default combineReducers<IPersistState>({
  token,
});
