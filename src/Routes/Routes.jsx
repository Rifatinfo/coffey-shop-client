import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Home/Home";
import AddCoffey from "../Components/AddCoffey/AddCoffey";
import UpdateCoffey from "../Components/UpdateCoffey/UpdateCoffey";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Users from "../Components/Users/Users";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          loader : () => fetch('http://localhost:5000/coffey')
        },
        {
            path : '/addCoffey',
            element : <AddCoffey/>
        },
        {
            path : '/sign-in',
            element : <Login/>
        },
        {
            path : '/register',
            element : <Register/>
        },
        {
            path : '/users',
            element : <Users/>,
            loader : () => fetch('http://localhost:5000/users')
        },
        {
            path : '/updateCoffey/:id',
            element : <UpdateCoffey/>,
            loader : ({params}) => fetch(`http://localhost:5000/coffey/${params.id}`)
        }
      ],
    },
  ])

  export default router