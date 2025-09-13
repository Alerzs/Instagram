import { createBrowserRouter } from "react-router";
import { Login } from "./components/"



export const router = createBrowserRouter([
  {
    path: "/user/login",
    element: <Login />,
  },
  
  ]);