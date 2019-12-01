import * as constants from "./constants";
import * as types from "../../../types/types";

export const spinnerOn = () => ({ type: constants.SPINNER_ON });
export const spinnerOff = () => ({ type: constants.SPINNER_OFF });

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

export const getRootTodoRequest = () => ({
  type: constants.GET_ROOT_TODO_REQUEST
});

export const getRootTodoSuccess = (payload: types.IRootTodo) => ({
  type: constants.GET_ROOT_TODO_SUCCESS,
  payload
});

export const getRootTodoFail = (payload: types.IServersResponse) => ({
  type: constants.GET_ROOT_TODO_FAIL,
  payload
});

export const sendTodoRequest = (payload: types.ITodo) => {
  return {
    type: constants.SEND_TODO_REQUEST,
    payload
  };
};

export const sendTodoSuccess = (payload: types.IServersResponse) => ({
  type: constants.SEND_TODO_SUCCESS,
  payload
});

export const sendTodoFail = (payload: types.IServersResponse) => ({
  type: constants.SEND_TODO_FAIL,
  payload
});

export const changeTodoStatusRequest = (payload: types.ITodo) => ({
  type: constants.CHANGE_TODO_STATUS_REQUEST,
  payload
});

export const changeTodoStatusSuccess = (payload: types.ITodo) => ({
  type: constants.CHANGE_TODO_STATUS_SUCCESS,
  payload
});

export const changeTodoStatusFail = (payload: types.IServersResponse) => ({
  type: constants.CHANGE_TODO_STATUS_FAIL,
  payload
});

export const deleteTodoRequest = (payload: types.ITodo) => ({
  type: constants.DELETE_TODO_REQUEST,
  payload
});

export const deleteTodoSuccess = (payload: types.IServersResponse) => ({
  type: constants.DELETE_TODO_SUCCESS,
  payload
});

export const deleteTodoFail = (payload: types.IServersResponse) => ({
  type: constants.DELETE_TODO_FAIL,
  payload
});

export const addTasksBox = (payload: types.ITasksBox) => {
  return {
    type: constants.ADD_TASKS_BOX,
    payload
  };
};

export const removeTasksBox = (payload: types.ITasksBox) => ({
  type: constants.REMOVE_TASKS_BOX,
  payload
});

export const sendTaskBoxRequest = (payload: types.ITasksBox) => {
  return {
    type: constants.SEND_TASK_BOX_REQUEST,
    payload
  };
};

export const sendTaskBoxSuccess = (payload: types.IServersResponse) => ({
  type: constants.SEND_TASK_BOX_SUCCESS,
  payload
});

export const sendTaskBoxFail = (payload: types.IServersResponse) => {
  return {
    type: constants.SEND_TASK_BOX_FAIL,
    payload
  };
};

export const deleteTaskBoxRequest = (payload: types.ITasksBox) => ({
  type: constants.DELETE_TASK_BOX_REQUEST,
  payload
});

export const deleteTaskBoxSuccess = (payload: types.IServersResponse) => ({
  type: constants.DELETE_TASK_BOX_SUCCESS,
  payload
});

export const deleteTaskBoxFail = (payload: types.IServersResponse) => ({
  type: constants.DELETE_TASK_BOX_FAIL,
  payload
});
