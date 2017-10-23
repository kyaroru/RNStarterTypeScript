import { combineReducers } from 'redux';
import auth, { IAuthState } from './auth';
import persist, { IPersistState } from './persist';

interface IStoreEnhancerState { }

export interface IRootState extends IStoreEnhancerState {
  AUTH: IAuthState,
  PERSIST: IPersistState,
}

export default combineReducers<IRootState>({
  AUTH: auth,
  PERSIST: persist,
});
