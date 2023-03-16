import { useSelector } from "react-redux";

import { LoginEmail } from "@entities";
import { RootState, useAppDispatch } from "src/store";
import { authLoginEmailRequest } from "src/store/Auth";

import { Props } from "../../ui/Form/Email/index.type";
import UIAuthForm from "../../ui/Form/Email/UIFormEmail";
// import SignInForm from "../../ui/Form/sign-in"

const AuthForm = ({ formType }: Props) => {
  const { loadingLogin } = useSelector((state: RootState) => state.auth);

  return <UIAuthForm formType={formType} loading={loadingLogin} />;
};

export default AuthForm;
