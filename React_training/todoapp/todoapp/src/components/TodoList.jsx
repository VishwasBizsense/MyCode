import TodoItem from "./TodoItem";
// import PropTypes from 'prop-types';
export default function TodoList({ todos }) {
  return (
    <div>
      {todos.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}
// TodoList.propTypes = {
//   todos: PropTypes.array.isRequired
// };