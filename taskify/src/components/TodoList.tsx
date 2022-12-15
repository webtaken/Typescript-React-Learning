import React from "react";
import "./styles.css";
import { Todo } from "../models";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((t) => {
        return <li className="todo">{t.todo}</li>;
      })}
    </div>
  );
};

export default TodoList;
