import { RootState } from "..";

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectAllUsers = (state: RootState) => state.auth.usersData;
export const selectAuthState = (state: RootState) => state.auth.isAuth;
