import type { Metadata } from "next";
import Link from "next/link";
import { CampaignShell } from "../campaign-2072/CampaignChrome";
import { platformStories } from "../campaign-2072/content";

export const metadata: Metadata = { title: "Our manifesto | Alliance 2072", description: "The Alliance programme for 2072 to 2076." };

export default function Manifesto() {
  return <CampaignShell className="c72-manifesto">
    <header className="c72-page-intro c72-width"><p>2072 to 2076</p><h1>A future you can build.</h1></header>
    <figure className="c72-manifesto-photo c72-width"><img src="/images/2068-review/infrastructure.jpg" alt="A reservoir and dam set among green mountain slopes" fetchPriority="high" /></figure>
    <section className="c72-manifesto-copy c72-width"><h2>Our word to Caprica.</h2><div>{platformStories.map(story=><Link href={"/platform/"+story.slug+"/"} key={story.slug}><h3>{story.headline}</h3><p>{story.promises[0].text}</p></Link>)}</div></section>
    <p className="c72-archive c72-width"><a href="/manifesto/caprica-freedom-to-build-2068.pdf" target="_blank" rel="noreferrer">From the archive: our 2068 manifesto (PDF)</a></p>
  </CampaignShell>;
}
