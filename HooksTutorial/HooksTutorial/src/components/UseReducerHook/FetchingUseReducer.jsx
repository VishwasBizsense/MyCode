import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";

export default function FetchingUseReducer() {
  const initialState = {
    loading: true,
    error: "",
    pokemon: {},
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return { loading: false, error: "", pokemon: action.payload };
      case "FETCH_ERROR":
        return { loading: false, error: "Something Went Wrong", pokemon: {} };

      default:
        return state;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((response) => {
          const { id, name, sprites } = response.data;
          const imageUrl = sprites.front_default;
          // setLoading(false);
          // setPokemon({ id, name, imageUrl });
          // setError("");
          dispatch({ type: "FETCH_SUCCESS", payload: { id, name, imageUrl } });
        })
        .catch((error) => {
          dispatch({ type: "FETCH_ERROR" });
        });
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state.loading ? (
        "Loading"
      ) : (
        <div>
          <h3>
            {`pokemon id:${state.pokemon.id}
              name:${state.pokemon.name} 
              `}
          </h3>
          <img src={state.pokemon.imageUrl}></img>
        </div>
      )}
      {state.error ? state.error : null}
    </div>
  );
}
