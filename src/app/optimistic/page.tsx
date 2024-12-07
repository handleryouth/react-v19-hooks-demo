import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Optimistic Example",
};

/*
    useOptimistic is a React Hook that lets you show a different state while an async action is underway.
    This state is called the “optimistic” state because it is usually used to immediately present the user with the result of performing an action, even though the action actually takes time to complete.
*/

export default function OptimisticExample() {
  return <PageContent />;
}
