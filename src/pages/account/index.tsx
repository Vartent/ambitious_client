import { LayoutAccount } from "@layouts";

import AccountUser from "../../modules/Account/User/index";

const accountPage = () => {
  return (
    <>
      <LayoutAccount>
        <AccountUser />
      </LayoutAccount>
    </>
  );
};

export default accountPage;
