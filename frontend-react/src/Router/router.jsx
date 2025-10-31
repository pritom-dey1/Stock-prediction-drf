import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Hero from "../Components/Hero";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
    ],
  },
]);
