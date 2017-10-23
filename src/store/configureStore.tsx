import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import sagas from 'sagas';

let createAppStore: StoreEnhancerStoreCreator<>;
let store: Store<IRootState>;
const sagaMiddleware = createSagaMiddleware();

export interface IExcludeAction {
  type: string;
}

/* global __DEV__ */
if (__DEV__) {
  const excludedActions: string[] = [];
  const logger = createLogger({
    collapsed: true,
    predicate: (getState: () => void, action: IExcludeAction) => excludedActions.indexOf(action.type) < 0,
  });
  createAppStore = applyMiddleware(sagaMiddleware, logger)(createStore);
} else {
  createAppStore = applyMiddleware(sagaMiddleware)(createStore);
}

// specify the reducer data that NEED to be persist into AsyncStorage
const whitelistReducer = ['PERSIST'];

export const getStore = () => store;

const configureStore = (onComplete: () => void) => {
  store = autoRehydrate()(createAppStore)(reducers);
  persistStore(store, { storage: AsyncStorage, whitelist: whitelistReducer }, onComplete);
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;
