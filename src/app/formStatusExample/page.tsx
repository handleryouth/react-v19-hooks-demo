import type { Metadata } from "next";
import PageContent from "./PageContent";

export const metadata: Metadata = {
  title: "Form Status Example",
};

export default function FormStatusExample() {
  return <PageContent />;
}
