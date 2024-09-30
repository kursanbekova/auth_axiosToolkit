import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { postUser } from "../store/authThunk";
import SignUp from "../auth/SingUp";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addUser = (userData) => {
    dispatch(postUser({ userData, navigate }));
  };

  return <SignUp onSubmitFunction={addUser} />;
};

export default SignUpPage;
