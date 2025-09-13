import { createBrowserRouter } from "react-router";
import  Login  from "./components/pages/Login.jsx"
import SignUp from "./components/pages/Signup.jsx";
import Home from "./components/pages/Home.jsx";



export const router = createBrowserRouter([
  {
    path: "/user/login",
    element: <Login />,
  },{
    path: "/user/signup",
    element: <SignUp />
  },{
    path:'/home',
    element:<Home />
  }
  
  ]);