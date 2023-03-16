import { Props } from "./index.type";

const LayoutAccount = ({ children }: Props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        Account Layout
      </div>
      {children}
    </>
  );
};

export default LayoutAccount;
