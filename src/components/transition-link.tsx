"use client";

import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { ReactNode, MouseEvent } from "react";
import { usePageTransition } from "./page-transition-provider";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export function TransitionLink({
  href,
  children,
  className,
  ...props
}: TransitionLinkProps) {
  const { startTransition, isTransitioning } = usePageTransition();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Don't transition if it's the same page, an external link, or already transitioning
    const hrefString = typeof href === "string" ? href : href.pathname || "";

    if (
      hrefString === pathname ||
      hrefString.startsWith("http") ||
      hrefString.startsWith("mailto:") ||
      hrefString.startsWith("tel:") ||
      isTransitioning
    ) {
      return;
    }

    e.preventDefault();
    startTransition(hrefString);
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
