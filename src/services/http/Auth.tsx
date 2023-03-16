import { config } from "process";

import { LoginEmail, RegisterUser } from "../../entities/Auth/Auth";
import http from "../../utils/http";

const basePath = "/auth";

export const login = async (body: LoginEmail): Promise<void> => {
  await http.post(`${basePath}/sing-in`, body, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });

  // LocalStorage.set("access_token", data.token);
};

export const register = async (body: RegisterUser): Promise<void> => {
  await http.post(`${basePath}/sing-up`, body);
};
