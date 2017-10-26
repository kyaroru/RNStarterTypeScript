import { ITokenState } from '../../Persist/Token/TokenTypes';
import { ILoginCredentials } from './LoginTypes';

export const login = (credentials: ILoginCredentials) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const result: ITokenState = {
      token: 'fake-token-from-api',
    };
    resolve(result);
  }, 500);
});
