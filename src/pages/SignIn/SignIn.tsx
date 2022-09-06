import React from "react";
import { ArrowBack } from "../../components/ArrowBack/ArrowBack";
import { Footer } from "../../components/Footer/Footer";
import { Nav } from "../../components/Nav/Nav";
import { SignInForm } from "../../components/SignInForm/SignInForm";
import { StyledSignUp, SignUpTitle } from "../SignUp/styles";

export const SignIn = () => {
  return (
    <>
      <Nav />
      <ArrowBack />
      <StyledSignUp>
        <SignUpTitle>Welcome to Home!</SignUpTitle>
        <SignUpTitle>Sign In</SignUpTitle>
        <SignInForm />
      </StyledSignUp>
      <Footer />
    </>
  );
};
