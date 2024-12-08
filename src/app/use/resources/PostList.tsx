import { Post as PostProps } from "@/types";
import React, { use } from "react";
import Post from "./Post";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch posts");
  }
}

export default function PostList() {
  const post: PostProps[] = use(fetchPosts());
  /*
  its the same as const users = await fetchData();
  */

  return (
    <div>
      <h3>Post List</h3>
      {post.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
