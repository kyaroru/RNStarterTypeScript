import { combineReducers } from 'redux';
import { LoginStateReducer } from './Login/LoginReducer';
import { ILoginState } from './Login/LoginState';

export interface IAuthState {
  LoginState: ILoginState,
}

export const AuthStateReducer = combineReducers<IAuthState>({
  LoginState: LoginStateReducer,
});
