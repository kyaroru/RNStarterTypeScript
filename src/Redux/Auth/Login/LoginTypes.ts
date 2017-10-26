export interface ILoginState {
  readonly isLoading: boolean,
  readonly errors: string[],
}

export interface ILoginCredentials {
  readonly email: string,
  readonly password: string,
}
