import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchData() {
  const [pokemon, setPokemon] = useState({});
  const [id, setId] = useState(1);
  const [onButtonClick, setOnButtonCLick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setPokemon(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  }, [onButtonClick]);

  // const handleScroll = (e) => {
  //   console.log("Window scrolled");
  //   console.log(e);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   // console.log(`working`);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://pokeapi.co/api/v2/pokemon/${id}?limit=50`
  //       );
  //       const pokemonData = response.data.results.map((pokemon) => ({
  //         name: pokemon.name,
  //       }));
  //       setPokemons(pokemonData);
  //       console.log(`Pokemons Fetched`);
  //     } catch (error) {
  //       console.error("Error fetching Pokémon data:", error);
  //     } finally {
  //       console.log(`Fetching completed`);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setOnButtonCLick(id)}>Get Pokemon name</button>
      {pokemon.name}
      {/* <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
