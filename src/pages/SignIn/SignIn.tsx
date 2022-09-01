import React from "react";
import { ROUTE } from "../../router/routes";
import { StyledSignUp, SignUpTitle, LinkToSignUp } from "../SignUp/styles";

export const SignIn = () => {
  return (
    <StyledSignUp>
      <SignUpTitle>Back to Home!</SignUpTitle>
      <SignUpTitle>Sign In</SignUpTitle>
      <LinkToSignUp to={ROUTE.SIGN_UP}>I don't have an account.</LinkToSignUp>
    </StyledSignUp>
  );
};
