type UserId = number;
type Email = string;

type Id = {
  id: number;
};

type PageType = {
  currentPage: number;
  limit: number;
};

type MetaType = PageType & {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number;
  prevPage: number;
  totalItems: number;
  totalPages: number;
};

type DataResponse<T> = {
  code: string;
  data: T;
  errors?: { [key: string]: string };
  message: string;
  meta: MetaType;
  status: number;
};

type Query = {
  query: string;
};

type TokenPayload = {
  exp: Date;
  iat: Date;
  nbf: Date;
  sub: string;
  user: {
    email: string;
    password: string;
    username: string;
  };
};

type LoginResponse = {
  access_token: string;
  token_type: strin;
};

type AuthCtx = {
  isAuth: boolean;
  user: TokenPayload | null;
};

type PageProps = {
  auth: AuthCtx;
};
