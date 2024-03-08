const { createStore, applyMiddleware, combineReducers } = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");

// Action Types
const FETCH_POKEMON_STATS_REQUEST = "FETCH_POKEMON_STATS_REQUEST";
const FETCH_POKEMON_STATS_SUCCESS = "FETCH_POKEMON_STATS_SUCCESS";
const FETCH_POKEMON_STATS_FAILURE = "FETCH_POKEMON_STATS_FAILURE";

// Action Creators
const fetchPokemonStatsRequest = () => ({
  type: FETCH_POKEMON_STATS_REQUEST,
});

const fetchPokemonStatsSuccess = (pokemonStats) => ({
  type: FETCH_POKEMON_STATS_SUCCESS,
  payload: pokemonStats,
});

const fetchPokemonStatsFailure = (error) => ({
  type: FETCH_POKEMON_STATS_FAILURE,
  payload: error,
});

// Async Action Creator with Redux Thunk
const fetchPokemonStats = (pokemonName) => {
  return (dispatch) => {
    dispatch(fetchPokemonStatsRequest());
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        const pokemonStats = response.data;
        dispatch(fetchPokemonStatsSuccess(pokemonStats));
      })
      .catch((error) => {
        dispatch(fetchPokemonStatsFailure(error.message));
      });
  };
};

// Reducer
const initialState = {
  loading: false,
  pokemonStats: null,
  error: "",
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_STATS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMON_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        pokemonStats: action.payload,
        error: "",
      };
    case FETCH_POKEMON_STATS_FAILURE:
      return {
        ...state,
        loading: false,
        pokemonStats: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Root Reducer
const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

// Store
const store = createStore(rootReducer, applyMiddleware(thunk));

module.exports = {
  fetchPokemonStats,
  store,
};
