import React,{ useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const logins = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.kumulos.com/wp-content/uploads/2013/08/amazon-logo-preview.png"
          alt=""
        ></img>
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={event => setPassword(event.target.value)}
          ></input>

          <button type="submit" className="login__signin" onClick={logins}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button  className="login__create" onClick={register}>
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
