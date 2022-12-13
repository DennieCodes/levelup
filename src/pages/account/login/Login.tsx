import styles from "./Login.module.scss";
import { useState } from "react";
import useInputState from "../../../hooks/useInputState";
import validateEmail from "../../../helpers/validateEmail";
import React from "react";
import { signIn } from "next-auth/react";

// import { getProviders } from 'next-auth/react';

type LoginProp = {
  toggleRegister: () => void;
};

const Login = ({ toggleRegister }: LoginProp) => {
  const [validEmail, setValidEmail] = useState(false);

  const [email, setEmail, emailReset] = useInputState("");
  const [password, setPassword, passwordReset] = useInputState("");

  // CODE below is to check next-auth setup providers
  // const providers = async () => {
  // 	const providers = await getProviders();
  // 	return providers;
  // };

  // void providers().then((response) => console.log(response));

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

  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    console.log("Results within Login Component: ", result);
  };

  return (
    <div className={styles.container}>
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
