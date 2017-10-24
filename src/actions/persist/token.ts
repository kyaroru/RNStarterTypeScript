import { RootState } from '../../reducers';

const PERSIST = 'PERSIST';

export const SET_TOKEN = `${PERSIST}/SET_TOKEN`;

type TokenAction = { type: 'PERSIST/SET_TOKEN', token: string };

export type TokenActions = TokenAction;

export const getToken = (state: RootState): string | null => state[PERSIST].token;

export const setToken = (token: string) => ({
  type: SET_TOKEN,
  token,
});
