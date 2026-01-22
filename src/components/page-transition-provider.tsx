"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

interface PageTransitionContextType {
  isTransitioning: boolean;
  startTransition: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType | null>(
  null
);

export function usePageTransition() {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error(
      "usePageTransition must be used within a PageTransitionProvider"
    );
  }
  return context;
}

interface PageTransitionProviderProps {
  children: ReactNode;
}

export function PageTransitionProvider({
  children,
}: PageTransitionProviderProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const startTransition = useCallback(
    (href: string) => {
      if (isTransitioning) return;

      // Check if View Transitions API is supported
      if (!document.startViewTransition) {
        // Fallback: just navigate
        router.push(href);
        return;
      }

      setIsTransitioning(true);

      const transition = document.startViewTransition(async () => {
        router.push(href);
        // Wait for the navigation to complete
        await new Promise((resolve) => setTimeout(resolve, 100));
      });

      transition.finished.then(() => {
        setIsTransitioning(false);
      });
    },
    [isTransitioning, router]
  );

  return (
    <PageTransitionContext.Provider value={{ isTransitioning, startTransition }}>
      {children}
    </PageTransitionContext.Provider>
  );
}
