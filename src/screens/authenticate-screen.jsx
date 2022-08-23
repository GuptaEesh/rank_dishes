import React, { useState } from "react";
import { InputPass, InputSimple } from "../components";
import { useUser } from "../helpers/user-context";
import { ACTIONS } from "../utils";
import "./screens.css";
const AuthenticateScreen = () => {
  const {
    usersState: { usernameError, passwordError },
    dispatchUser,
  } = useUser();
  const [userCreds, setUserCreds] = useState({});
  const [error, setError] = useState(false);
  const { username, password } = userCreds;

  const submitHandler = (e) => {
    e.preventDefault();
    setError(true);
    dispatchUser({
      type: ACTIONS.USER_CRED,
      payload: userCreds,
    });
  };
  const inputHandler = (e) => {
    setError(false);
    setUserCreds((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const setExistingUserCreds = (e) => {
    e.preventDefault();
    setUserCreds({ username: "antony", password: "antony123" });
  };

  return (
    <article className="h-full flex align-center justify-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col g-1 justify-center login-form p-1 r-05"
      >
        <section>
          <InputSimple
            title="UserName"
            inputName="username"
            inputClass="p-010 r-05"
            inputPlaceholder="username.."
            inputType="text"
            inputValue={username ?? ""}
            inputFunc={inputHandler}
          />
          {error && usernameError ? (
            <small className="error">Incorrect Username!</small>
          ) : null}
        </section>
        <section>
          <InputPass
            inputName="password"
            title="Password"
            inputClass="p-010 r-05"
            inputPlaceHolder="password.."
            inputType="password"
            inputValue={password ?? ""}
            inputFunc={inputHandler}
          />
          {error && passwordError ? (
            <small className="error">Incorrect Password!</small>
          ) : null}
        </section>
        <button
          className="cta-btn cursor-ptr r-05"
          onClick={setExistingUserCreds}
        >
          Fill-in guest creds
        </button>
        <button className="cta-btn cursor-ptr r-05" type="submit">
          Login
        </button>
      </form>
    </article>
  );
};

export { AuthenticateScreen };
