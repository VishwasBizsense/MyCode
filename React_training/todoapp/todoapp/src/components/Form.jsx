import { useState } from "react";
import styles from "./form.module.css";
// import PropTypes from 'prop-types';
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          value={todo}
          placeholder="Enter todo item ..."
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
// Form.propTypes = {
//   todos: PropTypes.array.isRequired,
//   setTodos: PropTypes.func.isRequired
// };
