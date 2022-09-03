import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import PulseLoader from "react-spinners/PulseLoader";
import { ROUTE } from "../../router/routes";
import { getFirebaseMessageError } from "../../utils/firebase-error";
import {
  ErrorMessage,
  SignUpButton,
  SignUpFormStyled,
  SignUpInput,
  SignUpLabel,
  SignUpLink,
  SignUpText,
} from "./styles";

type SignUpFormValues = {
  name: string;
  email: string;
  password: string;
};

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<SignUpFormValues> = ({ email, password }) => {
    setIsLoading(true);
    setErrorMessage(null);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
    <SignUpFormStyled onSubmit={handleSubmit(onSubmit)}>
      <SignUpLabel>
        Email:
        <SignUpInput
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "Email is required",
          })}
        />
      </SignUpLabel>
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <SignUpLabel>
        Password:
        <SignUpInput
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
        Forgot password?
      </SignUpLabel>
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <SignUpButton type="submit">
        {isLoading ? <PulseLoader color="#ffffff" size={11} /> : "Sign Up"}
      </SignUpButton>
      <SignUpText>
        I already have an account{" "}
        <SignUpLink to={ROUTE.SIGN_IN}>Sign In</SignUpLink>
      </SignUpText>
    </SignUpFormStyled>
  );
};
