import React, { use } from "react";
import { ContextExample } from "./PageContent";

interface ConditionalContextConsumerProps {
  show: boolean;
}

export default function ConditionalContextConsumer({
  show,
}: ConditionalContextConsumerProps) {
  if (!show) {
    return null;
  } else {
    const context = use(ContextExample);
    return (
      <div>
        <h3>use context like conditional context</h3>
        <p>{context?.message}</p>
      </div>
    );
  }
}
