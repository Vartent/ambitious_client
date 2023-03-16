import { GeneralUser } from "../User/User";

export type LoginEmail = Required<
  Pick<GeneralUser, "password" | "username" | "email">
>;

export type RegisterUser = Required<
  Pick<GeneralUser, "email" | "password" | "username">
>;
