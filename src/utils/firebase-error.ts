type FirebaseMessageErrors =
  | "auth/email-already-in-use"
  | "auth/user-not-found"
  | "auth/invalid-email"
  | "auth/invalid-password"
  | "auth/email-already-exists";

enum ErrorMessage {
  EMAIL_ALREADY_IN_USE = "This email is already in use, please try again",
  UNKNOWN_ERROR = "Unknown error, please reload the page",
  EMAIL_ALREADY_EXISTS = "This email already exists, please try again",
  USER_NOT_FOUND = "User not found",
  INVALID_EMAIL = "Invalid email, please try again",
  INVALID_PASSWORD = "Invalid password, please try again",
}

const getFirebaseMessageError = (code: FirebaseMessageErrors): ErrorMessage => {
  switch (code) {
    case "auth/email-already-in-use":
      return ErrorMessage.EMAIL_ALREADY_IN_USE;
    case "auth/user-not-found":
      return ErrorMessage.USER_NOT_FOUND;
    case "auth/invalid-email":
      return ErrorMessage.INVALID_EMAIL;
    case "auth/invalid-password":
      return ErrorMessage.INVALID_PASSWORD;
    case "auth/email-already-exists":
      return ErrorMessage.EMAIL_ALREADY_EXISTS;
    default:
      return ErrorMessage.UNKNOWN_ERROR;
  }
};

export { getFirebaseMessageError };
