import { useState } from "react";
import styles from "./Register.module.scss";
import useInputState from "../../../hooks/useInputState";
import validateEmail from "../../../helpers/validateEmail";

type RegisterProp = {
  toggleRegister: () => void;
};

const Register = ({ toggleRegister }: RegisterProp) => {
  const [validEmail, setValidEmail] = useState(false);

  const [name, handleName, nameReset] = useInputState("");
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

  function registerHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (validEmail && name.length > 0) {
      void fetch("/api/account/register", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .catch((error) => console.log(error));

      nameReset();
      emailReset();
      passwordReset();
    }
  }
  return (
    <div className={styles.container}>
      <form className={styles.registerForm} onSubmit={registerHandler}>
        <div>
          <label htmlFor="name">
            Username
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleName}
              placeholder="Username"
            />
          </label>
          {name.length === 0 && (
            <p className={styles.msgInvalid}>Please provide a username</p>
          )}
        </div>

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
          Already have an account?
          <button onClick={toggleRegister}>Sign In</button>
        </p>
      </form>
    </div>
  );
};

export default Register;
