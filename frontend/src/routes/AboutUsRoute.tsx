import { Route, Routes } from "react-router";
import PageFrame from "../components/PageFrame";
import { aboutUsRoutes } from "../consts/routes";
import PolishAutismAgreement from "../pages/about/agreement/PolishAutismAgreement";

export default function AboutUsRoute() {
  return (
    <Routes>
      {aboutUsRoutes.map((route) => (
        <Route
          path={route.routes ? `${route.path}/*` : route.path}
          element={
            route.routes ? (
              <Routes>
                <Route
                  path="/"
                  element={
                    route.image ? (
                      <PageFrame image={route.image} title={route.title}>
                        {route.component}
                      </PageFrame>
                    ) : (
                      route.component
                    )
                  }
                />
                {route.routes?.map((subroute) => (
                  <Route
                    path={subroute.path}
                    element={
                      subroute.image ? (
                        <PageFrame
                          image={subroute.image}
                          title={subroute.title}
                        >
                          {subroute.component}
                        </PageFrame>
                      ) : (
                        subroute.component
                      )
                    }
                    key={subroute.path}
                  />
                ))}
              </Routes>
            ) : route.image ? (
              <PageFrame image={route.image} title={route.title}>
                {route.component}
              </PageFrame>
            ) : (
              route.component
            )
          }
          key={route.path}
        />
      ))}
    </Routes>
  );
}
