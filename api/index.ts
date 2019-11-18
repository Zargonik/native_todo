import axtios from "axios";
import { baseUrl } from "../utils/baseUrl";
import * as types from "../types/types";
import { todos } from "../mocks/mocks";

async function fakeResponse() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("todo"), 1000);
  });
  const response = await promise;
}

export const getTodo = () => fakeResponse();

export const sendTodo = (payload: types.ITodo) => fakeResponse();

export const changeTodoStatus = (payload: types.ITodo) => fakeResponse();

export const deleteTodo = (id: number) => fakeResponse();
