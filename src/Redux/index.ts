import { combineReducers } from 'redux';
import { IAuthState, AuthStateReducer } from './Auth';
import { IPersistState, PersistStateReducer } from './Persist';

export interface IRootState {
  AUTH: IAuthState,
  PERSIST: IPersistState,
}

export const RootReducers = combineReducers<IRootState>({
  AUTH: AuthStateReducer,
  PERSIST: PersistStateReducer,
});
