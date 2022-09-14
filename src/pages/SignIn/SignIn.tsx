import React from "react";
import { ArrowBack } from "../../components/ArrowBack/ArrowBack";
import { SignInForm } from "../../components/SignInForm/SignInForm";
import { StyledSignUp, SignUpTitle } from "../SignUp/styles";

export const SignIn = () => {
  return (
    <>
      <ArrowBack />
      <StyledSignUp>
        <SignUpTitle>Welcome to Home!</SignUpTitle>
        <SignUpTitle>Sign In</SignUpTitle>
        <SignInForm />
      </StyledSignUp>
    </>
  );
};
