import React from "react";
import { ArrowBack } from "../../components/ArrowBack/ArrowBack";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { StyledSignUp, SignUpTitle } from "../SignUp/styles";

export const SignUp = () => {
  return (
    <>
      <ArrowBack />
      <StyledSignUp>
        <SignUpTitle>Welcome to the Blog!</SignUpTitle>
        <SignUpTitle>Sign Up</SignUpTitle>
        <SignUpForm />
      </StyledSignUp>
    </>
  );
};
