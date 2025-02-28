import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SignUp = ({ onSubmitFunction }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const role = "USER";
    onSubmitFunction({ name, email, password, role });
  };

  return (
    <SignInWrapper>
      <form onSubmit={handleSubmit}>
        <h2>Create an account</h2>
        <StyledInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="your name"
        />
        <StyledInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your email"
        />
        <StyledInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="your password"
        />

        <ButtonWrapper>
          <StyledButton type="submit">Sign in</StyledButton>
        </ButtonWrapper>
        <TextWrapper>
          <Text>You already have an account?</Text>
          <StyledLink to="/">Sign up</StyledLink>
        </TextWrapper>
      </form>
    </SignInWrapper>
  );
};

export default SignUp;

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
