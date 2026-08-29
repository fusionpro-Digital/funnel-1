import Image from "next/image";
import Link from "next/link";
import type * as React from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/** The comps hold everything inside a ~1240px column with generous gutters. */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8", className)}
      {...props}
    />
  );
}

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("relative py-16 sm:py-20", className)}
      {...props}
    />
  );
}

/** Outlined violet pill, e.g. "WHY GROWTH BECOMES HARDER THAN IT SHOULD". */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-violet-500/45 bg-violet-500/[0.06] px-6 py-2.5",
        "text-[12px] font-medium uppercase tracking-[0.08em] text-white/90 sm:text-[16px]",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * The signature two-line heading: a bold grotesque line followed by an
 * italic serif line in the violet gradient.
 */
export function DisplayHeading({
  as: Tag = "h2",
  lead,
  accent,
  className,
  accentClassName,
}: {
  as?: "h1" | "h2" | "h3";
  lead: string;
  accent: string;
  className?: string;
  accentClassName?: string;
}) {
  return (
    <Tag
      className={cn(
        "text-balance font-sans text-[32px] font-bold leading-[1.08] tracking-[-0.025em] text-white",
        "sm:text-[46px] lg:text-[63px]",
        className,
      )}
    >
      {lead}
      <span className="block" />
      <span
        className={cn(
          "text-gradient-violet block font-display text-[30px] font-semibold italic leading-[1.14] tracking-[-0.01em]",
          "sm:text-[44px] lg:text-[59px]",
          accentClassName,
        )}
      >
        {accent}
      </span>
    </Tag>
  );
}

export function Lede({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-pretty text-[16px] leading-[1.6] text-muted-foreground sm:text-[20px]",
        className,
      )}
      {...props}
    />
  );
}

/** Filled violet pill CTA with the trailing arrow from the comps. */
export function CtaButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-3 rounded-full px-7 py-4 sm:px-9 sm:py-[18px]",
          "bg-[linear-gradient(100deg,#7c3aed_0%,#8b5cf6_50%,#7c3aed_100%)]",
          "text-[15px] font-semibold text-white sm:text-[17px]",
          "shadow-[0_10px_40px_-10px_rgba(124,58,237,0.85)]",
          "transition-[transform,box-shadow,filter] duration-300 ease-out",
          "hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_50px_-10px_rgba(139,92,246,0.95)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "active:translate-y-0",
          className,
        )}
      >
        {children}
        <ArrowRight
          aria-hidden
          className="size-[18px] transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full px-7 py-4 sm:px-9 sm:py-[18px]",
        "bg-[linear-gradient(100deg,#7c3aed_0%,#8b5cf6_50%,#7c3aed_100%)]",
        "text-[15px] font-semibold text-white sm:text-[17px]",
        "shadow-[0_10px_40px_-10px_rgba(124,58,237,0.85)]",
        "transition-[transform,box-shadow,filter] duration-300 ease-out",
        "hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_16px_50px_-10px_rgba(139,92,246,0.95)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:translate-y-0",
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-[18px] transition-transform duration-300 ease-out group-hover:translate-x-1"
      />
    </a>
  );
}

/** Full-bleed hairline that fades at both ends. */
export function Rule({ className }: { className?: string }) {
  return <div aria-hidden className={cn("rule-fade w-full", className)} />;
}

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "group/logo relative inline-flex items-center gap-3 transition-transform duration-300 ease-out hover:scale-[1.03]",
        className,
      )}
    >
      <LogoMark className="relative size-8 shrink-0 transition-transform duration-300 group-hover/logo:rotate-6 sm:size-9" />
      <span className="font-sans text-[22px] font-bold tracking-[-0.02em] text-white transition-colors duration-300 group-hover/logo:text-violet-300 sm:text-[26px]">
        FusionPro
      </span>
    </span>
  );
}

/** The official FusionPro logomark image. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/Logomark.png"
      alt="FusionPro Logomark"
      width={40}
      height={40}
      className={cn("object-contain transition-transform duration-300", className)}
      priority
    />
  );
}
