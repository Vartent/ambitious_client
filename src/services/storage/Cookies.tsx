import { parse } from "cookie";

import { COOKIE_ACCESS_TOKEN } from "@utils";
import { JWTHelper } from "@utils/helpers";

export default (() => {
  const parseToken = (cookie?: string): TokenPayload | null => {
    if (typeof window !== "undefined" || cookie) {
      const cookies = parse(
        typeof window !== "undefined" ? document?.cookie || "" : cookie || ""
      );

      const payload = JWTHelper.decode<TokenPayload>(
        (cookies && cookies[COOKIE_ACCESS_TOKEN]) || ""
      );

      return payload;
    }

    return null;
  };

  return { parseToken };
})();
