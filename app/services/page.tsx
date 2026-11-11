import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CallToAction, Media, PageHero, SectionHeading } from "../components/site-ui";
import { serviceDetails } from "../lib/service-details";

export const metadata: Metadata = { title: "Services | GMFB", description: "Websites, digital services, lead generation, sales systems, tendering, consulting and strategy to help your business win work." };

const digitalServices = [
  { title: "Google Ads", copy: "Reach people searching for the work you do, with campaigns built around the right enquiries.", href: "/contact-us#enquiry" },
  { title: "Google Business Profile", copy: "Make it easier for local customers to find your business and get in touch.", href: "/contact-us#enquiry" },
  { title: "SEO", copy: "Strengthen your website’s visibility in search and help the right customers find your services.", href: "/contact-us#enquiry" },
];

export default function ServicesPage() {
  return (
    <main className="inner-page services-page">
      <PageHero title="Everything you need to" accent="win work." image="/figma/pages/services-hero-content.png" alt="A meeting at the GMFB office" position="center 45%" actions={[{ label: "About us", href: "/about-us" }, { label: "Contact", href: "/contact-us" }]} />
      <nav className="service-jump-links" aria-label="Explore services">{serviceDetails.map((service) => <a key={service.id} href={`#${service.id}`}>{service.name}</a>)}</nav>
      {serviceDetails.map((service, index) => (
        <div key={service.id}>
          {index === 3 && <section className="services-statement"><Link href="/contact-us">Not sure what to fix first? <span>Ask us</span></Link></section>}
          <section id={service.id} className={`page-section service-detail ${index % 2 ? "service-detail--reverse" : ""}${index === 0 ? " service-detail--websites" : ""}`}>
            <div className="page-copy"><SectionHeading>{service.prefix ? <>{service.prefix} <span>{service.accent}</span></> : service.name}</SectionHeading><p>{service.copy}</p>
              {service.accordion ? <div className="digital-services">{digitalServices.map((item) => <details key={item.title}><summary>{item.title}<span aria-hidden="true">+</span></summary><p>{item.copy}</p><Link href={item.href}>Talk to us</Link></details>)}</div> : <ul className="service-deliverables">{service.features.map((feature) => <li key={feature}>{feature}<Image src="/figma/pages/services-check.svg" alt="" width={18} height={18} /></li>)}</ul>}
              <ButtonLink href="/contact-us#enquiry">Get a quote</ButtonLink>
            </div>
            <div className="service-detail__media">
              {service.background && <Image src={service.background} alt="" fill sizes="50vw" className="object-cover" />}
              <Media src={service.image} alt={service.alt} position={service.position} />
            </div>
          </section>
        </div>
      ))}
      <CallToAction image="/figma/cta.png" />
    </main>
  );
}
