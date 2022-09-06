import React from "react";
import { ArrowBack } from "../../components/ArrowBack/ArrowBack";
import { Nav } from "../../components/Nav/Nav";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { StyledSignUp, SignUpTitle } from "../SignUp/styles";

export const SignUp = () => {
  return (
    <>
      <Nav />
      <ArrowBack />
      <StyledSignUp>
        <SignUpTitle>Welcome to the Blog!</SignUpTitle>
        <SignUpTitle>Sign Up</SignUpTitle>
        <SignUpForm />
      </StyledSignUp>
    </>
  );
};
