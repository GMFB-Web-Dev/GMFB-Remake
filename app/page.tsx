import Image from "next/image";
import { ServiceList, Showreel, StoryGrid } from "./components/home-interactions";
import { ButtonLink } from "./components/site-ui";

const clientLogos = [
  { src: "/figma/logo-vos.png", alt: "Visionary Outdoor Solutions", className: "w-[145px]" },
  { src: "/figma/logo-allendale.png", alt: "Allendale Electrical", className: "w-[125px]" },
  { src: "/figma/logo-mitchell.png", alt: "Mitchell Construction", className: "w-[215px]" },
  { src: "/figma/logo-pink-beluga.png", alt: "Pink Beluga Civil", className: "w-[90px]" },
  { src: "/figma/logo-david-reid.png", alt: "David Reid Homes", className: "client-logo--white w-[145px]" },
  { src: "/figma/logo-cvt.png", alt: "CVT New Zealand", className: "client-logo--white w-[155px]" },
  { src: "/figma/logo-williams.png", alt: "Williams Drainage and Civil", className: "client-logo--white w-[170px]" },
];

const projects = [
  { title: "David Reid Homes", href: "https://davidreidhomes.co.nz/", type: "Marketing & content", image: "/figma/project-david-reid.png", className: "home-project home-project--wide" },
  { title: "Summit Builders", href: "https://summitbuildersltd.co.nz/", type: "Website", image: "/figma/project-summit.png", className: "home-project" },
  { title: "Allendale Electrical", href: "https://allendale-electrical.co.nz/", type: "Tendering & capability", image: "/figma/project-allendale.png", className: "home-project" },
];

function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`home-heading ${className}`} data-reveal>{children}</h2>;
}

export default function Home() {
  return (
    <main id="home" className="w-full overflow-x-clip bg-[#0b0b0f] text-[#f7f7f5]">

      <section className="home-hero" data-node-id="2004:7371">
        <Image src="/figma/home-hero.png" alt="GMFB meeting room with a laptop displaying the GMFB brand" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="home-hero__content" data-reveal>
          <h1><span>Get more</span><span className="text-[#8700ff]">f*kn business.</span></h1>
          <div className="flex flex-wrap gap-3"><ButtonLink href="/services">Services</ButtonLink><ButtonLink href="/contact-us">Contact</ButtonLink></div>
        </div>
      </section>

      <section className="client-rail" aria-label="Selected clients" data-node-id="2061:334">
        <div className="client-rail__track">
          {clientLogos.map((logo) => <div key={logo.alt} className={`client-logo ${logo.className}`}><Image src={logo.src} alt={logo.alt} fill sizes="215px" className="object-contain" /></div>)}
        </div>
      </section>

      <section className="home-intro section-shell" data-node-id="2004:7394">
        <Heading>We’re here to <span>help you win.</span></Heading>
        <Showreel />
      </section>

      <section id="about" className="home-about section-shell" data-node-id="2004:7405">
        <div className="home-about__copy" data-reveal>
          <Heading>More than <span>marketing.</span></Heading>
          <p>Getting more work isn’t just about running ads. We look at the bigger picture, from how leads come in and get followed up, to how your business looks online, how you sell your services and how you go after bigger jobs. Then we help work out what’s getting in the way and fix it. That could mean improving your sales process, sharpening your strategy, strengthening your tenders or getting your digital marketing working harder.</p>
          <p>The goal is simple: make the business easier to grow, easier to sell and better positioned to win the right work.</p>
          <ButtonLink href="/about-us">About us</ButtonLink>
        </div>
        <figure className="home-about__media" data-reveal>
          <Image src="/figma/about.png" alt="GMFB team member at the Auckland office" fill sizes="(max-width: 900px) 100vw, 570px" className="object-cover" />
          <figcaption>Auckland · NZ</figcaption>
        </figure>
      </section>

      <section id="services" className="home-services section-shell" data-node-id="2004:7419">
        <div className="home-services__intro" data-reveal>
          <Heading>The work behind <span>winning.</span></Heading>
          <p>From bringing in the right leads to improving sales, strategy and tenders, we help strengthen the parts of your business that turn opportunities into actual work.</p>
          <ButtonLink href="/services">Services</ButtonLink>
        </div>
        <ServiceList />
      </section>

      <section className="purple-statement" data-node-id="2004:7454"><h2 data-reveal><span>Good jobs start with </span>good leads.</h2></section>

      <section id="portfolio" className="home-portfolio section-shell" data-node-id="2004:7457">
        <div className="home-portfolio__intro" data-reveal>
          <Heading>The work speaks <span>for itself.</span></Heading>
          <p>Take a look at the websites, campaigns and business work we’ve helped bring to life for Kiwi trades and construction businesses. Each project is built around what the client needs to get seen, stand out and win more of the right work.</p>
          <ButtonLink href="/portfolio">Portfolio</ButtonLink>
        </div>
        <div id="portfolio-grid" className="home-portfolio__grid">
          {projects.map((project) => (
            <a href={project.href} target="_blank" rel="noopener noreferrer" key={project.title} className={project.className} data-reveal>
              <div className="home-project__image"><Image src={project.image} alt={`${project.title} project`} fill sizes={project.className.includes("wide") ? "100vw" : "50vw"} className="object-cover" /></div>
              <div className="home-project__meta"><strong>{project.title}</strong><span>{project.type}</span></div>
            </a>
          ))}
        </div>
      </section>

      <section id="client-stories" className="home-stories section-shell" data-node-id="2004:7483">
        <div className="home-stories__intro" data-reveal>
          <Heading>Don’t take our <span>word for it.</span></Heading>
          <p>We can tell you what we do all day, but our clients can explain it better. Hear from Kiwi business owners about what changed, what worked and what it’s actually like having GMFB in their corner.</p>
        </div>
        <StoryGrid />
        <ButtonLink href="/portfolio#client-stories">Client stories</ButtonLink>
      </section>

      <section id="contact" className="home-cta" data-node-id="2004:7513">
        <Image src="/figma/cta.png" alt="The GMFB team in their Auckland office" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="home-cta__content" data-reveal>
          <Heading>Ready to get <span>things moving?</span></Heading>
          <p>Tell us what’s happening in your business and where you want to go. We’ll help work out what needs fixing and what the next move should be.</p>
          <ButtonLink href="/contact-us">Contact</ButtonLink>
        </div>
      </section>

    </main>
  );
}
