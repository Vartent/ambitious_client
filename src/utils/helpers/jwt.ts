import jwt from "jwt-decode";

export default (() => {
  const decode = <T>(token: string) => {
    try {
      return jwt<T>(token);
    } catch {
      return null;
    }
  };

  return { decode };
})();
