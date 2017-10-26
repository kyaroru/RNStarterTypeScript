import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, Action, Store, StoreEnhancerStoreCreator } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { RootReducers, RootSaga } from '../Redux';

let createAppStore: StoreEnhancerStoreCreator<any>;
let store: Store<object>;
const sagaMiddleware = createSagaMiddleware();

/* global __DEV__ */
if (__DEV__) {
  const excludedActions: string[] = [];
  const logger = createLogger({
    collapsed: true,
    predicate: (getState: () => void, action: Action) => excludedActions.indexOf(action.type) < 0,
  });
  createAppStore = applyMiddleware(sagaMiddleware, logger)(createStore);
} else {
  createAppStore = applyMiddleware(sagaMiddleware)(createStore);
}

// specify the reducer data that NEED to be persist into AsyncStorage
const whitelistReducer = ['PERSIST'];

export const getStore = () => store;

const configureStore = (onComplete: () => void) => {
  store = autoRehydrate()(createAppStore)(RootReducers);
  persistStore(store, { storage: AsyncStorage, whitelist: whitelistReducer }, onComplete);
  sagaMiddleware.run(RootSaga);
  return store;
};

export default configureStore;
