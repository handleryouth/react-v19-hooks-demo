"use client";

import { Input } from "@/components/ui/input";
import React, { Suspense, useDeferredValue, useMemo, useState } from "react";
import SlowList from "./SlowList";

export default function PageContent() {
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);

  const memoizedSlowList = useMemo(
    () => (
      <Suspense fallback={<p>Loading...</p>}>
        <SlowList text={deferredValue} />
      </Suspense>
    ),

    [deferredValue]
  );

  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      {memoizedSlowList}
    </div>
  );
}
