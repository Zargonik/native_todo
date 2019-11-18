import { call, fork, put, takeEvery, take } from "redux-saga/effects";

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

function* getTodosSaga() {
  try {
    yield put(actions.spinnerOn());
    //fake api call
    const response = yield call(api.getTodo);
    // fake api call end
    // yield put(actions.getTodosSuccess(response));
    yield put(actions.spinnerOff());
  } catch (e) {
    yield put(actions.getTodosFail(e.message));
    yield put(actions.spinnerOff());
  }
}

function* sendTodoSaga(action: any) {
  try {
    yield put(actions.spinnerOn());
    // fake api call begin
    const response = yield call(api.sendTodo, action.payload);
    // fake api call end
    yield put(actions.addTodo(action.payload));
    yield put(actions.getTodosRequest());
  } catch (e) {
    yield put(actions.sendTodoFail(e.message));
    yield put(actions.spinnerOff());
  }
}

function* changeTodoStatusSaga(action: any) {
  try {
    yield put(actions.spinnerOn());
    // fake api call begin
    yield call(api.changeTodoStatus, action.payload);
    // fake api call end
    yield put(actions.changeTodoStatus(action.payload));
    yield put(actions.getTodosRequest());
  } catch (e) {
    yield put(actions.changeTodoStatusFail(e.message));
    yield put(actions.spinnerOff());
  }
}

function* deleteTodoSaga(action: any) {
  try {
    yield put(actions.spinnerOn());
    // fake api call begin
    yield call(api.deleteTodo, action.payload);
    // fake api call end
    yield put(actions.removeTodo(action.payload));
    yield put(actions.getTodosRequest());
  } catch (e) {
    yield put(actions.deleteTodoFail(e.message));
    yield put(actions.spinnerOff());
  }
}

export default function* todoSaga() {
  yield fork(triggerSpinnerSaga);
  yield* [
    takeEvery(constants.GET_TODOS_REQUEST, getTodosSaga),
    takeEvery(constants.SEND_TODO_REQUEST, sendTodoSaga),
    takeEvery(constants.CHANGE_TODO_STATUS_REQUEST, changeTodoStatusSaga),
    takeEvery(constants.DELETE_TODO_REQUEST, deleteTodoSaga)
  ];
}
