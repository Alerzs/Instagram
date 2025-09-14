import { createBrowserRouter } from "react-router";
import  Login  from "./components/pages/Login.jsx"
import SignUp from "./components/pages/Signup.jsx";
import Profile from "./components/pages/Profile.jsx";
import Userpage from './components/pages/Userpage.jsx';
import Home from "./components/pages/Home.jsx";



export const router = createBrowserRouter([



  {
    path: "/user/login",
    element: <Login />,
  },{
    path: "/user/signup",
    element: <SignUp />
  },
{
    path:'/Profile',
    element:<Profile />
  },
  {
    path:'/user-page',
    element:<Profile />
  },
  {
    path:'/home',
    element:<Home />
  },
  {
    path:'/:id',
    element:<Userpage />
  }
  
  ]);