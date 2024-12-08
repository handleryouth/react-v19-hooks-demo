"use client";

import React from "react";
import Form from "next/form";
import { useForm } from "react-hook-form";
import { createPost } from "./actions";
import SubmitButton from "./SubmitButton";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface FormProps {
  name: string;
}

export default function PageContent() {
  const [name, setName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const action: () => void = handleSubmit(async (data: FormProps) => {
    const formData = new FormData();
    formData.append("name", data.name);
    const returnedName = await createPost(formData);
    setName(returnedName as string);
  });

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Next JS Form</h1>

      <Form action={action} className="flex flex-col gap-y-2">
        <Input
          {...register("name", {
            required: "This field is required",
          })}
          placeholder="Name"
          type="text"
          className="border-2"
        />
        {errors.name && <p>{errors.name.message}</p>}
        <SubmitButton />
      </Form>

      <div>
        <p>
          You just typed: <strong>{name}</strong>
        </p>
      </div>
    </div>
  );
}
