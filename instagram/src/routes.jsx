import { createBrowserRouter } from "react-router";
import { Login } from "./components/"



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  
  ]);