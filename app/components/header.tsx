"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#client-stories" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <header className="home-header">
      <a href="#home" className="relative z-50" onClick={() => setOpen(false)}><BrandMark /></a>
      <nav className="home-header__desktop" aria-label="Primary navigation">
        {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
        <a className="gmfb-button" href="mailto:support@gmfb.co.nz?subject=Book%20a%20call">Book a call <span aria-hidden="true">↗</span></a>
      </nav>
      <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <span className={open ? "rotate-45 translate-y-[7px]" : ""} />
        <span className={open ? "opacity-0" : ""} />
        <span className={open ? "-rotate-45 -translate-y-[7px]" : ""} />
      </button>
      <div className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</a>)}
        </nav>
        <a className="gmfb-button" href="mailto:support@gmfb.co.nz?subject=Book%20a%20call" onClick={() => setOpen(false)}>Book a call <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
