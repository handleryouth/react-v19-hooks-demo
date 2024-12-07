import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen justify-center">
      <h1 className="mb-0">Hooks Demo.</h1>
      <p className="text-center">
        This is a demo of hooks that I have created.
      </p>

      <div className="flex items-center gap-x-4">
        <Button asChild>
          <Link className="no-underline" href="/formStatusExample">
            useFormStatus Example
          </Link>
        </Button>

        <Button asChild>
          <Link className="no-underline" href="/formStateExample">
            useActionState Example
          </Link>
        </Button>

        <Button asChild>
          <Link className="no-underline" href="/deferredValue">
            useDefferedValue Example
          </Link>
        </Button>

        <Button asChild>
          <Link className="no-underline" href="/optimistic">
            useOptimisticExample
          </Link>
        </Button>
      </div>
    </div>
  );
}
