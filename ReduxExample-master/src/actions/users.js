import axios from "axios";

const path = "https://reqres.in";
const postPath = "/api/users";

export const GET_USERS_LIST_LOADING = "@@users/GET_USERS_LIST_LOADING";
export const GET_USERS_LIST_SUCCESS = "@@users/GET_USERS_LIST_SUCCESS";
export const GET_USERS_LIST_FAILURE = "@@users/GET_USERS_LIST_FAILURE";

export const getUsersList = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_USERS_LIST_LOADING,
    });

    try {
      const response = await axios.get(`${path}/api/users`);
      console.log(response.data.data);
      dispatch({
        type: GET_USERS_LIST_SUCCESS,
        payload: response?.data?.data,
      });
    } catch (error) {
      dispatch({
        type: GET_USERS_LIST_FAILURE,
        payload: error,
      });
    }
  };
};

export const GET_USERBYID_LOADING = "@@users/GET_USERBYID_LOADING";
export const GET_USERBYID_SUCCESS = "@@users/GET_USERBYID_SUCCESS";
export const GET_USERBYID_FAILURE = "@@users/GET_USERBYID_FAILURE";

export const getUserById = (id) => {
  return async function (dispatch) {
    dispatch({
      type: GET_USERBYID_LOADING,
    });

    try {
      const response = await axios.get(`${path}/api/users/${id}`);

      dispatch({
        type: GET_USERBYID_SUCCESS,
        payload: response?.data?.data,
      });
    } catch (error) {
      dispatch({
        type: GET_USERBYID_FAILURE,
        payload: error,
      });
    }
  };
};

export const DELETE_USER_LOADING = "@@users/DELETE_USER_LOADING";
export const DELETE_USER_SUCCESS = "@@users/DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "@@users/DELETE_USER_FAILURE";

export const deleteUserById = (userId) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_USER_LOADING,
    });

    try {
      const response = await axios.delete(`${path}/api/users/${userId}`);
      console.log(response);

      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: userId,
      });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: error,
      });
    }
  };
};

//Posting data

export const POST_USER_LOADING = "@@users/POST_USER_LOADING";
export const POST_USER_SUCCESS = "@@users/POST_USER_SUCCESS";
export const POST_USER_FAILURE = "@@users/POST_USER_FAILURE";

export const postNewUser = (formData) => {
  console.log("inside action", formData);
  return async function (dispatch) {
    dispatch({
      type: POST_USER_LOADING,
    });
    try {
      const response = await axios.post(`${path}${postPath}`, formData);
      console.log(`Response of POST request`, response);
      dispatch({
        type: POST_USER_SUCCESS,
        payload: formData,
      });
    } catch (error) {
      dispatch({
        type: POST_USER_FAILURE,
        payload: error,
      });
    }
  };
};
//---------------------------Put request through api----------------------------------------
export const PUT_USER_LOADING = "@@users/PUT_USER_LOADING";
export const PUT_USER_SUCCESS = "@@users/PUT_USER_SUCCESS";
export const PUT_USER_FAILURE = "@@users/PUT_USER_FAILURE";

export const putUserInfo = (userId, putData) => {
  console.log("inside action", putData);
  return async function (dispatch) {
    dispatch({
      type: PUT_USER_LOADING,
    });
    try {
      const response = await axios.put(`${path}${postPath}/${userId}`, putData);
      console.log("PUT response is :", response);
      dispatch({
        type: PUT_USER_SUCCESS,
        payload: putData,
      });
    } catch (error) {
      dispatch({
        type: PUT_USER_FAILURE,
        payload: error,
      });
    }
  };
};

//----------------------------------------------Patch request through api------------------------------

export const PATCH_USER_SUCCESS = "@@users/PATCH_USER_SUCCESS";
export const PATCH_USER_LOADING = "@@users/PATCH_USER_LOADING";
export const PATCH_USER_FAILURE = "@@users/PATCH_USER_FAILURE";

export const patchUserInfo = (userId, patchData) => {
  console.log("inside action of patch", patchData);
  return async function (dispatch) {
    dispatch({
      type: PATCH_USER_LOADING,
    });
    try {
      const response = await axios.patch(
        `${path}${postPath}/${userId}`,
        patchData
      );
      console.log("PATCH response is :", response);
      dispatch({
        type: PATCH_USER_SUCCESS,
        payload: patchData,
      });
    } catch (error) {
      dispatch({
        type: PATCH_USER_FAILURE,
        payload: error,
      });
    }
  };
};
