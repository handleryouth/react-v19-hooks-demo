import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Post as PostProps } from "@/types";
import React from "react";

export default function Post({ body, title }: PostProps) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
