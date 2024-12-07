"use server";
import { UserProps } from "@/types";

export async function createUser(
  previousState: UserProps[],
  formData: FormData
) {
  const newUser: UserProps = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
  };

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return [...previousState, newUser];
}
