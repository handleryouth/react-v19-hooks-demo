"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import NextForm from "next/form";
import { Input } from "@/components/ui/input";
import { UserProps } from "@/types";
import React, { useActionState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { createUser } from "./action";
import { Button } from "@/components/ui/button";
import { REGEX_EMAIL } from "@/constant";
import { Card, CardContent } from "@/components/ui/card";

export default function PageContent() {
  const [users, submitUser, isPending] = useActionState(createUser, []);

  const [, startTransition] = useTransition();

  const formValue = useForm<UserProps>();

  const action: () => void = formValue.handleSubmit((formData: UserProps) => {
    startTransition(() => {
      const userFormData = new FormData();
      userFormData.append("firstName", formData.firstName);
      userFormData.append("lastName", formData.lastName);
      userFormData.append("email", formData.email);
      submitUser(userFormData);
    });
  });

  return (
    <div>
      <h1 className="text-center">Form State</h1>

      <Form {...formValue}>
        <NextForm action={action}>
          <FormField
            rules={{ required: "This field is required" }}
            control={formValue.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name </FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormDescription>Enter your first name</FormDescription>
                <FormMessage>
                  {formValue.formState.errors.firstName?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={formValue.control}
            name="lastName"
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormDescription>Enter your last name</FormDescription>
                <FormMessage>
                  {formValue.formState.errors.lastName?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <FormField
            rules={{
              required: "This field is required",
              pattern: {
                message: "Invalid email",
                value: REGEX_EMAIL,
              },
            }}
            control={formValue.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription>Enter your email</FormDescription>
                <FormMessage>
                  {formValue.formState.errors.email?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </NextForm>
      </Form>

      <div>
        <h3 className="text-center">User List</h3>
        <div className="flex flex-col gap-y-2">
          {isPending ? (
            <p>Loading...</p>
          ) : (
            users.map((user, index) => (
              <Card key={index}>
                <CardContent>
                  <p>First Name: {user.firstName}</p>
                  <p>Last Name{user.lastName}</p>
                  <p>Email: {user.email}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
