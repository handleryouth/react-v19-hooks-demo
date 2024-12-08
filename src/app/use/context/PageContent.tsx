"use client";

import React, { createContext } from "react";
import ContextConsumer from "./ContextConsumer";

interface ContextExampleProps {
  message: string;
}

export const ContextExample = createContext<ContextExampleProps | null>(null);

export default function PageContent() {
  return (
    <div className="flex min-w-screen min-h-screen flex-col justify-center items-center text-center">
      <h1 className="mb-0">Use case for - Context</h1>
      <div>
        <h3>Below is component that used context:</h3>
        <ContextExample
          value={{
            message: "Hello from Context",
          }}
        >
          <ContextConsumer />
        </ContextExample>
      </div>
    </div>
  );
}
