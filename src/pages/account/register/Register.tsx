import styles from "./Register.module.scss";
import useInputState from "../../../hooks/useInputState";

const Register = () => {
  const [name, handleName, nameReset] = useInputState("");
  const [email, handleEmail, emailReset] = useInputState("");
  const [password, handlePassword, passwordReset] = useInputState("");

  function loginHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    void fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());

    nameReset();
    emailReset();
    passwordReset();
  }
  return (
    <div className={styles.container}>
      <form className={styles.registerForm} onSubmit={loginHandler}>
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
      </form>
    </div>
  );
};

export default Register;
