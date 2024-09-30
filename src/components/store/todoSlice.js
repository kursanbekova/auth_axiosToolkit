import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: action.payload.text,
        completed: false,
        data: action.payload.data,
      };
      state.todos.push(newTodo);
    },

    toggleCompleted: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleCompleted, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
