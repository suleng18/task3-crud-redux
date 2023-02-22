import { createUserApi, deleteUserApi, editUserApi, loadUserApi } from 'apis/api';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  createUserError,
  createUserSuccess,
  deleteUserError,
  deleteUserSuccess,
  editUserError,
  editUserSuccess,
  loadUsersError,
  loadUsersSuccess,
} from '../action/actions';

import * as types from '../action/types';

function* onLoadUsersStartAsync({ payload: { page, perPage } }: any): any {
  try {
    const response = yield call(loadUserApi, page, perPage);
    if (response.status === 200) {
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error: any) {
    yield put(loadUsersError(error.message));
  }
}

function* onCreateUserStartAsync(data: any): any {
  try {
    const response = yield call(createUserApi, data.payload);
    if (response.status === 201) {
      yield put(createUserSuccess());
    }
  } catch (error: any) {
    yield put(createUserError(error.message));
  }
}

function* onEditUserStartAsync(data: any): any {
  try {
    const response = yield call(editUserApi, data.payload.id.id, data.payload.user);
    if (response.status === 200) {
      yield put(editUserSuccess());
    }
  } catch (error: any) {
    yield put(editUserError(error.message));
  }
}

function* onDeleteUserStartAsync(data: any): any {
  try {
    const response = yield call(deleteUserApi, data.payload);
    if (response.status === 204) {
      yield put(deleteUserSuccess(data.payload));
    }
  } catch (error: any) {
    yield put(deleteUserError(error.message));
  }
}

function* onLoadUsers() {
  yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onCreateUser() {
  yield takeEvery(types.CREATE_USER_START, onCreateUserStartAsync);
}

function* onEditUser() {
  yield takeEvery(types.EDIT_USER_START, onEditUserStartAsync);
}

function* onDeleteUser() {
  yield takeEvery(types.DELETE_USER_START, onDeleteUserStartAsync);
}

//root saga
const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser), fork(onEditUser)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
