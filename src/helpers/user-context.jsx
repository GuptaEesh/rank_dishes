import { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS, getAllUsers } from "../utils";

const UserContext = createContext(null);
const initialUserState = {
  users: [],
  loggedUser: {},
  authStatus: false,
  usernameError: false,
  passwordError: false,
};
const userReducer = (usersState, action) => {
  const { type, payload } = action;
  const isUsernameCorrect = () =>
    usersState.users.some((user) => user.username === payload.username);
  const isPasswordCorrect = () =>
    usersState.users.some((user) => user.password === payload.password);
  const checkIfUserPresent = () => {
    return isUsernameCorrect() && isPasswordCorrect();
  };
  switch (type) {
    case ACTIONS.GET_ALL_USERS:
      return { ...usersState, users: payload };
    case ACTIONS.USER_CRED:
      return {
        ...usersState,
        loggedUser: payload.userCreds,
        authStatus: checkIfUserPresent(),
        usernameError: payload.username.length !== 0 && !isUsernameCorrect(),
        passwordError: payload.password.length !== 0 && !isPasswordCorrect(),
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
