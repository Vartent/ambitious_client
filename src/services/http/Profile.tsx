import { DeepPartial } from "redux";

import { Profile } from "../../entities/Profile/Profile";
import { GeneralUser } from "../../entities/User/User";
import http from "../../utils/http";

const basePath = "/profile";

export const getProfile = async (body: Profile): Promise<void> => {
  await http.post(`${basePath}/sing-in`, body);

  // LocalStorage.set("access_token", data.token);
};

export const register = async (
  body: DeepPartial<GeneralUser>
): Promise<void> => {
  await http.post(`${basePath}/sing-up`, body);
};
