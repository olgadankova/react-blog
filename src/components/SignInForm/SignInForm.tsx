import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "../../router/routes";
import PulseLoader from "react-spinners/PulseLoader";
import { getFirebaseMessageError } from "../../utils/firebase-error";
import {
  SignInButton,
  SignInLink,
  SignInText,
  SignInInput,
  SignInLabel,
  SignInFormStyled,
} from "./styles";
import { ErrorMessage } from "../SignUpForm/styles";
import { Link } from "react-router-dom";

type SignInFormValues = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInFormValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const onSubmit: SubmitHandler<SignInFormValues> = ({ email, password }) => {
    setIsLoading(true);
    setErrorMessage(null);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
      })
      .catch((error) => {
        setErrorMessage(getFirebaseMessageError(error.code));
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };
  return (
    <SignInFormStyled onSubmit={handleSubmit(onSubmit)}>
      <SignInLabel>
        Email:
        <SignInInput
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
          })}
        />
      </SignInLabel>
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <SignInLabel>
        Password:
        <SignInInput
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
      </SignInLabel>
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Link to={ROUTE.RESET_PASSWORD}>Forgot password?</Link>
      <SignInButton type="submit">
        {isLoading ? <PulseLoader color="#ffffff" size={11} /> : "Sign Up"}
      </SignInButton>
      <SignInText>
        I dont have an account{" "}
        <SignInLink to={ROUTE.SIGN_UP}>Sign Up</SignInLink>
      </SignInText>
    </SignInFormStyled>
  );
};
