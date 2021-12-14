import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../firebase";
function Login() {
  const signIn = (e) => {
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message);
      console.log(error);
    });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://vignette.wikia.nocookie.net/spartaremix/images/e/ec/Discord-new-logo.png/revision/latest?cb=20180224071554"
          alt="logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
