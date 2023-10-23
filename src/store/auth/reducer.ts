import {
  AUTH_ACTION_TYPES,
  AuthAction,
  AuthState,
  //   SetAuthStatusPayload,
  SetCurrentUserPayload,
  // SetUsersDataPaylaod,
  User,
} from "./types";

export const initialState: AuthState = {
  user: {
    username: "",
    password: "",
  },
  usersData: [],
  isAuth: false,
};

export const AuthReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.SET_CURRENT_USER:
      const { name, value } = action.payload as SetCurrentUserPayload;
      return { ...state, user: { ...state.user, [name]: value } };
    case AUTH_ACTION_TYPES.SET_CURRENT_USERS_DATA:
      const newState = {
        ...state,
        usersData: [...state.usersData, state.user],
      };
      localStorage.setItem("usersData", JSON.stringify(newState.usersData));
      return newState;
    case AUTH_ACTION_TYPES.SET_AUTH_STATUS:
      return { ...state, isAuth: action.payload as boolean };
    case AUTH_ACTION_TYPES.SET_ALL_USERS_DATA:
      return { ...state, usersData: action.payload as User[] };
    default:
      return state;
  }
};
