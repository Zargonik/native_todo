import * as types from "../types/types";

export const getAllTasks = (rootTodo: any) => {
  const taskArr: types.ITodo[] = [];
  rootTodo.map((list: types.ITodoList) => {
    list.tasks.map((task: types.ITodo) => {
      taskArr.push(task);
    });
  });
  return taskArr;
};
