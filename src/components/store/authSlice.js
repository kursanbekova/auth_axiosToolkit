import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postUser } from "./authThunk";
import { axiosInstance } from "../../config/axiosInstance";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  tables: [],
  userData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(postUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postUser.fulfilled, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice;


