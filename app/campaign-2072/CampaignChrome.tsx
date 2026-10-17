import Link from "next/link";

export const campaignLinks = [
  { href: "/platform/mission-statement/", label: "Mission Statement" },
  { href: "/platform/", label: "Our Platform" },
  { href: "/team/", label: "Our Candidates" },
  { href: "/events/", label: "Event" },
  { href: "/manifesto/", label: "Manifesto" },
];

export function CampaignHeader() {
  return <header className="c72-header c72-width">
    <Link className="c72-logo" href="/" aria-label="Liberal-Conservative Alliance home"><img src="/images/lca-logo.svg" alt="" width="1092" height="1436" /><strong>LCA</strong></Link>
    <nav className="c72-desktop-nav" aria-label="Main navigation">{campaignLinks.map(({ href, label }) => <Link href={href} key={href}>{label}</Link>)}</nav>
    <details className="c72-mobile-nav"><summary>Menu</summary><nav aria-label="Mobile navigation">{campaignLinks.map(({ href, label }) => <Link href={href} key={href}>{label}</Link>)}</nav></details>
  </header>;
}

export function CampaignFooter() {
  return <footer className="c72-footer c72-width">
    <Link className="c72-footer-name" href="/">Liberal-Conservative Alliance</Link>
    <nav aria-label="Footer navigation"><Link href="/platform/mission-statement/">Our beliefs</Link><Link href="/team/">Our people</Link><Link href="/events/">Come along</Link></nav>
    <small>© 2072 LCA</small>
  </footer>;
}

export function CampaignShell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`c72 ${className}`}><a className="c72-skip" href="#main-content">Skip to content</a><CampaignHeader /><main id="main-content">{children}</main><CampaignFooter /></div>;
}

export type PhotoStory = { href: string; image: string; alt: string; category: string; title: string; caption?: string; position?: string; className?: string };

export function PhotoCard({ story, priority = false }: { story: PhotoStory; priority?: boolean }) {
  return <Link className={`c72-photo-card ${story.className ?? ""}`} href={story.href}>
    <img src={story.image} alt={story.alt} style={{ objectPosition: story.position }} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} />
    <span className="c72-card-category">{story.category}</span>
    <div className="c72-card-copy"><h2>{story.title}</h2>{story.caption && <p>{story.caption}</p>}</div>
  </Link>;
}
