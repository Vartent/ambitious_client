import { useRouter } from "next/router";

import { FormType } from "@utils";

import AuthForm from "../../modules/Auth";

const AuthPage = () => {
  const { asPath } = useRouter();

  return (
    <>
      <div className="auth-page-layout">
        <AuthForm
          formType={asPath === "login" ? FormType.LOGIN : FormType.REGISTER}
        />
      </div>
    </>
  );
};

export default AuthPage;
