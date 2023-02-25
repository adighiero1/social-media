import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
//Login page
const Login = () => {
  const { login } = useContext(AuthContext); // not logged in yet.
  const handleLogin = () => {
    login();
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>lorem safasfsfasfsafsasdfsf</p>
          <span> Don't you have an account?</span>
          <Link to="/register">
            {/**using react router dom for link */}
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
