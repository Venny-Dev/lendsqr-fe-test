import { useRoutes } from "react-router";
import routeConfig from "./routesConfig";

function AppRoutes() {
  const routes = useRoutes(routeConfig);
  return routes;
}

export default AppRoutes;
