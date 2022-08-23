import { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS, getAllUsers } from "../utils";

const UserContext = createContext(null);
const initialUserState = {
  users: [],
  loggedUser: {},
  authStatus: false,
};
const userReducer = (usersState, action) => {
  const { type, payload } = action;
  const checkIfUserPresent = () =>
    usersState.users.some(
      (user) =>
        user.username === payload.username && user.password === payload.password
    );
  switch (type) {
    case ACTIONS.GET_ALL_USERS:
      return { ...usersState, users: payload };
    case ACTIONS.USER_CRED:
      return {
        ...usersState,
        loggedUser: payload,
        authStatus: checkIfUserPresent(),
      };
    default:
      break;
  }
};
const UserProvider = ({ children }) => {
  const [usersState, dispatchUser] = useReducer(userReducer, initialUserState);
  useEffect(() => {
    getAllUsers(dispatchUser);
  }, []);
  return (
    <UserContext.Provider value={{ usersState, dispatchUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);
export { UserProvider, useUser };
