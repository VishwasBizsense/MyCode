import { useEffect, useState } from "react";
import styles from "./search.module.css";

const API_KEY = "0b4a670b4c5a47be962b9f9af95b121d";
const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      try {
        const response = await fetch(`${URL}?apiKey=${API_KEY}&query=${query}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data.results);
        setFoodData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // throw error; //Re-throwing the error to be caught by the caller if needed
      } finally {
        console.log("Fetching process completed"); // This block always executes, regardless of whether an error occurred or not
      }
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <span className={styles.searchText}>Search :</span>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
