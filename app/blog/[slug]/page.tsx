import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../../lib/articles";
import { ButtonLink, CallToAction, Media } from "../../components/site-ui";

export function generateStaticParams() { return articles.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return { title: article ? `${article.title} | GMFB` : "Article not found | GMFB", description: article?.copy };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <main className="inner-page article-page"><article className="article-content"><Link className="article-back" href="/blog">Back to the blog</Link><span className="article-category">{article.category}</span><h1>{article.prefix} <span>{article.accent}</span></h1><Media src={article.image} alt={article.title} /><p>{article.copy}</p><div className="page-actions"><ButtonLink href={`/services#${article.service}`}>Explore this service</ButtonLink><ButtonLink href="/contact-us#enquiry">Talk to us</ButtonLink></div></article><CallToAction /></main>;
}
