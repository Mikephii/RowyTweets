/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Button from "@mui/material/Button";
const NavBar = () => {
  const { currentUser, signout } = useAuth();

  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        backgroundColor: "rgba(255,0,0,0.1)",
        width: "100%",
      }}
    >
      <div> {currentUser ? currentUser.email : ""}</div>
      {currentUser ? <Button onClick={signout}>sign out</Button> : null}
    </div>
  );
};

export default NavBar;
