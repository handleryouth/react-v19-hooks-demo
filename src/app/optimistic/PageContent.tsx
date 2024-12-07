"use client";

import NextForm from "next/form";
import { Input } from "@/components/ui/input";
import React, { useOptimistic } from "react";
import { Button } from "@/components/ui/button";
import { TodoProps } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { createTodoList } from "./action";

export default function PageContent() {
  const [optimisticTodos, addOptimisticTodoItem] = useOptimistic<
    TodoProps[],
    string
  >([], (state, todo) => {
    return [
      ...state,
      {
        id: uuidv4(),
        text: todo,
      },
    ];
  });

  const action = async (formData: FormData) => {
    const todo = formData.get("todo") as string;
    addOptimisticTodoItem(todo);
    await createTodoList(formData);
  };

  return (
    <div>
      <h1>Optimistic Example</h1>

      <NextForm action={action}>
        <Label>
          Todo
          <Input placeholder="Add Todo" name="todo" />
        </Label>

        <Button type="submit">Submit</Button>
      </NextForm>

      <div>
        {optimisticTodos.map((todo) => (
          <Card key={todo.id}>
            <CardContent>{todo.text}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
