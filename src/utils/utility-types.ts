export enum HttpStatus {
  OK = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  Conflict = 409,
  UnprocessableEntity = 422,
  InternalServerError = 500,
}

export enum FormType {
  LOGIN = "login",
  REGISTER = "register",
}

export type DefaultConfig = {
  baseURL: string;
  headers: {
    "Content-Type": string;
    accept: string;
  };
  withCredentials: boolean;
};
