import { api } from "../../api";
import { User } from "./types";

class UserService {
  async getAllUsers() {
    try {
      const res = await api.get<User[]>("users");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  // ---------- GetUserByID -----------------

  //   async getUserById(userId: number) {
  //     try {
  //       const res = await api.get<User>(`users/${userId}`);
  //       return res;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
}

export const userService = new UserService();
