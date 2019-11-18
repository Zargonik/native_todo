import { combineReducers } from "redux";
import combineEvents from "../../../utils/redux/combineEvents";

import * as constant from "./constants";
import * as types from "../../../types/types";

const todosReducer = combineEvents(
  {
    [constant.GET_TODOS_SUCCESS]: (
      state: types.ITodos,
      payload: types.ITodos
    ) => {
      return payload;
    },
    [constant.ADD_TODO]: (state: any, action: any) => {
      const findSimilar = state.find((todo: types.ITodo) => {
        return todo.text === action.payload.text;
      });
      if (!findSimilar) {
        return [...state, action.payload];
      } else {
        return state;
      }
    },
    [constant.REMOVE_TODO]: (state: any, action: any) => {
      const filteredState = state.filter((todo: types.ITodo) => {
        return !(todo.id === action.payload.id);
      });
      return filteredState;
    },
    [constant.CHANGE_TODO_STATUS]: (state: any, action: any) => {
      const filteredState = state.map((todo: types.ITodo) => {
        if (todo.id === action.payload.id) {
          return {
            text: todo.text,
            id: todo.id,
            status: !todo.status
          };
        } else {
          return todo;
        }
      });
      return filteredState;
    }
  },
  []
);

const spinnerReducer = combineEvents(
  {
    [constant.SPINNER_ON]: (state: boolean, action: Function) => {
      return true;
    },
    [constant.SPINNER_OFF]: (state: boolean, action: Function) => {
      return false;
    }
  },
  false
);

export default combineReducers({
  list: todosReducer,
  spinnerStatus: spinnerReducer
});
