import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import ListedBook from "./components/ListedBook/ListedBook.jsx";
import PagetoRead from "./components/PagetoRead/PagetoRead.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,  
      },
      {
        path: "/listed-books",
        element: <ListedBook></ListedBook>
      },
      {
        path: "/page-to-read",
        element: <PagetoRead></PagetoRead>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
