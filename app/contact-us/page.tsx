import type { Metadata } from "next";
import { EnquiryForm } from "../components/enquiry-form";
import { PageHero, SectionHeading } from "../components/site-ui";
import { pageCopy } from "../lib/page-copy";

export const metadata: Metadata = { title: "Contact us | GMFB", description: "Tell us about your business. Contact GMFB in Auckland for practical marketing, websites and business growth support throughout New Zealand." };

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <PageHero title="Let’s build something" accent="worth showing." image="/figma/pages/blog-media-block5.png" alt="GMFB visiting a construction site" position="center 30%" actions={[{ label: "Services", href: "/services" }, { label: "About us", href: "/about-us" }]} />
      <section id="enquiry" className="page-section contact-section" data-node-id="2004:8049">
        <div className="page-copy"><SectionHeading>Let’s talk <span>business.</span></SectionHeading><p>{pageCopy.contact.intro}</p><dl className="contact-details"><div><dt>Email</dt><dd><a href="mailto:team@gmfb.co.nz">team@gmfb.co.nz</a></dd></div><div><dt>Phone</dt><dd><a href="tel:+64212492619">021 249 2619</a></dd></div><div><dt>Based in</dt><dd>Auckland · working NZ-wide</dd></div></dl></div>
        <EnquiryForm />
      </section>
    </main>
  );
}
