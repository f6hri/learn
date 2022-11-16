import { Todo } from "../../Domain/Model/Todo";
import { TodoRepository } from "../../Domain/Repository/TodoRepository";
import { TodoDataSource } from "../DataSource/TodoAPIDataSourceImpl";

export class TodoRepositoryImpl implements TodoRepository {
  private dataSource: TodoDataSource;

  constructor(_dataSource: TodoDataSource) {
    this.dataSource = _dataSource;
  }

  async getAll(): Promise<Todo[]> {
    return this.dataSource.getAll();
  }
}
