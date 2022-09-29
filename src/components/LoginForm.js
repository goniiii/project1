import { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {/*ERROR! */}
        {error != "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <div htmlFor="name">Name:</div>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setDetails({ ...details, name: e.target.value });
            }}
            value={details.name}
          ></input>
        </div>
        <div className="form-group">
          <div htmlFor="email">Email:</div>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
            value={details.email}
          ></input>
        </div>
        <div className="form-group">
          <div htmlFor="password">Password:</div>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
            value={details.password}
          ></input>
        </div>
        <div className="LoginButton">
          <input type="submit" value="LOGIN"></input>
        </div>
      </div>
    </form>
  );
}
export default LoginForm;
