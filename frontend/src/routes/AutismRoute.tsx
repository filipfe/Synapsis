import { Route, Routes } from "react-router";
import { autism } from "../assets/pageframes/pageframes";
import PageFrame from "../components/PageFrame";
import { autismRoutes } from "../consts/routes";


export default function AutismRoute() {
  return (
    <Routes>
      {autismRoutes.map((route) => (
        <Route
          path={route.path}
          element={<PageFrame image={autism} title={route.title}>
            {route.component}
          </PageFrame>}
          key={route.path}
        />
      ))}
    </Routes>
  );
}
