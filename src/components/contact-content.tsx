"use client";

import { Navigation, Footer, PageHeader } from "@/components";


export function ContactContent() {
  return (
    <>
      <Navigation />

      <main>
        <PageHeader title="Get in touch" className="items-start min-h-[50vh]" align="start" />
      </main>

      <Footer />
    </>
  );
}
