"use client";

import React, { ReactElement, use } from "react";
import SlowItem from "./SlowItem";
import { Comment } from "@/types";

interface SlowListProps {
  text: string;
}

const fetchComment = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments",
    {
      next: {
        // revalidate after 5 minutes
        revalidate: 300,
      },
    }
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch comments");
  }
};

export default function SlowList({ text }: SlowListProps) {
  /*
  the value of text is changed. but it is just not returned the latest rendered component
  more like useRef
  */

  /*
  use will be called when text is changed
  */

  const comments: Comment[] = use(fetchComment());

  const items: ReactElement[] = [];

  console.log("text is changed", text);

  /*
  useEffect called in loop?
  */
  // useEffect(() => {
  //   console.log("re-rendered again");
  // }, [text]);

  for (let i = 0; i < comments.length; i++) {
    items.push(<SlowItem key={i} text={comments[i].body} />);
  }
  return (
    <div>
      <small>
        Pay attention to the search result rendered when you finished typing.
      </small>
      <h3>Search Results: {text}</h3>
      <div>
        <ul className="items">{items}</ul>
      </div>
    </div>
  );
}
