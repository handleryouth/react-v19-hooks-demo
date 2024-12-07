"use server";

export async function createTodoList(formData: FormData) {
  const todo = formData.get("todo");
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return todo;
}
