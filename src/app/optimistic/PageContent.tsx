"use client";

import NextForm from "next/form";
import { Input } from "@/components/ui/input";
import React, { useOptimistic } from "react";
import { Button } from "@/components/ui/button";
import { TodoProps } from "@/types";
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
        id: Math.floor(Math.random() * 1000),
        completed: false,
        title: todo,
        userId: Math.floor(Math.random() * 1000),
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
            <CardContent>{todo.title}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
