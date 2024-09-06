import { useRoutes } from "react-router-dom/dist";
import Landing from "./views/Landing/Landing";
import RootLayout from "./layout/RootLayout/RootLayout";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
      ],
    },
  ]);
  return element;
}
