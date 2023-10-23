import { api } from "../../api";
import { Post } from "./types";

class PostService {
  async getAllPosts() {
    try {
      const res = await api.get<Post[]>("posts");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export const postService = new PostService();
