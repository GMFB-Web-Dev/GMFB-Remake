"use client";

import Image from "next/image";
import { useState } from "react";

type Project = { title: string; category: string; image: string };

export function ProjectCarousel({ projects, name, documents = false }: { projects: Project[]; name: string; documents?: boolean }) {
  const [active, setActive] = useState(0);
  const ordered = projects.map((_, index) => projects[(active + index) % projects.length]);
  return (
    <div className={`project-carousel${documents ? " project-carousel--documents" : ""}`} role="region" aria-roledescription="carousel" aria-label={name}>
      <div className="project-carousel__track" aria-live="polite">{ordered.map((project) => <figure key={project.title}><div className="project-carousel__image"><Image src={project.image} alt={project.title} fill sizes={documents ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 100vw, 33vw"} className="object-contain" /></div><figcaption><h3>{project.title}</h3><span>{project.category}</span></figcaption></figure>)}</div>
      <div className="project-carousel__controls"><div className="project-carousel__dots">{projects.map((project, index) => <button key={project.title} type="button" aria-label={`Show ${project.title} first`} aria-pressed={active === index} onClick={() => setActive(index)} />)}</div><div className="project-carousel__arrows"><button type="button" aria-label={`Previous ${name}`} onClick={() => setActive((active + projects.length - 1) % projects.length)}>‹</button><button type="button" aria-label={`Next ${name}`} onClick={() => setActive((active + 1) % projects.length)}>›</button></div></div>
    </div>
  );
}
