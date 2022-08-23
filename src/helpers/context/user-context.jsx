import { createContext, useContext, useEffect, useReducer } from "react";
import { getAllUsers } from "../../utils";
import { userReducer } from "../reducer";

const UserContext = createContext(null);
const initialUserState = {
  users: [],
  loggedUser: {},
  authStatus: localStorage.getItem("authStatus"),
  usernameError: false,
  passwordError: false,
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
