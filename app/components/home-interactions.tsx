"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { services } from "../lib/services";

const stories = [
  { name: "Marc", company: "Visionary Outdoor Solutions", image: "/figma/testimonial-marc.png" },
  { name: "Craig", company: "Allendale Electrical", image: "/figma/testimonial-craig.png" },
  { name: "Kane", company: "Latham Construction", image: "/figma/testimonial-kane.png" },
];

export function ScrollReveal() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6%" });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return null;
}

export function ServiceList() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div id="services-list" className="service-list" data-reveal>
      {services.map((service, index) => (
        <button
          key={service.number}
          id={service.id}
          type="button"
          aria-expanded={active === index}
          className={`service-row ${active === index ? "service-row--active" : ""}`}
          onClick={() => setActive(active === index ? null : index)}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(index)}
          onBlur={() => setActive(null)}
        >
          <span className="service-row__number">{service.number}</span>
          <span className="service-row__body"><strong>{service.title}</strong><span>{service.copy}</span></span>
          <span className="service-row__arrow" aria-hidden="true">→</span>
        </button>
      ))}
    </div>
  );
}

function PlayIcon() {
  return <span className="media-play" aria-hidden="true"><Image src="/figma/play.svg" alt="" width={24} height={24} /></span>;
}

function MediaDialog({ title, image, onClose }: { title: string; image: string; onClose: () => void }) {
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  return (
    <div className="media-dialog" role="dialog" aria-modal="true" aria-label={title} onMouseDown={onClose}>
      <div className="media-dialog__panel" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="media-dialog__close" onClick={onClose} aria-label="Close">×</button>
        <div className="relative aspect-video"><Image src={image} alt="" fill sizes="90vw" className="object-cover" /></div>
        <div className="media-dialog__copy"><span>GMFB story</span><h3>{title}</h3><p>Full case study video coming soon. Talk to us about what a practical growth system could look like for your business.</p><a className="gmfb-button" href="mailto:support@gmfb.co.nz?subject=Tell%20me%20more">Tell me more <span aria-hidden="true">↗</span></a></div>
      </div>
    </div>
  );
}

export function Showreel() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="showreel" onClick={() => setOpen(true)} data-reveal aria-label="Open GMFB showreel">
        <Image src="/figma/showreel.png" alt="GMFB showreel preview" fill sizes="100vw" className="object-cover" />
        <span className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/20" />
        <PlayIcon />
      </button>
      {open && <MediaDialog title="We’re here to help you win" image="/figma/showreel.png" onClose={() => setOpen(false)} />}
    </>
  );
}

export function StoryGrid() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <>
      <div className="story-grid" data-reveal>
        {stories.map((story, index) => (
          <button key={story.name} type="button" className="story-card" onClick={() => setSelected(index)} aria-label={`Open ${story.name}'s story`}>
            <span className="story-card__image"><Image src={story.image} alt={`${story.name} from ${story.company}`} fill sizes="(max-width: 800px) 100vw, 33vw" className="object-cover" /><span className="absolute inset-0 bg-black/35" /><PlayIcon /></span>
            <span className="story-card__meta"><strong>{story.name}</strong><span>{story.company}</span></span>
          </button>
        ))}
      </div>
      {selected !== null && <MediaDialog title={`${stories[selected].name} — ${stories[selected].company}`} image={stories[selected].image} onClose={() => setSelected(null)} />}
    </>
  );
}
