"use client";

import React, { createContext, useState } from "react";
import ContextConsumer from "./ContextConsumer";
import ConditionalContextConsumer from "./ConditionalContextConsumer";
import { Button } from "@/components/ui/button";

interface ContextExampleProps {
  message: string;
}

export const ContextExample = createContext<ContextExampleProps | null>(null);

export default function PageContent() {
  const [showConditionalContext, setShowConditionalContext] = useState(false);
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
          <div>
            <Button
              onClick={() =>
                setShowConditionalContext((prevState) => !prevState)
              }
            >
              Show Conditional Context
            </Button>
            <ConditionalContextConsumer show={showConditionalContext} />
          </div>
        </ContextExample>
      </div>
    </div>
  );
}
