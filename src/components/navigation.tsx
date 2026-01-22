"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);

  // Set navigation height as CSS variable
  React.useEffect(() => {
    const updateNavHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--nav-height", `${height}px`);
      }
    };

    // Set initial height
    updateNavHeight();

    // Update on resize
    window.addEventListener("resize", updateNavHeight);

    return () => {
      window.removeEventListener("resize", updateNavHeight);
    };
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header ref={headerRef} className="sticky top-0 left-0 right-0 z-50 bg-background">
        <Container>
          <nav className="flex items-center justify-between h-16 md:h-20">
            <div className="grow basis-1">
              <Link
                href="/"
                className="text-lg md:text-xl tracking-tight hover:opacity-70 transition-opacity"
              >
                Lucas Marohn
              </Link>
            </div>
            
            <div className={"text-lg md:text-xl grow transition-colors hover:text-foreground basis-1"}>Design & Code</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex grow justify-between basis-1">
              <div className="hidden md:flex items-center justify-between gap-4">
                
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg md:text-xl transition-colors text-foreground hover:underline underline-offset-8",
                      pathname === item.href
                        ? "underline"
                        : "text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                
              </div>

              <ThemeToggle />
            </div>

            

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            
          </nav>
        </Container>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
            style={{ top: "64px" }}
          >
            <Container className="py-8">
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "text-2xl  transition-colors",
                        pathname === item.href
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
