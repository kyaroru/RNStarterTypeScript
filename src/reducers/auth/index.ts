import { combineReducers } from 'redux';
import signIn, { SignInState } from './signIn';

export type AuthState = {
  signIn: SignInState,
};

export default combineReducers<AuthState>({
  signIn,
});
