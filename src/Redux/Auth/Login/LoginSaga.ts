import { takeLatest, all, fork, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { LoginAction, LoginSuccessAction } from './LoginActions';
import { TokenStateActions } from '../../Persist/Token/TokenActions';

import * as api from './LoginApi';

function* login(action: LoginAction): SagaIterator {
  try {
    const response = yield call(api.login, action.credentials);
    const loginSuccessAction: LoginSuccessAction = { type: 'AUTH/LOGIN_SUCCESS', token: response.token };
    const setTokenAction: TokenStateActions = { type: 'PERSIST/SET_TOKEN', token: response.token };
    yield put(loginSuccessAction);
    yield put(setTokenAction);
  } catch (response) {
    log()(response);
  }
}

function log() {
    return console.log;
}

function* watchLogin(): SagaIterator {
  yield takeLatest('AUTH/LOGIN', login);
}

export function* LoginSaga(): SagaIterator {
  yield all([
    fork(watchLogin),
  ]);
}
