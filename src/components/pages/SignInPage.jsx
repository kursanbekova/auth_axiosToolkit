import React from "react";
import SignIn from "../auth/SingIn";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signIn } from "../store/authThunk";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (userData) => {
    dispatch(signIn({ userData, navigate }));
  };

  return <SignIn onSubmit={onSubmit} />;
};

export default SignInPage;
