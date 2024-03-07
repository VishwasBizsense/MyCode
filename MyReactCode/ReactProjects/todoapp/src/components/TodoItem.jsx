import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(name, e) {
    setTodos(todos.toSpliced(todos.findIndex((it) => it === name)));
    // setTodos(todos.filter((todo) => todo !== item));
    e.stopPropagation();
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const taskDone = item.done ? <span className={styles.completed}>✓</span> : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName} onClick={() => handleClick(item.name)}>
        <span>{item.name} </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={(e) => handleDelete(item.name, e)}
          >
            X
          </button>
          {taskDone}
        </span>
      </div>
      {/* <hr className={styles.line}></hr> */}
    </div>
  );
}
