import { Todo } from "../../Domain/Model/Todo";

export interface TodoDataSource {
  getAll(): Promise<Todo[]>;
}
