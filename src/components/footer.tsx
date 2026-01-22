import Link from "next/link";
import { Container } from "./container";

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

        <a className="flex flex-col underline hover:no-underline">
          Work with me
        </a>
       </div>

      <div className="flex flex-col">
        <div className="font-inter text-[11vw] md:text-[12vw] font-[600] tracking-tighter grow items-end flex md:pt-24">
          lucasmarohn.com
        </div>
        <div className="grid md:grid-cols-2">
          <div className="">Copyright 2026 © Lucas Marohn LLC</div>
          <a className="underline hover:no-underline">Terms & Conditions</a>
        </div>
       </div>
      </Container>
    </footer>
  );
}
