import { useReducer } from "react";

// Custom hook for generating random numbers
export default function useRandomNumber() {
  const initialState = {
    number: null,
    loading: false,
    error: null,
  };

  // Reducer function to manage state
  function reducer(state, action) {
    switch (action.type) {
      case "FETCH_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "FETCH_SUCCESS":
        return {
          ...state,
          loading: false,
          number: action.payload,
        };
      case "FETCH_ERROR":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to fetch a random number
  const fetchRandomNumber = () => {
    dispatch({ type: "FETCH_REQUEST" });

    // showing loading and then generating delayed payload data
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      dispatch({ type: "FETCH_SUCCESS", payload: randomNumber });
    }, 1000);
  };

  return {
    number: state.number,
    loading: state.loading,
    error: state.error,
    fetchRandomNumber,
  };
}
