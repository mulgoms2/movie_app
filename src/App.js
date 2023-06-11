import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./route/Home";
import Detail from "./route/Detail";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/detail/:id", element: <Detail /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
