import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

// Action creator for requesting to fetch users
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

// Action creator for successful fetching of users
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

// Action creator for failure in fetching users
export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

//fetchUsers named action creator using thunk that returns and action instead of an object.
export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest()); //for loading:true
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = response.data;
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
