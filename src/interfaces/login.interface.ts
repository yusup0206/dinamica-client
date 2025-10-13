export interface Credentials {
  phone_number: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  user: {
    name: string;
    surname: string;
    fathername: string | null;
    avatar: string;
  };
}
