"use server";

export async function createPost(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const name = formData.get("name");

  return name;
}
