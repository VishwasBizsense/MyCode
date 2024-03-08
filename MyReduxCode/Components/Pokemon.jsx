import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchPokemonStats, store } from "./ManagePokemonStates.js";

function PokemonInfo() {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    const fetchPokemonData = () => {
      store
        .dispatch(fetchPokemonStats("pikachu"))
        .then(() => {
          // -------------------------Subscribe to the Redux store to get updated Pokémon info------------------------
          const unsubscribe = store.subscribe(() => {
            const state = store.getState();
            setPokemonInfo(state.pokemon.pokemonStats);
          });

          // -----------------Unsubscribe from the store when component unmounts------------------------------
          return () => {
            unsubscribe();
          };
        })
        .catch((error) => {
          console.error("Error fetching Pokémon stats:", error);
        });
    };

    fetchPokemonData();
  }, []);

  return (
    <div>
      <h2>Pokémon Info</h2>
      {pokemonInfo ? (
        <div>
          <h3>Name: {pokemonInfo.name}</h3>
          <h3>Attacks:</h3>
          <ul>
            {pokemonInfo.moves.slice(0, 5).map((move, index) => (
              <li key={index}>{move.move.name}</li>
            ))}
          </ul>
          <h3>Stats:</h3>
          <ul>
            {pokemonInfo.stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading Pokémon info...</p>
      )}
    </div>
  );
}

export default PokemonInfo;
