import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Mainpage from "./pages/Main/Main";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Mainpage />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
],{
  basename: "/tableanalyzer/",
});
