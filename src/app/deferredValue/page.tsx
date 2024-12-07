import type { Metadata } from "next";
import PageContent from "./PageContent";
/*
    useDefferedValue is a hook that allows you to defer the value of a variable
    - Showing stale content while fresh content is loading
    - Deferring re-rendering for a part of the UI:
    - the value will be changed, but it will not be rerendered until the user has finished typing

    from the example below, the value of the input will be rerendered first and then the slowlist after user finished typing
*/

export const metadata: Metadata = {
  title: "Deferred Value",
};

export default function DeferredValue() {
  return <PageContent />;
}
