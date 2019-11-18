export interface ITodo {
  id: number | string;
  text: string;
  status: boolean;
}

export interface ITodos {
  todos: ITodo[];
}

export interface ITodoList {
  title: string;
  color: string;
  tasks: ITodo[];
}

// export interface IRootTodo {
//   lists:
// }
