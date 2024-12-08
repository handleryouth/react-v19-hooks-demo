import { Album } from "@/types";
import React, { useEffect, useState } from "react";
import AlbumComponent from "./Album";

async function fetchAlbum() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch albums");
  }
}

export default function AlbumsContent() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetchAlbum().then((data) => setAlbums(data));
  }, []);

  return (
    <div>
      <h3>Albums</h3>
      {albums.map((album) => (
        <AlbumComponent key={album.id} {...album} />
      ))}
    </div>
  );
}
