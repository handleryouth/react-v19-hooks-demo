import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { TodoProps } from "@/types";
import React from "react";

export default function Todos({ title, id }: TodoProps) {
  return (
    <Card>
      <CardTitle>{id}</CardTitle>
      <CardContent>
        <p>{title}</p>
      </CardContent>
    </Card>
  );
}
