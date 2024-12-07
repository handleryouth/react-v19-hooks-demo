import React from "react";

interface SlowItemProps {
  text: string;
}

export default function SlowItem({ text }: SlowItemProps) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {}

  return <li className="item">Search Result: {text}</li>;
}
