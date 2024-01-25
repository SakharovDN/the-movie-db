import { Navigate, Route, Routes } from "react-router-dom";
import history from "./history";
import { HistoryRouter } from "./router/history-router";
import { RoutePath } from "./router/route-path";
import { AuthRoutePath } from "./router/auth-route-path";
import { LoginPage } from "./pages/LoginPage";
import { useEffect } from "react";

export const App = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path={RoutePath.Auth}>{useAuthRoutes()}</Route>
        <Route path={"*"} element={<AppRoutes />} />
      </Routes>
    </HistoryRouter>
  );
};

const useAuthRoutes = () => {
  return (
    <>
      <Route index path={AuthRoutePath.Login} element={<LoginPage />} />
      <Route path={"*"} element={<Navigate to={AuthRoutePath.Login} />} />
    </>
  );
};

const AppRoutes = () => {
  useEffect(() => {
    history.push(`${RoutePath.Auth}/${AuthRoutePath.Login}`);
  }, []);

  return <></>;
};
