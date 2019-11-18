import * as constants from "./constants";
import * as types from "../../../types/types";

export const addTodo = (payload: types.ITodo) => {
  return {
    type: constants.ADD_TODO,
    payload
  };
};

export const removeTodo = (payload: types.ITodo) => ({
  type: constants.REMOVE_TODO,
  payload
});

export const changeTodoStatus = (payload: types.ITodo) => ({
  type: constants.CHANGE_TODO_STATUS,
  payload
});

export const getTodosRequest = () => ({ type: constants.GET_TODOS_REQUEST });

export const getTodosSuccess = (payload: types.ITodos) => ({
  type: constants.GET_TODOS_SUCCESS,
  payload
});

export const getTodosFail = (payload: string) => ({
  type: constants.GET_TODOS_FAIL,
  payload
});

export const sendTodoRequest = (payload: types.ITodo) => ({
  type: constants.SEND_TODO_REQUEST,
  payload
});

export const sendTodoSuccess = (payload: string) => ({
  type: constants.SEND_TODO_SUCCESS,
  payload
});

export const sendTodoFail = (payload: string) => ({
  type: constants.SEND_TODO_FAIL,
  payload
});

export const deleteTodoRequest = (payload: types.ITodo) => ({
  type: constants.DELETE_TODO_REQUEST,
  payload
});

export const deleteTodoSuccess = (payload: string) => ({
  type: constants.DELETE_TODO_SUCCESS,
  payload
});

export const deleteTodoFail = (payload: string) => ({
  type: constants.DELETE_TODO_FAIL,
  payload
});

export const changeTodoStatusRequest = (payload: types.ITodo) => ({
  type: constants.CHANGE_TODO_STATUS_REQUEST,
  payload
});

export const changeTodoStatusSuccess = (payload: string) => ({
  type: constants.CHANGE_TODO_STATUS_SUCCESS,
  payload
});

export const changeTodoStatusFail = (payload: string) => ({
  type: constants.CHANGE_TODO_STATUS_FAIL,
  payload
});

export const spinnerOn = () => ({ type: constants.SPINNER_ON });
export const spinnerOff = () => ({ type: constants.SPINNER_OFF });
