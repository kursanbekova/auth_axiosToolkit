import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleCompleted } from "./store/todoSlice";
import styled from "styled-components";
import Button from "../components/UI/Button";
const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleCompleted(id));
  };

  return (
    <StyledDiv>
      <h2>Список задач</h2>
      {todos.length > 0 ? ( // ТERNARY OPERATOR
        <StyledUl>
          {todos.map((todo, index) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {index + 1}. {todo.text}
              </span>
              <StyledButtons>
                <Button onClick={() => handleToggle(todo.id)}>Toggle</Button>
                <Button onClick={() => handleDelete(todo.id)}>Удалить</Button>
              </StyledButtons>
            </li>
          ))}
        </StyledUl>
      ) : (
        <p> Добавьте задания здесь нечего нет </p>
      )}
    </StyledDiv>
  );
};

export default TodoList;

const StyledDiv = styled.div`
  padding: 20px;
  text-align: center;
  > h2 {
  }
  > p {
    color: red;
  }
`;

const StyledUl = styled.ul`
  list-style: none;
  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 10px;
`;
