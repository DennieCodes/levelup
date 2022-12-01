// import useInputState from '../../hooks/useInputState';
import useInputState from "../../hooks/useInputState";

export default function Account() {
  const [name, handleName, nameReset] = useInputState("");
  const [email, handleEmail, emailReset] = useInputState("");
  const [password, handlePassword, passwordReset] = useInputState("");

  function loginHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    void fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name: name, email: email, password: password }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());
    // .then((data) => console.log(`Here is the data: `, data));

    nameReset();
    emailReset();
    passwordReset();
  }

  return (
    <main>
      <h1>Account</h1>

      <div>
        <form onSubmit={loginHandler}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleName}
            ></input>
          </label>

          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmail}
            ></input>
          </label>

          <label htmlFor="password">
            Password
            <input
              type="text"
              id="password"
              value={password}
              onChange={handlePassword}
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}
