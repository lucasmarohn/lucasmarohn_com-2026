import Link from "next/link";
import { Container } from "./container";
import Image from "next/image";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/namedlucas" },
  { label: "LinkedIn", href: "https://linkedin.com/in/lucasmarohn" },
];

export function Footer() {

  return (
    <footer>
      <Container className="border-t border-border pt-12 md:pt-16 min-h-[50vh] flex flex-col pb-12">
       <div className="flex flex-col md:flex-row gap-8 md:justify-between font-bold text-2xl md:text-[40px] leading-tight grow">
        <div className="flex flex-col">
          <a className="underline hover:no-underline" href="mailto:lucas@lucasmarohn.com">lucas@lucasmarohn.com</a>
          <div>→ Portland, OR</div>
        </div>

        <div className="flex flex-col">
          {socialLinks.map(link => <Link className="underline hover:no-underline" key={link.href} href={link.href}>{link.label}</Link>)}
          
        </div>

        <a className="flex flex-col underline hover:no-underline" href="https://calendly.com/lucasmarohn/websprint">
          Work with me
        </a>
       </div>

      <div className="flex flex-col">
        <div className="font-inter text-[11vw] md:text-[12vw] font-[600] tracking-tighter grow items-end flex md:pt-24">
          lucasmarohn.com
        </div>
        <div className="grid md:grid-cols-2 items-center">
          <div className="">Copyright 2026 © Lucas Marohn LLC</div>
          <div className="size-12 relative ml-auto"><Image src="/images/signature-black.png" className="dark:invert object-contain" alt="" fill /></div>
          {/* <a className="underline hover:no-underline">Terms & Conditions</a> */}
        </div>
       </div>
      </Container>
    </footer>
  );
}
