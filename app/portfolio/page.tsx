import type { Metadata } from "next";
import { StoryGrid } from "../components/home-interactions";
import { ProjectCarousel } from "../components/project-carousel";
import { CallToAction, Media, PageHero, SectionHeading } from "../components/site-ui";

export const metadata: Metadata = { title: "Portfolio | GMFB", description: "Explore websites, marketing, content and capability work GMFB has created for Kiwi trade and construction businesses." };

const websites = [
  { title: "Mitchell Construction", category: "Builders", image: "/figma/pages/portfolio-media-block3.png" },
  { title: "Visionary Outdoor Solutions", category: "Landscaping", image: "/figma/pages/portfolio-media-block4.png" },
  { title: "Williams Drainage", category: "Civil", image: "/figma/pages/portfolio-media-block5.png" },
];
const documents = [
  { title: "Residential capability statement", category: "Capability statement", image: "/figma/pages/portfolio-media-block7.png" },
  { title: "Allendale Electrical", category: "Capability statement", image: "/figma/pages/portfolio-media-block8.png" },
];
const reviews = [
  { quote: "GMFB cut through the noise and gave us a clear plan. The leads are better, and the whole team knows what good looks like now.", name: "Josh M.", company: "Residential builder" },
  { quote: "They understood our business quickly and turned a complicated capability story into something clients actually wanted to read.", name: "Sarah T.", company: "Commercial contractor" },
  { quote: "Practical, honest and always focused on the result. We stopped chasing every job and started winning the right ones.", name: "Mike R.", company: "Electrical services" },
];

export default function PortfolioPage() {
  return (
    <main className="inner-page portfolio-page">
      <PageHero title="What good" accent="work looks like." image="/figma/pages/portfolio-hero-content.png" alt="GMFB with a client at a construction project" />
      <section className="page-section portfolio-featured"><SectionHeading>Work that earns <span>its keep.</span></SectionHeading>
        <a className="portfolio-primary" href="https://davidreidhomes.co.nz/" target="_blank" rel="noopener noreferrer"><Media src="/figma/pages/portfolio-media-block.png" alt="A completed David Reid Homes architectural home" /><div className="portfolio-caption"><h3>David Reid Homes</h3><span>Marketing &amp; content</span></div></a>
        <article className="portfolio-project"><Media src="/figma/pages/portfolio-media-block1.png" alt="The Summit Builders website" position="center top" /><div className="page-copy"><SectionHeading>Summit <span>Builders.</span></SectionHeading><p>We built Summit Builders a clean, hard-working website that puts their projects first, makes their services easy to understand and gives potential clients a clear path to get in touch.</p><span className="project-category">Website</span><a className="gmfb-button" href="https://summitbuildersltd.co.nz/" target="_blank" rel="noopener noreferrer">View work</a></div></article>
        <article className="portfolio-project portfolio-project--reverse"><div className="page-copy"><SectionHeading>Allendale <span>Electrical.</span></SectionHeading><p>A strong capability statement that shows what they do, the work they’re equipped to take on and why they’re worth backing, giving the business a stronger way to go after bigger opportunities.</p><span className="project-category">Capability statement</span><a className="gmfb-button" href="https://allendale-electrical.co.nz/" target="_blank" rel="noopener noreferrer">View work</a></div><Media src="/figma/pages/portfolio-media-block2.png" alt="The Allendale Electrical team" /></article>
      </section>
      <section className="page-section portfolio-websites"><SectionHeading>Websites.</SectionHeading><ProjectCarousel projects={websites} name="website projects" /></section>
      <section className="page-section portfolio-marketing"><SectionHeading>Marketing <span>&amp; content.</span></SectionHeading><figure className="portfolio-video"><video controls playsInline preload="none" poster="/assets/pink-beluga-poster.png" aria-label="Pink Beluga campaign video"><source src="/assets/pink-beluga.m4v" type="video/mp4" /></video><figcaption><h3>Pink Beluga</h3><span>Campaign</span></figcaption></figure><div className="portfolio-marketing__grid"><figure><Media src="/figma/pages/portfolio-media-block6.png" alt="Aerial content of a Latham Construction project" /><figcaption><h3>Latham Construction</h3><span>Video series</span></figcaption></figure><a href="https://davidreidhomes.co.nz/" target="_blank" rel="noopener noreferrer"><Media src="/assets/david-reid-land.png" alt="David Reid Homes marketing content" position="center 65%" /><div className="portfolio-caption"><h3>David Reid Homes</h3><span>Media content</span></div></a></div></section>
      <section className="page-section portfolio-documents"><SectionHeading>Tendering <span>&amp; capability.</span></SectionHeading><ProjectCarousel projects={documents} name="capability projects" documents /></section>
      <section id="client-stories" className="page-section portfolio-stories"><SectionHeading>Their words, <span>not ours.</span></SectionHeading><StoryGrid featured /></section>
      <section className="page-section portfolio-reviews"><SectionHeading>Good work gets <span>talked about.</span></SectionHeading><div className="reviews-grid">{reviews.map((review) => <article key={review.name}><p className="review-stars" aria-label="5 out of 5 stars">★★★★★</p><blockquote>“{review.quote}”</blockquote><div><h3>{review.name}</h3><p>{review.company}</p></div></article>)}</div></section>
      <CallToAction image="/figma/cta.png" />
    </main>
  );
}
