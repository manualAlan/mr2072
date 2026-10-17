import Link from "next/link";
import { CampaignShell } from "../campaign-2072/CampaignChrome";
import { platformStories } from "../campaign-2072/content";

export default function BeliefPage({ slug }: { slug: string }) {
  const story = platformStories.find(item => item.slug === slug)!;
  const next = platformStories[(platformStories.indexOf(story) + 1) % platformStories.length];
  return <CampaignShell className="c72-policy">
    <header className="c72-page-intro c72-width"><p>{story.title}</p><h1>{story.headline}</h1></header>
    <figure className="c72-policy-hero c72-width"><img src={story.image} alt={story.alt} style={{objectPosition:story.position}} fetchPriority="high" /></figure>
    <section className="c72-policy-copy c72-width">
      <h2>{story.introduction}</h2>
      <div className="c72-promises">{story.promises.map(promise => <div key={promise.title}><h3>{promise.title}</h3><p>{promise.text}</p></div>)}</div>
    </section>
    <figure className="c72-policy-feature c72-width"><img src={story.secondImage} alt={story.secondAlt} loading="lazy" /><figcaption>{story.belief}</figcaption></figure>
    <nav className="c72-policy-bottom c72-width" aria-label="Explore the platform"><Link href="/platform/">Our platform</Link><Link href={"/platform/" + next.slug + "/"}>{next.title}</Link></nav>
  </CampaignShell>;
}
