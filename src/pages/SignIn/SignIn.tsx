import React from "react";
import { ArrowBack } from "../../components/ArrowBack/ArrowBack";
import { Nav } from "../../components/Nav/Nav";
import { SignInForm } from "../../components/SignInForm/SignInForm";
import { ROUTE } from "../../router/routes";
import { StyledSignUp, SignUpTitle, LinkToSignUp } from "../SignUp/styles";

export const SignIn = () => {
  return (
    <>
      <Nav />
      <ArrowBack />
      <StyledSignUp>
        <SignUpTitle>Back to Home!</SignUpTitle>
        <SignUpTitle>Sign In</SignUpTitle>
        <LinkToSignUp to={ROUTE.SIGN_UP}>I don't have an account.</LinkToSignUp>
        <SignInForm />
      </StyledSignUp>
    </>
  );
};
