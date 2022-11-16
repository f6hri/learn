import TodoAPIDataSourceImpl from "../../Data/DataSource/API/TodoAPISource";
import { TodoRepositoryImpl } from "../../Data/Repository/TodoRepositoryImpl";
import { GetAll } from "../../Domain/UseCase/Todo/GetAll";

export const GetTodos = () => {
  return (dispatch: any) => {
    const UseCase = new GetAll(
      new TodoRepositoryImpl(new TodoAPIDataSourceImpl())
    );
    return UseCase.invoke().then((data) => {
      return dispatch({ type: "GET_ALL_TODOS", payload: data });
    });
  };
};
