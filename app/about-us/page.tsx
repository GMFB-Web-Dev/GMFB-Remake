import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, CallToAction, Media, PageHero, SectionHeading } from "../components/site-ui";
import { pageCopy } from "../lib/page-copy";

export const metadata: Metadata = { title: "About us | GMFB", description: "Meet Andrew and Steven, the team behind GMFB and practical growth for Kiwi trade and construction businesses." };

export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <PageHero title="About" accent="us" image="/figma/cta.png" alt="The GMFB team at their Auckland office" opacity={.35} />
      <section id="our-story" className="page-section about-story" data-node-id="2004:7584">
        <figure className="about-story__photo"><Media src="/figma/pages/about-media-block.png" alt="Steven and Andrew, the founders of GMFB" position="center bottom" /><figcaption>Steven &amp; Andrew</figcaption></figure>
        <div><SectionHeading>The story <span>behind GMFB.</span></SectionHeading><div className="founder-profiles"><article><h3>Andrew</h3><p>{pageCopy.about.andrew}</p></article><article><h3>Steven</h3><p>{pageCopy.about.steven}</p></article></div></div>
      </section>
      <section className="about-mission" data-node-id="2004:7560">
        <Image src="/figma/pages/about-about-mission.png" alt="A trade and construction work site" fill sizes="100vw" className="object-cover" />
        <div className="about-mission__shade" /><SectionHeading>Built for trade &amp; <span>construction.</span></SectionHeading><div><p>{pageCopy.about.mission}</p><ButtonLink href="/contact-us">Get in touch</ButtonLink></div>
      </section>
      <section id="why-gmfb" className="page-section about-why" data-node-id="2004:7596">
        <div className="page-copy"><SectionHeading>What makes <span>us different.</span></SectionHeading><div className="about-reasons">{pageCopy.about.reasons.map((reason) => <article key={reason.title}><span className="reason-icon"><Image src={reason.icon} alt="" width={18} height={18} /></span><div><h3>{reason.title}</h3><p>{reason.copy}</p></div></article>)}</div><ButtonLink href="/contact-us#enquiry">Book a call</ButtonLink></div>
        <Media src="/figma/pages/about-media-block1.png" alt="The GMFB team with clients at a business event" position="right center" />
      </section>
      <CallToAction image="/figma/pages/about-homepage-cta.png" />
    </main>
  );
}
