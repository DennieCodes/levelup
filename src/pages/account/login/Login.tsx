import styles from "./Login.module.scss";
import { useState } from "react";
import useInputState from "../../../hooks/useInputState";
import validateEmail from "../../../helpers/validateEmail";
import React from "react";
import { signIn } from "next-auth/react";

type LoginProp = {
  toggleRegister: () => void;
};

const Login = ({ toggleRegister }: LoginProp) => {
  const [validEmail, setValidEmail] = useState(false);

  const [email, setEmail, emailReset] = useInputState("");
  const [password, setPassword, passwordReset] = useInputState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e);

    if (validateEmail(e.target.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e);
    // Password strength
    // https://github.com/deanilvincent/check-password-strength
  };

  const loginHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await signIn("credentials", {
        redirect: true,
        email: email,
        password: password,
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className={styles.registerForm} onSubmit={loginHandler}>
        <div>
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email Address"
            />
          </label>

          {email.length > 0 && validEmail === false && (
            <p className={styles.msgInvalid}>Please enter a valid email</p>
          )}
        </div>

        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
            placeholder="Password"
          />
        </label>
        <button type="submit">Submit</button>
        <p>
          Don&apos;t have an account yet?{" "}
          <button onClick={toggleRegister}>Sign up now</button>
        </p>
      </form>
    </div>
  );
};

export default Login;
