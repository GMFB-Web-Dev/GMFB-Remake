"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { articles } from "../lib/articles";

const filters = ["All", "Marketing", "Websites", "Sales"];

export function ArticleList() {
  const [filter, setFilter] = useState("All");
  const visible = articles.filter((article) => filter === "All" || article.filter === filter);
  return (
    <section className="page-section blog-articles" aria-labelledby="articles-title">
      <div className="blog-articles__heading"><h2 id="articles-title" className="page-heading">The stuff <span>worth reading.</span></h2><div className="article-filters" aria-label="Filter articles">{filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
      <p className="sr-only" role="status">{visible.length} articles shown</p>
      <div className="article-list">{visible.map((article) => <Link className="article-row" key={article.slug} href={`/blog/${article.slug}`}><div className="article-row__image"><Image src={article.image} alt="" fill sizes="(max-width: 700px) 100vw, 300px" className="object-cover" /></div><div><span className="article-category">{article.category}</span><h3>{article.prefix} <span>{article.accent}</span></h3><p>{article.copy}</p></div></Link>)}</div>
    </section>
  );
}
