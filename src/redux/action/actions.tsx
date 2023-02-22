import * as types from './types';

//load
export const loadUsersStart = (pageInfo: any) => ({
  type: types.LOAD_USERS_START,
  payload: pageInfo,
});

export const loadUsersSuccess = (users: any) => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error: any) => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});

//create
export const createUserStart = (user: any) => ({
  type: types.CREATE_USER_START,
  payload: user,
});

export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});

export const createUserError = (error: any) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

//edit
export const editUserStart = (userInfo: any) => ({
  type: types.EDIT_USER_START,
  payload: userInfo,
});

export const editUserSuccess = () => ({
  type: types.EDIT_USER_SUCCESS,
});

export const editUserError = (error: any) => ({
  type: types.EDIT_USER_ERROR,
  payload: error,
});

//delete
export const deleteUserStart = (userId: any) => ({
  type: types.DELETE_USER_START,
  payload: userId,
});

export const deleteUserSuccess = (userId: any) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserError = (error: any) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});
