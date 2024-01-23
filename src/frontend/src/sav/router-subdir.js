import { createBrowserRouter, Navigate } from "react-router-dom";
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
      /* {
        path: "/*",
        element: <ErrorPage />,
      }*/,
      { path: "/404", element: <ErrorPage /> },
      { path: "*", element: <Navigate to="/404" replace />}
    ],
  },
],  {
    basename: "/tableanalyzer",
  });
