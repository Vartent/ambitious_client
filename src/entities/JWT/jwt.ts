export enum jwtType {
  BEARER = "bearer",
}

export type JWToken = {
  token: string;
  type: jwtType;
};
