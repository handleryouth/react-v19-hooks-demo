import React, { ReactElement } from "react";
import SlowItem from "./SlowItem";

interface SlowListProps {
  text: string;
}

export default function SlowList({ text }: SlowListProps) {
  const items: ReactElement[] = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
}
