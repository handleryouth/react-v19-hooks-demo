import React, { useEffect, useState } from "react";
import Todos from "./Todos";
import { TodoProps } from "@/types";

async function fetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch todos");
  }
}

export default function TodosContent() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <h3>Todos</h3>
      {todos.map((todo) => (
        <Todos key={todo.id} {...todo} />
      ))}
    </div>
  );
}
