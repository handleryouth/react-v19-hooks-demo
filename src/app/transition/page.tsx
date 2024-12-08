"use client";

import { Button } from "@/components/ui/button";
import React, { lazy, Suspense, useState, useTransition } from "react";

type ContentType = "todos" | "albums" | "photos";

/*
The useTransition hook is designed to handle concurrent updates where part of the UI can remain interactive while waiting for another part to update
*/

// Simulating a component with async behavior
const TodosContent = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            import("./todos/TodosContent") as unknown as { default: never }
          ),
        5000
      ); // Delay of 5 seconds
    })
);
const AlbumsContent = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            import("./albums/AlbumsContent") as unknown as { default: never }
          ),
        5000
      ); // Delay of 5 seconds
    })
);
const PhotosContent = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
          resolve(
            import("./photos/PhotosContent") as unknown as { default: never }
          ),
        5000
      ); // Delay of 5 seconds
    })
);

export default function TransitionExample() {
  const [contentType, setContentType] = useState<ContentType>("todos");
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex flex-col min-h-screen min-w-screen items-center justify-center">
      <h1>Use Transition Demonstration</h1>

      <div className="flex items-center gap-x-4">
        <Button
          onClick={() =>
            startTransition(() => {
              setContentType("todos");
            })
          }
          variant="secondary"
        >
          Todos
        </Button>

        <Button
          onClick={() => {
            startTransition(() => {
              setContentType("albums");
            });
          }}
          variant="secondary"
        >
          Albums
        </Button>

        <Button
          onClick={() => {
            startTransition(() => {
              setContentType("photos");
            });
          }}
          variant="secondary"
        >
          Photos
        </Button>
      </div>

      <div>
        {isPending && <p>Loading...</p>}
        <Suspense fallback={<p>Loading content...</p>}>
          {contentType === "todos" && <TodosContent />}
          {contentType === "albums" && <AlbumsContent />}
          {contentType === "photos" && <PhotosContent />}
        </Suspense>
      </div>
    </div>
  );
}
