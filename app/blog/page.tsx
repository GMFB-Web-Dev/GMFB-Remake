import type { Metadata } from "next";
import { ArticleList } from "../components/article-list";
import { ButtonLink, CallToAction, Media, PageHero, SectionHeading } from "../components/site-ui";
import { pageCopy } from "../lib/page-copy";

export const metadata: Metadata = { title: "Blog | GMFB", description: "Practical advice on websites, marketing, sales and business growth for Kiwi trade and construction businesses." };

export default function BlogPage() {
  return (
    <main className="inner-page blog-page">
      <PageHero title="Advice you can" accent="actually use." image="/figma/pages/blog-hero-content.png" alt="GMFB preparing client work" position="center 47%" opacity={.5} />
      <section className="page-section blog-featured"><div className="blog-featured__media"><Media src="/figma/home-hero.png" alt="A GMFB laptop and marketing plan at the office" /><span>Featured</span></div><div className="page-copy"><SectionHeading>Start with a plan that <span>makes sense.</span></SectionHeading><p>{pageCopy.blog.featured}</p><ButtonLink href="/contact-us#enquiry">Book a call</ButtonLink></div></section>
      <ArticleList />
      <CallToAction image="/figma/cta.png" />
    </main>
  );
}
