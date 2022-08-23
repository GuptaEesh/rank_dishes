import React, { useState } from "react";
import { InputPass, InputSimple } from "../components";
import { useUser } from "../helpers/user-context";
import { ACTIONS } from "../utils";
import "./screens.css";
const AuthenticateScreen = () => {
  const { dispatchUser } = useUser();
  const [userCreds, setUserCreds] = useState({});
  const { username, password } = userCreds;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatchUser({ type: ACTIONS.USER_CRED, payload: userCreds });
    setUserCreds({ username: "", password: "" });
  };
  const inputHandler = (e) => {
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
        <InputSimple
          title="UserName"
          inputName="username"
          inputClass="p-010 r-05"
          inputPlaceholder="username.."
          inputType="text"
          inputValue={username ?? ""}
          inputFunc={inputHandler}
        />
        <InputPass
          inputName="password"
          title="Password"
          inputClass="p-010 r-05"
          inputPlaceHolder="password.."
          inputType="password"
          inputValue={password ?? ""}
          inputFunc={inputHandler}
        />
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
