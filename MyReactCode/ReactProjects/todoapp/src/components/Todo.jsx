import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const doneCount=todos.filter((todo)=>todo.done);
  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
      <Footer doneCount={doneCount.length} totalCount={todos.length}/>
    </div>
  );
}
