import { ACTIONS } from "../../utils";

export const userReducer = (usersState, action) => {
  const { type, payload } = action;
  const isUsernameCorrect = () =>
    usersState.users.some((user) => user.username === payload.username);
  const isPasswordCorrect = () =>
    usersState.users.some((user) => user.password === payload.password);
  const checkIfUserPresent = () => {
    localStorage.setItem(
      "authStatus",
      isUsernameCorrect() && isPasswordCorrect()
    );
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
    case ACTIONS.LOGOUT:
      return {
        ...usersState,
        loggedUser: {},
        authStatus: false,
        usernameError: false,
        passwordError: false,
      };
    default:
      return usersState;
  }
};
