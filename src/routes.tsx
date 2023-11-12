import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "pokemon/:id", element: <PokemonDetailsPage /> },
    ],
  },
]);

export default router;
