import { api } from "../../api";
import { Album } from "./types";

class AlbumService {
  async getAllAlbums() {
    try {
      const res = await api.get<Album[]>("albums");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export const albumService = new AlbumService();
