import { combineReducers } from 'redux';
import { LoginStateReducer } from './Login/LoginReducer';
import { LoginSaga } from './Login/LoginSaga';
import { ILoginState } from './Login/LoginTypes';
import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

export interface IAuthState {
  LoginState: ILoginState,
}

export const AuthStateReducer = combineReducers<IAuthState>({
  LoginState: LoginStateReducer,
});

export function* AuthSaga(): SagaIterator {
  yield all([
    fork(LoginSaga),
  ]);
}
