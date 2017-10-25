
export type LoginStateActions =
{ type: 'AUTH/LOGIN', credentials: object } |
{ type: 'AUTH/LOGIN_FAIL', errors: string[] } |
{ type: 'AUTH/LOGIN_SUCCESS', token: string };
