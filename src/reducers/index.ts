import { combineReducers } from 'redux';
import auth, { AuthState } from './auth';
import persist, { PersistState } from './persist';

export type RootState = {
  AUTH: AuthState,
  PERSIST: PersistState,
};

export default combineReducers<RootState>({
  AUTH: auth,
  PERSIST: persist,
});
