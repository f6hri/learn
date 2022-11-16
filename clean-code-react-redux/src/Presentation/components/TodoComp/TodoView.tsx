import { useSelector } from "react-redux";
import { Todo } from "../../../Domain/Model/Todo";
import TodoItem from "./TodoItem";

export default function TodoView() {
  const todos = useSelector((state: any) => state.Todo.todo);
  return (
    <>
      <ul id="todos">
        {todos ? (
          todos.map((item: Todo, i: number) => (
            <TodoItem
              key={i}
              id={item.id}
              title={item.title}
              isCompleted={item.isCompleted}
            />
          ))
        ) : (
          <h1>Loading ...</h1>
        )}
      </ul>
    </>
  );
}
