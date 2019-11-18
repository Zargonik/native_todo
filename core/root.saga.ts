import { all } from "redux-saga/effects";
import todoSaga from "./modules/todo.list/todo.saga";

export default function* rootSaga() {
  yield all([todoSaga()]);
}
