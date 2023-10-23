import "./AlbumsPage.css";
import { Album, albumService } from "../../api/Services/AlbumService";
import { useState, useCallback, useEffect } from "react";

export const AlbumPage = () => {
  const [albums, setAlbums] = useState<Album[]>();

  const fetchData = useCallback(async () => {
    try {
      const albumsData = await albumService.getAllAlbums();
      setAlbums(albumsData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="albums-data-container">
      <div className="albums-title">Our Users Albums</div>
      {albums?.map((album) => {
        return (
          <div className="album-card" key={album.id}>
            <div className="album-container">
              <h3 className="album-number">№{album.userId}</h3>
              <p>Title: {album.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
