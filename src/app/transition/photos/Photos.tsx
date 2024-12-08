import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Photos as PhotosProps } from "@/types";
import Image from "next/image";

export default function Photos({ title, url }: PhotosProps) {
  return (
    <Card>
      <CardTitle>Photo</CardTitle>
      <CardContent>
        <Image alt="Photos" src={url} width={300} height={300} />
        <p>{title}</p>
      </CardContent>
    </Card>
  );
}
