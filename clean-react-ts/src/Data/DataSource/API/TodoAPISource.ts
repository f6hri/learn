import { Todo } from "../../../Domain/Model/Todo";
import { TodoDataSource } from "../TodoAPIDataSourceImpl";
import { TodoAPIEntity } from "./Entities/TodoAPIEntity";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFecth<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}

export default class TodoAPIDataSourceImpl implements TodoDataSource {
  async getAll(): Promise<Todo[]> {
    let response = await myFecth<TodoAPIEntity[]>(`${BASE_URL}/todos`);
    let data = await response.json();
    return data.map((item) => ({
      id: item.id,
      title: item.title,
      isCompleted: item.completed,
    }));
  }
}
