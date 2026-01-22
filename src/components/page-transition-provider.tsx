"use client";
import { ViewTransitions } from 'next-view-transitions'

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {

  return (
    <ViewTransitions>
      
      {children}
    </ViewTransitions>
  );
}