export interface UserCreateRequest {
  user: {
    email: string;
    password: string;
    username: string | undefined;
  }
}