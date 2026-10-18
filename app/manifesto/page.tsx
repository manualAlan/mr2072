import type { Metadata } from "next";
import Link from "next/link";
import { CampaignShell } from "../campaign-2072/CampaignChrome";
import { platformStories } from "../campaign-2072/content";

export const metadata: Metadata = { title: "Our manifesto | Alliance 2072", description: "Your freedom. Your future. The LCA programme for returning to government in 2072, with commitments through 2076." };

export default function Manifesto() {
  return <CampaignShell className="c72-manifesto">
    <header className="c72-page-intro c72-width">
      <p>The manifesto / 2072 to 2076</p>
      <h1>A future you can build.</h1>
      <a className="c72-manifesto-download" href="/manifesto/caprica-your-freedom-your-future-2072.pdf" target="_blank" rel="noreferrer"><span>Read the 2072 manifesto</span><small>PDF / 32 pages / Opens in a new tab</small></a>
    </header>
    <section className="c72-manifesto-opening c72-width" aria-label="Our case for a new mandate">
      <div><h2>A new mandate must be earned.</h2><p>In 2068, voters sent the LCA into opposition. Four years later, we are asking to return with a new programme: limits on state power, a fair chance to get ahead and a government you can trust.</p></div>
    </section>
    <figure className="c72-manifesto-photo c72-width"><img src="/images/2068-review/infrastructure.jpg" alt="A reservoir and dam set among green mountain slopes" fetchPriority="high" /></figure>
    <section className="c72-manifesto-copy c72-width"><h2>A different direction.</h2><div>
      <Link href="/platform/civil-liberties/"><h3>Liberty under law.</h3><p>Judicial warrants, independent intelligence oversight and an end to blanket seventy-year secrecy. The same limits will bind our own ministers.</p></Link>
      <Link href="/platform/economy/"><h3>A fair chance at work.</h3><p>Secret workplace ballots, voluntary unions and shared leave insurance. Protect workers while opening the door to new hires and new firms.</p></Link>
      <Link href="/platform/foreign-policy/"><h3>Lead CU reform.</h3><p>Keep our place in the Columbian Union. Seek transparent spending, practical market access and stronger parliamentary scrutiny.</p></Link>
      <a href="/manifesto/caprica-your-freedom-your-future-2072.pdf#page=5" target="_blank" rel="noreferrer"><h3>Start with honest government.</h3><p>Introduce liberty and integrity bills in the first 100 days. Publish an independent opening audit and the funding conditions for every expansion.</p></a>
    </div></section>
    <section className="c72-manifesto-copy c72-width"><h2>Build a life here.</h2><div>{platformStories.map(story=><Link href={"/platform/"+story.slug+"/"} key={story.slug}><h3>{story.headline}</h3><p>{story.promises[0].text}</p></Link>)}</div></section>
    <p className="c72-archive c72-width"><a href="/manifesto/caprica-freedom-to-build-2068.pdf" target="_blank" rel="noreferrer">From the archive: our 2068 manifesto (PDF)</a></p>
  </CampaignShell>;
}
