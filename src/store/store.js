import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/store/todo-slice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
// storeda degısıklık oldugunfda local storage setıtem todosa jsonu atıyor, değişikliği dinliyor 
store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todo.todos));
});
