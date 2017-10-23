import { combineReducers } from 'redux';
import signIn, { ISignInState } from './signIn';

interface IStoreEnhancerState { }

export interface IAuthState extends IStoreEnhancerState {
  signIn: ISignInState,
}

export default combineReducers<IAuthState>({
  signIn,
});
