export default (() => {
  //key not used
  const set = (key: string, data: string): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, data);
    }
  };

  const get = (key: string): string | null => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }

    return null;
  };

  const removeItem = (key: string): void => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  };

  return { set, get, removeItem };
})();
