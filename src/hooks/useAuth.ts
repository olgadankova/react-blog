import { useAppSelector } from "../store/hooks/index";

export const useAuth = () => {
  const { email, userDate, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    userDate,
    id,
  };
};
