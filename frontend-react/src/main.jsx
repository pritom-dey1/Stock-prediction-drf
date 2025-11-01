import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./Router/router";
import './index.css'
import { AuthProvider } from "./Provider/AuthProvider";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <AuthProvider>
          <RouterProvider router={router} />,

    </AuthProvider>
);
