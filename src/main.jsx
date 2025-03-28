import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/HomePage.jsx";
import LeaderboardPage from "./pages/Leaderboard/LeaderboardPage.jsx";
import Leader from "./pages/Test_Temp/Leader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/leaderboard/:cluster",
    element: <LeaderboardPage />,
  },
  {
    path: "/leader",
    element: <Leader />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
