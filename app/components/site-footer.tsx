import Link from "next/link";
import { BrandMark } from "./brand-mark";
import { navigation } from "../lib/navigation";

export function SiteFooter() {
  return (
    <footer className="home-footer" data-node-id="2021:344">
      <div className="home-footer__top">
        <Link href="/" aria-label="GMFB home"><BrandMark large /></Link>
        <div className="home-footer__links">
          <div><h3>Explore</h3><nav aria-label="Footer navigation">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div>
          <div><h3>Get in touch</h3><a href="mailto:support@gmfb.co.nz">support@gmfb.co.nz</a><p>Auckland, New Zealand</p></div>
        </div>
      </div>
      <div className="home-footer__bottom"><p>© 2026 GMFB. Built for better business.</p><p>Privacy&nbsp;&nbsp;·&nbsp;&nbsp;Terms&nbsp;&nbsp;·&nbsp;&nbsp;Facebook&nbsp;&nbsp;·&nbsp;&nbsp;Instagram&nbsp;&nbsp;·&nbsp;&nbsp;LinkedIn</p></div>
    </footer>
  );
}
