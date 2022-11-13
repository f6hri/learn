import { useEffect } from "react";
import useViewModel from "./TodoListViewModel";

export default function TodoListView() {
  const { getTodos, todos } = useViewModel();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            <input type="checkbox" checked={todo.isCompleted} />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
