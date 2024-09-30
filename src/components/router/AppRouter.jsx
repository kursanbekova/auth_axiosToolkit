import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";
import TablePage from "../pages/TablePage";
import SignInPage from "../pages/SignInPage";

import React from "react";
import CreateTodo from "../auth/CreateTodo";

const AppRouter = () => {
  const router = createBrowserRouter([
    { path: "/", element: <SignInPage /> },
    { path: "signUp", element: <SignUpPage /> },
    { path: "/table", element: <TablePage /> },
    { path: "/todo", element: <CreateTodo /> },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
