import React from "react";
import TodoForm from "../pages/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todoSlice";
import { LoadingSpinner } from "../UI/Spinner";
import TodoList from "../TodoList";

const CreateTodo = () => {
  const { isLoading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTodo(data));
  };

  return (
    <div>
      <TodoForm onSubmit={onSubmit} />
      {isLoading && <LoadingSpinner />}
      {error && <h2 style={{ color: "red" }}>error</h2>}
      <TodoList />
    </div>
  );
};

export default CreateTodo;
