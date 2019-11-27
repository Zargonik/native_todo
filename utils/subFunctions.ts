import * as types from "../types/types";

export const getAllTasks = (rootTodo: any) => {
  const taskArr: types.ITodo[] = [];
  rootTodo &&
    rootTodo.map((box: types.ITasksBox) => {
      box &&
        box.tasks &&
        box.tasks.map((task: types.ITodo) => {
          taskArr.push(task);
        });
    });
  return taskArr;
};

export const getColorsAndTitles = (rootTodo: any) => {
  const resultObject: any = {};
  rootTodo.map((taskBox: types.ITasksBox) => {
    return (resultObject[taskBox.title] = taskBox.color);
  });
  return resultObject;
};

export const getRandomId = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
};

export function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
