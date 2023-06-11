import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./route/Home";
import Detail from "./route/Detail";
import Korea from "./route/Korea";

function App() {
  const router = createBrowserRouter([
    { path: `${process.env.PUBLIC_URL}/`, element: <Home /> },
    { path: "/detail/:id", element: <Detail /> },
    { path: "/korea", element: <Korea /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
