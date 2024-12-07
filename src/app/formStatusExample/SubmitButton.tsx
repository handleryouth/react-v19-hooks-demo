import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

/*
in order to useFormStatus to work, you need to make its own component inside the form
*/

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? "Loading..." : "Submit"}
    </Button>
  );
}
