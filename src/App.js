import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import { RedirectAuth, RequireAuth } from "./components";
import { useUser } from "./helpers";
import { AuthenticateScreen, DishesScreen, PollResults } from "./screens";
import { ACTIONS, App_Routes } from "./utils";
import { BsFillArrowUpCircleFill } from "./icons";
function App() {
  const navigate = useNavigate();
  const {
    usersState: { authStatus },
    dispatchUser,
  } = useUser();
  const logoutHandler = () => {
    localStorage.clear();
    dispatchUser({ type: ACTIONS.LOGOUT });
    navigate(App_Routes.authenticate);
  };
  const clickHandler = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="App">
      {authStatus && (
        <button
          onClick={logoutHandler}
          className="cta-btn cursor-ptr r-05 absolute logout-btn"
        >
          Logout
        </button>
      )}
      <Routes>
        <Route element={<RedirectAuth />}>
          <Route
            path={App_Routes.authenticate}
            element={<AuthenticateScreen />}
          />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path={App_Routes.home} element={<DishesScreen />} />
          <Route path={App_Routes.results} element={<PollResults />} />
        </Route>
      </Routes>
      {authStatus && (
        <BsFillArrowUpCircleFill
          onClick={clickHandler}
          className="fixed scroll-top cursor-ptr"
        />
      )}
    </div>
  );
}

export default App;
