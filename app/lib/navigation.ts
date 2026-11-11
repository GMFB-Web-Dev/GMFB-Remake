import { services } from "./services";

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us", children: [
    { label: "Our story", href: "/about-us#our-story" },
    { label: "Why GMFB", href: "/about-us#why-gmfb" },
    { label: "Careers", href: "/careers" },
  ] },
  { label: "Services", href: "/services", children: [
    { label: "All services", href: "/services" },
    ...services.map((service) => ({ label: service.title, href: `/services#${service.id}` })),
  ] },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact us", href: "/contact-us" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];
