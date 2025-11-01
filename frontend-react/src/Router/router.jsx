import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Hero from "../Components/Hero";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dash from "../Pages/Dash";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "register",
        element:<Register></Register>,
      },
      {
        path : "login",
        element : <Login></Login>
      },
      {
        path : "dashboard",
        element : <Dash></Dash>
      }
    ],
  },
]);
