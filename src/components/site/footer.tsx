import Link from "next/link";

import { Container, Logo, Rule } from "@/components/site/primitives";
import { footerLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative pb-14 sm:pb-16">
      <Container>
        <Rule />

        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            href="/"
            aria-label="FusionPro home"
            className="rounded-lg transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <Logo />
          </Link>
        </div>

        <nav
          aria-label="Legal"
          className="mt-8 flex flex-col items-center justify-between gap-4 sm:mt-10 sm:flex-row"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-white underline underline-offset-4 transition-colors hover:text-violet-300 sm:text-[15px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
