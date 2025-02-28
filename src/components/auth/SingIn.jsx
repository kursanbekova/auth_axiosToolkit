import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignIn = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <SignInWrapper>
      <form onSubmit={handleSubmit}>
        <h2>Войдите в свой аккаунт</h2>
        <StyledInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ваш email"
        />
        <StyledInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="ваш пароль"
        />
        <ButtonWrapper>
          <StyledButton type="submit">Войти</StyledButton>
        </ButtonWrapper>
        <TextWrapper>
          <Text>Нет аккаунта?</Text>
          <StyledLink to="/signUp">Зарегистрироваться</StyledLink>
        </TextWrapper>
      </form>
    </SignInWrapper>
  );
};

export default SignIn;

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const TextWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 14px;
  color: #666;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
