import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchingUseState() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((response) => {
          const { id, name, sprites } = response.data;
          const imageUrl = sprites.front_default;
          setLoading(false);
          setPokemon({ id, name, imageUrl });
          setError("");
        })
        .catch((error) => {
          setLoading(false);
          setPokemon("");
          setError("Something went wrong");
        });
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
  }, []);
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <h3>
            {`pokemon id:${pokemon.id}
              name:${pokemon.name} 
              `}
          </h3>
          <img src={pokemon.imageUrl}></img>
        </div>
      )}
      {error ? error : null}
    </div>
  );
}
