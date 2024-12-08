import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

interface HomeLinkProps {
  href: string;
  title: string;
}

const HOME_LINK: HomeLinkProps[] = [
  {
    title: "useFormStatus Example",
    href: "/formStatusExample",
  },
  {
    title: "useActionState Example",
    href: "/formStateExample",
  },
  {
    title: "useDefferedValue Example",
    href: "/deferredValue",
  },
  {
    title: "useOptimisticExample",
    href: "/optimistic",
  },
  {
    title: "use",
    href: "/use",
  },
  {
    title: "useTransition Example",
    href: "/transition",
  },
];

export const metadata: Metadata = {
  title: "Home Page",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen justify-center">
      <h1 className="mb-0">Hooks Demo.</h1>
      <p className="text-center">
        This is a demo of hooks that I have created.
      </p>

      <div className="flex items-center gap-x-4">
        {HOME_LINK.map(({ href, title }, index) => (
          <Button asChild key={index}>
            <Link className="no-underline" href={href}>
              {title}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
