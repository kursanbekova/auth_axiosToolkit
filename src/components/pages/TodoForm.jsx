import styled from "styled-components";
import Input from "../UI/Input";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

const TodoForm = ({ onSubmit }) => {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = {
      text: todo,
      data,
    };
    onSubmit(newTodos);
    setTodo("");
    setData("");
  };

  
  return (
    <Container onSubmit={submitHandler}>
      <StyledInput
        placeholder="task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <StyledInput
        placeholder="date"
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <ButtonContainer>
        <Button type="submit">add</Button>
      </ButtonContainer>
    </Container>
  );
};

export default TodoForm;

const StyledInput = styled(Input)`
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Container = styled.form`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 600px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  text-align: end;
`;
