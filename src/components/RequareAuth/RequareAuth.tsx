import { Navigate, Outlet } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { ROUTE } from "../../router/routes";
import { useAppSelector } from "../../store/hooks";

export const RequareAuth = () => {
  const user = useAppSelector((state) => state.users.result);
  const isLoading = useAppSelector((state) => state.users.isLoading);
  if (isLoading) {
    return <DotLoader />;
  }
  return user ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
