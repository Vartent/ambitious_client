import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";

import { authLogoutRequest } from "@store/Auth";
import { RootState } from "@store/index";

const useAuth = () => {
  const user = useSelector((state: RootState) => state.auth.data?.user);

  const router = useRouter();
  const dispatch = useDispatch();

  const isAuth = user ? true : false;

  const handlerLogout = () => {
    dispatch(authLogoutRequest());
    router.push("/");
  };

  return {
    isAuth,
    user: isAuth ? user : null,
    handlerLogout,
  };
};

export default useAuth;
