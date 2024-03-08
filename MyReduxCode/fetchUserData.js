import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // No need for .default, as it's not a default export
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
//--------------------------------Actions-------------------------------------
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

//----------------------------------Action creators---------------
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return { type: FETCH_USERS_FAILURE, payload: error };
};

//-------------------------------reducer function-----------------------------
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://randuser.me/api/?results=5")
      .then((response) => {
        const usersArray = response.data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
        }));
        dispatch(fetchUsersSuccess(usersArray));
      })
      .catch((error) => {
        console.log("This is an error", error.code);
        dispatch(fetchUsersFailure(error.code));
      });
  };
};
//--------------------------------------creating a store--------------------------------//
const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
