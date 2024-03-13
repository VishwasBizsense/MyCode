import {
  DELETE_USER_FAILURE,
  DELETE_USER_LOADING,
  DELETE_USER_SUCCESS,
  GET_USERS_LIST_FAILURE,
  GET_USERS_LIST_LOADING,
  GET_USERS_LIST_SUCCESS,
} from "../actions/users";

import {
  GET_USERBYID_SUCCESS,
  GET_USERBYID_LOADING,
  GET_USERBYID_FAILURE,
} from "../actions/users";

import {
  POST_USER_FAILURE,
  POST_USER_LOADING,
  POST_USER_SUCCESS,
} from "../actions/users";

import {
  PUT_USER_FAILURE,
  PUT_USER_LOADING,
  PUT_USER_SUCCESS,
} from "../actions/users";

import {
  PATCH_USER_FAILURE,
  PATCH_USER_LOADING,
  PATCH_USER_SUCCESS,
} from "../actions/users";

const initialState = {
  loading: false,
  userLoading: false,
  deleteUserLoading: false,
  error: "",
  deleteUserError: null,
  list: [],
  userDetails: {},
  //post action types
  postUserError: null,
  postUserLoading: false,
  //put action types
  putUserError: null,
  putUserLoading: false,
  //patch action types
  patchserError: null,
  patchUserLoading: false,
};

export default function users(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_LIST_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_USERS_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        list: payload,
      };
    }

    case GET_USERS_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
        list: [],
        error: "some error",
      };
    }

    case GET_USERBYID_LOADING: {
      return {
        ...state,
        userLoading: true,
      };
    }

    case GET_USERBYID_SUCCESS: {
      return {
        ...state,
        userLoading: false,
        userDetails: payload,
      };
    }

    case GET_USERBYID_FAILURE: {
      return {
        ...state,
        userLoading: false,
        error: payload.message,
      };
    }

    case DELETE_USER_LOADING: {
      return {
        ...state,
        deleteUserLoading: true,
      };
    }

    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        deleteUserLoading: false,
        list: state.list.filter((item) => item.id !== payload),
      };
    }

    case DELETE_USER_FAILURE: {
      return {
        ...state,
        deleteUserLoading: false,
        deleteUserError: payload.message,
      };
    }
    case POST_USER_LOADING: {
      return {
        ...state,
        postUserLoading: true,
      };
    }

    case POST_USER_SUCCESS: {
      return {
        ...state,
        postUserLoading: false,
      };
    }

    case POST_USER_FAILURE: {
      return {
        ...state,
        postUserLoading: false,
        postUserError: payload.message,
      };
    }

    //---------------------Put data     -------------------------------------------
    case PUT_USER_LOADING: {
      return {
        ...state,
        putUserLoading: true,
      };
    }

    case PUT_USER_SUCCESS: {
      return {
        ...state,
        putUserLoading: false,
      };
    }

    case PUT_USER_FAILURE: {
      return {
        ...state,
        putUserLoading: false,
        putUserError: payload.message,
      };
    }
    //---------------------Patch data     -------------------------------------------
    case PATCH_USER_LOADING: {
      return {
        ...state,
        patchUserLoading: true,
      };
    }

    case PATCH_USER_SUCCESS: {
      return {
        ...state,
        patchUserLoading: false,
      };
    }

    case PATCH_USER_FAILURE: {
      return {
        ...state,
        patchUserLoading: false,
        patchUserError: payload.message,
      };
    }

    default:
      return state;
  }
}
