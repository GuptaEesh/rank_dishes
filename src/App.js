import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { RedirectAuth, RequireAuth } from "./components";
import { AuthenticateScreen, DishesScreen } from "./screens";
import { App_Routes } from "./utils";

function App() {
  // useEffect(() => {
  //   getAllUsers();
  // }, []);
  return (
    <div className="App">
      <Routes>
        <Route element={<RedirectAuth />}>
          <Route
            path={App_Routes.authenticate}
            element={<AuthenticateScreen />}
          />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path={App_Routes.home} element={<DishesScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
