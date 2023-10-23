export enum AUTH_ACTION_TYPES {
  SET_CURRENT_USER = "SET_CURRENT_USER",
  SET_CURRENT_USERS_DATA = "SET_CURRENT_USERS_DATA",
  SET_AUTH_STATUS = "SET_AUTH_STATUS",
  SET_ALL_USERS_DATA = "SET_ALL_USERS_DATA",
}

export interface User {
  username: string;
  password: string;
}

export interface AuthState {
  user: User;
  usersData: User[];
  isAuth: boolean;
}

export interface SetCurrentUserPayload {
  name: keyof User | keyof User[];
  value: string;
}

// export interface SetAuthStatusPayload {
//   isAuth: boolean;
// }

export interface SetUsersDataPaylaod {
  name: keyof User[];
}

export interface AuthAction {
  type: AUTH_ACTION_TYPES;
  payload: SetCurrentUserPayload | boolean | SetUsersDataPaylaod | User[];
}
