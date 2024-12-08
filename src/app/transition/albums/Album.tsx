"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Album as AlbumProps } from "@/types";
import React from "react";

export default function Album({ title, userId }: AlbumProps) {
  return (
    <Card>
      <CardTitle>Album</CardTitle>
      <CardContent>
        <p>{title}</p>
        <p>{userId}</p>
      </CardContent>
    </Card>
  );
}
