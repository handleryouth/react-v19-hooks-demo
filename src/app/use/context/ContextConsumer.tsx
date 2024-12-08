"use client";

import React, { use } from "react";
import { ContextExample } from "./PageContent";

export default function ContextConsumer() {
  const context = use(ContextExample);
  return (
    <div>
      <h3>Context Consumer</h3>
      <p>{context?.message}</p>
    </div>
  );
}
