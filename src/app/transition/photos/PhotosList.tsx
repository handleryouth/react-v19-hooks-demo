import { Photos as PhotosProps } from "@/types";
import React from "react";
import Photos from "./Photos";

interface PhotoListProps {
  photos: PhotosProps[];
}

export default function PhotosList({ photos }: PhotoListProps) {
  return photos.map((photo) => <Photos key={photo.id} {...photo} />);
}
