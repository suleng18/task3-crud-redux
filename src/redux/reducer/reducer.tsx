import * as types from '../action/types';

const initialState = {
  loading: false,
  error: null,
  users: [],
};

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOAD_USERS_START:
    case types.CREATE_USER_START:
    case types.EDIT_USER_START:
    case types.DELETE_USER_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case types.CREATE_USER_SUCCESS:
      // const createState = _.cloneDeep(state);
      return {
        ...state,
        // users: createState.users.concat(action.payload),
        loading: false,
      };

    case types.EDIT_USER_SUCCESS:
      // const editState = _.cloneDeep(state);
      return {
        ...state,
        loading: false,
      };

    case types.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: state.users.filter((item: any) => item.id !== action.payload),
      };

    case types.LOAD_USERS_ERROR:
    case types.CREATE_USER_ERROR:
    case types.EDIT_USER_ERROR:
    case types.DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default usersReducer;
