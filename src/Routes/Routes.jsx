import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";


  export const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
              path:'login',
              element:<Login/>
            },
            {
              path:'signup',
              element:<SignUp/>
            }
        ]
    }
  ])