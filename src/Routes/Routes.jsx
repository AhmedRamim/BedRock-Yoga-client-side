import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Instructors from "../pages/Instructors";
import Classes from "../pages/Classes";
import Dashboard from "../Layout/Dashboard";
import ManageClasses from "../pages/Dashboard/AdminRoutes/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminRoutes/ManageUsers";
import AddClass from "../pages/Dashboard/Instructors/AddClass";
import MyClass from "../pages/Dashboard/Instructors/MyClass";
import UpdateClass from "../pages/Dashboard/Instructors/UpdateClass";
import MySelectedClass from "../pages/Dashboard/StudentRoute/MySelectedClass";
import MyEnrolledClass from "../pages/Dashboard/StudentRoute/MyEnrolledClass";


export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'instructors',
        element: <Instructors />
      },
      {
        path: 'classes',
        element: <Classes />
      }


    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: 'manageclasses',
        element: <ManageClasses />
      },
      {
        path: 'manageusers',
        element: <ManageUsers />
      },
      {
        path: 'addclass',
        element: <AddClass />
      },
      {
        path: 'myclass',
        element: <PrivateRoute><MyClass /></PrivateRoute>
      },
      {
        path: 'updateclass/:id',
        element: <UpdateClass />
      },
      {
        path: 'myselectedclass',
        element: <MySelectedClass />
      },
      {
        path: 'myenrolledclass',
        element: <MyEnrolledClass />
      }
    ]


  }
])