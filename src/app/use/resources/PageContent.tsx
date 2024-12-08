"use client";

import React, { Suspense } from "react";
import PostList from "./PostList";
import { ErrorBoundary } from "react-error-boundary";

export default function PageContent() {
  return (
    <div>
      <h1>Use case for - Resources</h1>
      <ErrorBoundary
        fallback={
          <div>
            <h3>Something went wrong</h3>
            <p>Failed to fetch posts</p>
          </div>
        }
      >
        <Suspense fallback={<p>Loading...</p>}>
          <PostList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}