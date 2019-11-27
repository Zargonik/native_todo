import { combineReducers } from "redux";
import combineEvents from "../../../utils/redux/combineEvents";

import * as constants from "./constants";
import * as types from "../../../types/types";

const todosReducer = combineEvents(
  {
    [constants.ADD_TODO]: (state: any, action: { payload: types.ITodo }) => {
      return state.map((taskBox: types.ITasksBox) => {
        if (taskBox.title === action.payload.boxType) {
          return { ...taskBox, tasks: [...taskBox.tasks, action.payload] };
        } else {
          return state;
        }
      });
    },
    [constants.ADD_TASKS_BOX]: (
      state: types.IRootTodo,
      action: { payload: types.ITasksBox }
    ) => {
      console.log(action.payload, "reducer");
      state.rootTodo.map(taskBox => {
        if (taskBox === action.payload) {
          return;
        } else {
          return [...state.rootTodo, action.payload];
        }
      });
    }
  },
  [
    {
      title: "Inbox",
      color: "#EBEFF5",
      id: 1,
      tasks: [
        {
          text: "testing app",
          status: false,
          boxType: "Inbox",
          id: "asfagfndklgn"
        }
      ]
    }
  ]
);

const spinnerReducer = combineEvents(
  {
    [constants.SPINNER_ON]: (state: boolean, action: Function) => {
      return true;
    },
    [constants.SPINNER_OFF]: (state: boolean, action: Function) => {
      return false;
    }
  },
  false
);

export default combineReducers({
  rootTodo: todosReducer,
  spinnerStatus: spinnerReducer
});
