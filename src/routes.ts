import { Login } from "./pages/Login";

export type RouteType = {
    path: string;
    Component: () => JSX.Element;
    index?: boolean;
    differentPermissions?: boolean;
    to?: string;
    children?: Array<RouteType>;
    isProtected?: boolean;
    permission?: string | string[];
  };
  
  export const routes: RouteType[] = [
    {
      path: "login",
      Component: Login,
    },
  ]