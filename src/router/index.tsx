import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "@/pages/Homepage";
import Users from "@/pages/Users";
import Admin from "@/pages/users/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> }, 
      {
        path: "users",
        children: [
          { index: true, element: <Users /> }, 
          { path: "page", element: <Admin /> },
        ],
      },
    ],
  },
]);
