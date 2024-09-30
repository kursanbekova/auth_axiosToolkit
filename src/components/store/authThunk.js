import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const postUser = createAsyncThunk(
  "auth/postUser",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register", userData);

      navigate("/todo");

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth", userData);

      data.data.role === "ADMIN" ? navigate("/table") : navigate("/todo");

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
