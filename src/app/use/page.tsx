import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import React, { ReactNode } from "react";

interface UseCardProps {
  title: ReactNode;
  cardDescription: ReactNode;
  url: string;
}

const USE_CARD: UseCardProps[] = [
  {
    cardDescription: (
      <p>
        You can also read context with use, allowing you to read Context
        conditionally such as after early returns: The use API can only be
        called in render, similar to hooks. Unlike hooks, use can be called
        conditionally. In the future we plan to support more ways to consume
        resources in render with use.
      </p>
    ),
    title: <Button variant="link">For Context</Button>,
    url: "/use/context",
  },
  {
    cardDescription: (
      <p>
        you can read a promise with use, and React will Suspend until the
        promise resolves
      </p>
    ),
    title: <Button variant="link">For Resources</Button>,
    url: "/use/resources",
  },
];

export default function UseDemonstration() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center">
      <h1 className="text-center">Demo of &apos;use&apos; hooks</h1>
      {USE_CARD.map(({ title, url, cardDescription }, index) => (
        <HoverCard key={index}>
          <HoverCardTrigger href={url}>{title}</HoverCardTrigger>
          <HoverCardContent>{cardDescription}</HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
