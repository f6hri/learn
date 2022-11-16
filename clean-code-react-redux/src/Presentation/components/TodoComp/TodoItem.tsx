import { Todo } from "../../../Domain/Model/Todo";

export default function TodoItem({ id, title, isCompleted }: Todo) {
  return (
    <li>
      <input type="checkbox" checked={isCompleted} />
      {title}
    </li>
  );
}
