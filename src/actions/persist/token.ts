import { IRootState } from '../../reducers';

const PERSIST = 'PERSIST';

export const SET_TOKEN = `${PERSIST}/SET_TOKEN`;

export type TokenActions = {
  SET_TOKEN: {
    type: typeof SET_TOKEN,
  },
};

export const getToken = (state: IRootState) => state[PERSIST].token;

export const setToken = (token: string) => ({
  type: SET_TOKEN,
  token,
});
