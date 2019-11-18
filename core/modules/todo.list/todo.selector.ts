import { createSelector } from "reselect";
import * as types from "../../../types/types";

export const getTodos = (state: any) => {
  return state.todos.list;
};

export const getTodosSelector = createSelector([getTodos], todos => {
  return todos.reverse();
});

export const getSpinnerStatus = (state: any) => {
  return state.todos.spinnerStatus;
};

export const getSpinnerStatusSelector = createSelector(
  [getSpinnerStatus],
  spinnerStatus => {
    return spinnerStatus;
  }
);
