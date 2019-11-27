import { call, fork, put, takeEvery, take } from "redux-saga/effects";

import { NavigationActions } from "react-navigation";

import * as constants from "./constants";
import * as actions from "./todo.actions";
import * as api from "../../../api/index";
import * as types from "../../../types/types";

function* triggerSpinnerSaga() {
  while (true) {
    yield take(constants.SPINNER_ON);
    yield put(actions.spinnerOn());
    yield take(constants.SPINNER_OFF);
    yield put(actions.spinnerOff());
  }
}

function* getRootTodoSaga() {
  try {
    yield put(actions.spinnerOn());
    //fake api call
    const response = yield call(api.getRootTodo);
    // fake api call end
    // yield put(actions.getTodosSuccess(response));
    yield put(actions.spinnerOff());
  } catch (e) {
    yield put(actions.getRootTodoFail(e.message));
    yield put(actions.spinnerOff());
  }
}

function* sendTodoSaga(action: any) {
  try {
    yield put(actions.spinnerOn());
    // fake api call begin
    // const response = yield call(api.sendTodo, action.payload);
    // fake api call end
    yield put(actions.addTodo(action.payload));
    yield put(actions.getRootTodoRequest());
    yield put(NavigationActions.navigate({ routeName: "BoxCreation" }));
    // yield put(NavigationActions.pop());
  } catch (e) {
    yield put(actions.sendTodoFail(e.message));
    yield put(actions.spinnerOff());
  }
}

function* sendTasksBoxSaga(action: any) {
  try {
    yield put(action.spinnerOn());
    // const response = yield call(api.getRootTodo);
    yield put(actions.addTasksBox(action.payload));
    yield put(actions.spinnerOff());
  } catch (e) {
    yield put(actions.sendTaskBoxFail(e));
    yield put(actions.spinnerOff());
  }
}

// function* changeTodoStatusSaga(action: any) {
//   try {
//     yield put(actions.spinnerOn());
//     // fake api call begin
//     yield call(api.changeTodoStatus, action.payload);
//     // fake api call end
//     yield put(actions.changeTodoStatus(action.payload));
//     yield put(actions.getTodosRequest());
//   } catch (e) {
//     yield put(actions.changeTodoStatusFail(e.message));
//     yield put(actions.spinnerOff());
//   }
// }

// function* deleteTodoSaga(action: any) {
//   try {
//     yield put(actions.spinnerOn());
//     // fake api call begin
//     yield call(api.deleteTodo, action.payload);
//     // fake api call end
//     yield put(actions.removeTodo(action.payload));
//     yield put(actions.getTodosRequest());
//   } catch (e) {
//     yield put(actions.deleteTodoFail(e.message));
//     yield put(actions.spinnerOff());
//   }
// }

export default function* todoSaga() {
  yield fork(triggerSpinnerSaga);
  yield* [
    takeEvery(constants.GET_ROOT_TODO_REQUEST, getRootTodoSaga),
    takeEvery(constants.SEND_TODO_REQUEST, sendTodoSaga),
    takeEvery(constants.SEND_TASK_BOX_REQUEST, sendTasksBoxSaga)
    // takeEvery(constants.CHANGE_TODO_STATUS_REQUEST, changeTodoStatusSaga),
    // takeEvery(constants.DELETE_TODO_REQUEST, deleteTodoSaga)
  ];
}
