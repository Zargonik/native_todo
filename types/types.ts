// export interface ITodo {
//   id: number | string;
//   text: string;
//   status: boolean;
//   color?: string;
// }

// export interface ITodos {
//   todos: ITodo[];
// }

export interface ITasksBox {
  title: string;
  color: string;
  tasks: ITodo[];
  id: string | number;
}

export interface ITodo {
  text: string;
  status: boolean;
  alarm?: object;
  date?: object;
  boxType: string;
  color?: "string";
  id?: string | number;
  // task?: string;
}

export interface ISendTasksBox {
  text: string;
  color: string;
  id: string | number;
}

export interface IServersResponse {
  message: string;
}

export interface IRootTodo {
  rootTodo: [
    {
      title: "Inbox";
      color: "#EBEFF5";
      id: 1;
      tasks: ITodo[];
    }
  ];
}
