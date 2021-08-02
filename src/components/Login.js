import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          alt=""
          src="https://assets-global.website-files.com/58e32bace1998d6e3fee8d74/5b1b0423dfb9d176a053bffc_what-is-slack.jpeg"
        />
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LoginInnerContainer = styled.div`
  img {
    object-fit: contain;
    height: 200px;
    margin-bottom: 80px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    text-transform: inherit !important;
    background-color: #0a8d48;
    color: white;

    :hover {
      opacity: 1 !important;
      color: green;
    }
  }
`;
