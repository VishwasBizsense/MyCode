import styles from "./fooditem.module.css";

export default function FoodItem({ foodItem }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImaage} src={foodItem.image} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{foodItem.title}</p>
      </div>
      <button
        className={styles.recipeButton}
        conClick={() => console.log(foodItem.id)}
      >
        Recipe
      </button>
    </div>
  );
}
