import { useRouter } from "next/router";

import { FormType } from "@utils";

import AuthForm from "../modules/Auth";

const AuthPage = () => {
  const { pathname } = useRouter();

  return (
    <>
      <div className="auth-page-layout">
        <AuthForm formType={pathname.slice(1)} />
      </div>
    </>
  );
};

export default AuthPage;
