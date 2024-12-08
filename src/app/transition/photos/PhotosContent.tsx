"use client";

import React, { useEffect, useState } from "react";
import { Photos as PhotosProps } from "@/types";
import PhotosList from "./PhotosList";

async function fetchPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch photos");
  }
}

export default function PhotosContent() {
  const [photos, setPhotos] = useState<PhotosProps[]>([]);

  useEffect(() => {
    fetchPhotos().then((data) => setPhotos(data));
  }, []);

  return (
    <div>
      <h3>Photos</h3>
      <PhotosList photos={photos} />
    </div>
  );
}
