"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "./brand-mark";
import { navigation as navItems, type NavItem } from "../lib/navigation";

export function Header() {
  const pathname = usePathname();
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
    const desktop = window.matchMedia("(min-width: 1101px)");
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
    const current = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
    if (!item.children) return <Link key={item.label} className={mobile ? "mobile-nav__link" : "nav-link"} href={item.href} aria-current={current ? "page" : undefined} onClick={closeNavigation}>{label}</Link>;

    const expanded = dropdown === item.label;
    const panelId = `${mobile ? "mobile" : "desktop"}-${item.label.toLowerCase().replaceAll(" ", "-")}-dropdown`;
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
        <div className="nav-dropdown__label">
        <Link href={item.href} className={mobile ? "mobile-nav__link" : "nav-link"} aria-current={current ? "page" : undefined} onClick={closeNavigation}>{label}</Link>
        <button
          type="button"
          className="nav-dropdown__trigger"
          aria-label={`${item.label} submenu`}
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
          <svg className="nav-dropdown__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        </div>
        <div className="nav-dropdown__panel" id={panelId} hidden={!expanded}>
          {item.children.map((child) => <Link key={child.href} href={child.href} onClick={closeNavigation}>{child.label}</Link>)}
        </div>
      </div>
    );
  };

  return (
    <header ref={headerRef} className={`home-header${scrolled ? " home-header--scrolled" : ""}`}>
      <Link href="/" className="relative z-50" onClick={closeNavigation}><BrandMark /></Link>
      <nav className="home-header__desktop" aria-label="Primary navigation">
        {navItems.map((item, index) => renderItem(item, index))}
        <Link className="gmfb-button" href="/contact-us#enquiry" onClick={closeNavigation}>Book a call</Link>
      </nav>
      <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => { setOpen((value) => !value); setDropdown(null); }}>
        <span className={open ? "rotate-45 translate-y-[7px]" : ""} />
        <span className={open ? "opacity-0" : ""} />
        <span className={open ? "-rotate-45 -translate-y-[7px]" : ""} />
      </button>
      <div id="mobile-menu" className={`mobile-nav ${open ? "mobile-nav--open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => renderItem(item, index, true))}
        </nav>
        <Link className="gmfb-button" href="/contact-us#enquiry" onClick={closeNavigation}>Book a call</Link>
      </div>
    </header>
  );
}
