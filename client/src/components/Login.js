/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login, currentUser } = useAuth();

  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(email);

    try {
      await login(email, password);
      router.push("/tweets");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div css={{ margin: "auto", width: "fit-content", marginTop: 200 }}>
      <form
        onSubmit={handleSubmit}
        css={{ display: "flex", flexDirection: "column", width: 300 }}
      >
        <TextField label="Email" onChange={handleEmailChange}></TextField>
        <br />
        <TextField label="Password" onChange={handlePasswordChange}></TextField>
        <br />
        <Button variant="outlined" type="submit">
          Login
        </Button>
      </form>
      <div>{currentUser && currentUser.email}</div>
    </div>
  );
};

export default Login;
