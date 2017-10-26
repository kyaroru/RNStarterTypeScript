import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { IAuthState, AuthStateReducer, AuthSaga } from './Auth';
import { IPersistState, PersistStateReducer } from './Persist';

export interface IRootState {
  AUTH: IAuthState,
  PERSIST: IPersistState,
}

export const RootReducers = combineReducers<IRootState>({
  AUTH: AuthStateReducer,
  PERSIST: PersistStateReducer,
});

export function* RootSaga() {
  yield all([
    fork(AuthSaga),
  ]);
}
