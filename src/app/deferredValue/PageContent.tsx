"use client";

import { Input } from "@/components/ui/input";
import React, { useDeferredValue, useMemo, useState } from "react";
import SlowList from "./SlowList";

export default function PageContent() {
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);

  const memoizedSlowList = useMemo(
    () => <SlowList text={deferredValue} />,
    [deferredValue]
  );

  return (
    <div>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      {memoizedSlowList}
    </div>
  );
}
