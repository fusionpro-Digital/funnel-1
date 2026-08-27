import Link from "next/link";

import { Container, Logo, Rule } from "@/components/site/primitives";

export function SiteHeader() {
  return (
    <header className="relative z-30 pt-7 sm:pt-9">
      <Container>
        <div className="flex justify-center">
          <Link
            href="/"
            aria-label="FusionPro home"
            className="rounded-lg transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <Logo />
          </Link>
        </div>
        <Rule className="mt-7 sm:mt-9" />
      </Container>
    </header>
  );
}
