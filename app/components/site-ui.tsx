import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export function ButtonLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <Link href={href} className={`gmfb-button ${className}`}>{children}</Link>;
}

export function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`page-heading ${className}`}>{children}</h2>;
}

export function PageHero({ title, accent, image, alt, position = "center", opacity = .45, actions = [{ label: "Services", href: "/services" }, { label: "Contact", href: "/contact-us" }] }: {
  title: string; accent: string; image: string; alt: string; position?: string; opacity?: number; actions?: { label: string; href: string }[];
}) {
  return (
    <section className="page-hero">
      <Image src={image} alt={alt} fill sizes="100vw" preload className="object-cover" style={{ objectPosition: position }} />
      <div className="page-hero__shade" style={{ opacity }} />
      <div className="page-hero__content">
        <h1>{title} <span>{accent}</span></h1>
        <div className="page-actions">{actions.map((action) => <ButtonLink key={action.href} href={action.href}>{action.label}</ButtonLink>)}</div>
      </div>
    </section>
  );
}

export function Media({ src, alt, className = "", position = "center", style }: { src: string; alt: string; className?: string; position?: string; style?: CSSProperties }) {
  return <div className={`page-media ${className}`} style={style}><Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 55vw" className="object-cover" style={{ objectPosition: position }} /></div>;
}

export function CallToAction({ image = "/figma/cta.png", title = "Ready to get", accent = "things moving?", copy = "Tell us what’s happening in your business and where you want to go. We’ll help work out what needs fixing and what the next move should be.", href = "/contact-us", label = "Contact", compact = false }: {
  image?: string; title?: string; accent?: string; copy?: string; href?: string; label?: string; compact?: boolean;
}) {
  return (
    <section className={`page-cta${compact ? " page-cta--compact" : ""}`}>
      <Image src={image} alt="The GMFB team" fill sizes="100vw" className="object-cover" />
      <div className="page-cta__shade" />
      <div className="page-cta__copy"><SectionHeading>{title} <span>{accent}</span></SectionHeading><p>{copy}</p><ButtonLink href={href}>{label}</ButtonLink></div>
    </section>
  );
}
