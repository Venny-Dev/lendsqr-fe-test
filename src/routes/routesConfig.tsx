import { Navigate, type RouteObject } from "react-router-dom";
import AppLayout from "../ui/AppLayout/AppLayout";
import UsersOverview from "../pages/UsersOverview/UsersOverview";
import UserDetails from "../pages/UserDetails/UserDetails";
import Login from "../pages/Login/Login";

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/users" replace />,
      },
      {
        path: "users",
        element: <UsersOverview />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Login />,
  },
];

export default routeConfig;
