import type { Metadata } from "next";
import { EnquiryForm } from "../components/enquiry-form";
import { ButtonLink, CallToAction, Media, PageHero, SectionHeading } from "../components/site-ui";
import { pageCopy } from "../lib/page-copy";

export const metadata: Metadata = { title: "Careers | GMFB", description: "Good people. Good work. Big energy. Build practical skills, take ownership and grow your career with the GMFB team." };

export default function CareersPage() {
  return (
    <main className="inner-page careers-page">
      <PageHero title="Good people. Good work." accent="Big energy." image="/figma/pages/blog-media-block2.png" alt="A collection of marketing projects and client work by GMFB" opacity={.48} />
      <section id="apply" className="page-section careers-application" data-node-id="2052:859"><div className="page-copy"><SectionHeading>Join the team. <span>Build what’s next.</span></SectionHeading><p>{pageCopy.careers.intro}</p></div><EnquiryForm application /></section>
      <section className="page-section careers-growth" data-node-id="2052:898"><div className="page-copy"><SectionHeading>Room to learn. <span>Room to step up.</span></SectionHeading><p>{pageCopy.careers.growth}</p><ButtonLink href="#apply">Apply now</ButtonLink></div><Media src="/figma/pages/careers-team-image-placeholder.png" alt="The GMFB team collaborating at the office" position="center 37%" /></section>
      <section className="page-section careers-values" data-node-id="2052:907"><SectionHeading>How we <span>show up.</span></SectionHeading><div className="values-grid">{pageCopy.careers.values.map((value) => <article key={value.title}><h3>{value.title}</h3><p>{value.copy}</p></article>)}</div></section>
      <CallToAction image="/figma/cta.png" title="Think you’d" accent="fit in here?" copy={pageCopy.careers.cta} href="#apply" label="Apply now" compact />
    </main>
  );
}
