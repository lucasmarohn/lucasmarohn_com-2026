"use client";

import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";
import { useTransitionRouter } from "next-view-transitions";
interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

const slideInOut = () => {
  document.documentElement.animate([
      {
        opacity: 1,
        transform: "translateY(0)"
      },
      {
        // opacity: 0.2,
        // transform: "translateX(-35%)",
      }
    ], {
      duration: 1500,
      easing: "cubic-bezier(0.87, 0, 0.13, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)"
    })

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }
      ], {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)"
      }
    )
}

export function TransitionLink({
  href,
  children,
  className,
  ...props
}: TransitionLinkProps) {

  return <Link href={href} className={className} {...props}>{children}</Link>
}
