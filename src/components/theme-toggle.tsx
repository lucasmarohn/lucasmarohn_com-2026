"use client";

import * as React from "react";
import { Dot, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-9 h-9 flex items-center justify-center" aria-label="Toggle theme">
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-0 size-8 flex items-center justify-end rounded-full transition-colors"
      aria-label="Toggle theme"
    >
      <div className="size-3 bg-foreground rounded-full"></div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
