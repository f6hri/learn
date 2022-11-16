import { Todo } from "../../Model/Todo";
import { TodoRepository } from "../../Repository/TodoRepository";

export interface GetAllUseCase {
  invoke: () => Promise<Todo[]>;
}

export class GetAll implements GetAllUseCase {
  private todoRepo: TodoRepository;

  constructor(_todoRepo: TodoRepository) {
    this.todoRepo = _todoRepo;
  }

  async invoke() {
    return this.todoRepo.getAll();
  }
}
