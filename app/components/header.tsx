"use client";

import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./brand-mark";
import { services } from "../lib/services";

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about", children: [
    { label: "About GMFB", href: "#about" },
    { label: "Client stories", href: "#client-stories" },
  ] },
  { label: "Services", href: "#services", children: [
    { label: "All services", href: "#services" },
    ...services.map((service) => ({ label: service.title, href: `#${service.id}` })),
  ] },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#client-stories" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const hoverOpened = useRef<string | null>(null);

  const closeNavigation = () => {
    setOpen(false);
    setDropdown(null);
  };

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 16);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setDropdown(null);
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const resetNavigation = () => {
      setOpen(false);
      setDropdown(null);
    };
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", resetNavigation);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", resetNavigation);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setDropdown(null);
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [open]);

  const renderItem = (item: NavItem, index: number, mobile = false) => {
    const label = mobile ? <span className="mobile-nav__label"><span className="mobile-nav__number">0{index + 1}</span>{item.label}</span> : item.label;
    if (!item.children) return <a key={item.label} className={mobile ? "mobile-nav__link" : "nav-link"} href={item.href} onClick={closeNavigation}>{label}</a>;

    const expanded = dropdown === item.label;
    const panelId = `${mobile ? "mobile" : "desktop"}-${item.label.toLowerCase()}-dropdown`;
    return (
      <div
        key={item.label}
        className={`nav-dropdown${expanded ? " nav-dropdown--open" : ""}`}
        onPointerEnter={(event) => {
          if (!mobile && event.pointerType === "mouse" && dropdown !== item.label) {
            hoverOpened.current = item.label;
            setDropdown(item.label);
          }
        }}
        onPointerLeave={(event) => {
          if (!mobile) {
            hoverOpened.current = null;
            if (!event.currentTarget.contains(document.activeElement)) setDropdown(null);
          }
        }}
        onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setDropdown(null); }}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.stopPropagation();
            setDropdown(null);
            event.currentTarget.querySelector("button")?.focus();
          }
        }}
      >
        <button
          type="button"
          className="nav-dropdown__trigger"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={(event) => {
            if (!mobile && event.detail > 0 && hoverOpened.current === item.label) {
              hoverOpened.current = null;
              setDropdown(item.label);
            } else {
              setDropdown(expanded ? null : item.label);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setDropdown(item.label);
              requestAnimationFrame(() => document.getElementById(panelId)?.querySelector("a")?.focus());
            }
          }}
        >
          {label}<svg className="nav-dropdown__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div className="nav-dropdown__panel" id={panelId} hidden={!expanded}>
          {item.children.map((child) => <a key={child.href} href={child.href} onClick={closeNavigation}>{child.label}<span aria-hidden="true">↗</span></a>)}
        </div>
      </div>
    );
  };

  return (
    <header ref={headerRef} className={`home-header${scrolled ? " home-header--scrolled" : ""}`}>
      <a href="#home" className="relative z-50" onClick={closeNavigation}><BrandMark /></a>
      <nav className="home-header__desktop" aria-label="Primary navigation">
        {navItems.map((item, index) => renderItem(item, index))}
        <a className="gmfb-button" href="mailto:support@gmfb.co.nz?subject=Book%20a%20call">Book a call <span aria-hidden="true">↗</span></a>
      </nav>
      <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => { setOpen((value) => !value); setDropdown(null); }}>
        <span className={open ? "rotate-45 translate-y-[7px]" : ""} />
        <span className={open ? "opacity-0" : ""} />
        <span className={open ? "-rotate-45 -translate-y-[7px]" : ""} />
      </button>
      <div className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => renderItem(item, index, true))}
        </nav>
        <a className="gmfb-button" href="mailto:support@gmfb.co.nz?subject=Book%20a%20call" onClick={closeNavigation}>Book a call <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
