import { Route, Routes } from "react-router";
import PageFrame from "../components/PageFrame";
import { autismRoutes } from "../consts/routes";

export default function AutismRoute() {
  return (
    <Routes>
      {autismRoutes.map((route) => (
        <Route
          path={route.path}
          element={
            <PageFrame image={route.image || ""} title={route.title}>
              {route.component}
            </PageFrame>
          }
          key={route.path}
        />
      ))}
    </Routes>
  );
}
