import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Home/Home";
import AddCoffey from "../Components/AddCoffey/AddCoffey";
import UpdateCoffey from "../Components/UpdateCoffey/UpdateCoffey";

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
            path : '/updateCoffey/:id',
            element : <UpdateCoffey/>,
            loader : ({params}) => fetch(`http://localhost:5000/coffey/${params.id}`)
        }
      ],
    },
  ])

  export default router