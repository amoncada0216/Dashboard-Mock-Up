import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "@/pages/Homepage";
import Users from "@/pages/Users";
import Admin from "@/pages/users/Admin";
import PaymentsPage from "@/pages/payments/payments";
import { getData } from "@/pages/payments/getData";

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
          { path: "admin", element: <Admin /> },
        ],
      },
      {
        path: "payments",
        children: [
          {
            index: true,
            element: <PaymentsPage />,
            loader: async () => getData(),
          },
        ],
      },
    ],
  },
]);
