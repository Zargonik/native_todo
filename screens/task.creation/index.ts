import * as Yup from "yup";

export const initialValues = {
  task: "",
  taskStatus: false,
  taskDate: "Today",
  alarm: null,
  boxType: "Inbox",
  id: "random id"
};

export const validateSchema = {
  task: Yup.string()
    .min(2, "2 символа минимум")
    .max(50, "50 слишком много сиволов")
    .required("Обязательное поле")
};

export { default } from "./task.creation";
