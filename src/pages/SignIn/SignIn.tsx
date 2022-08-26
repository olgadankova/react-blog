import React from "react";
import { ROUTE } from "../../router/router";
import { StyledSignIn, SignInTitle, LinkToSignIn } from "../SignIn/styles";

export const SignIn = () => {
  return (
    <StyledSignIn>
      <SignInTitle>Welcome to the Blog!</SignInTitle>
      <LinkToSignIn to={ROUTE.SIGN_UP}>I don't have an account.</LinkToSignIn>
    </StyledSignIn>
  );
};
