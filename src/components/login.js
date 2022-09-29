import { useState } from "react";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const adminUser = {
    email: "goni@naver.com",
    password: "1234",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("회원정보가 일치하지 않습니다!");
      <button
        variant="dark"
        type="submit"
        style={{ margin: "20px" }}
        onClick={() => {
          navigate("/join");
        }}
      >
        회원가입
      </button>;
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };

  return (
    <div className="Login">
      {user.email != "" ? (
        <div>
          <h2>
            환영합니다 !<span>{user.name}</span> 님
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
