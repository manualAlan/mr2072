import { candidateCampaigns } from "../campaign-2072/candidates";
import type { Metadata } from "next";
import Link from "next/link";
import { CampaignShell } from "../campaign-2072/CampaignChrome";

export const metadata: Metadata = { title: "Our candidates | Alliance 2072", description: "The people standing for the Alliance across Caprica." };

export default function Team() {
  return <CampaignShell className="c72-team">
    <section className="c72-page-intro c72-width"><h1>Our people.</h1><p>Standing for Caprica.</p></section>
    <section className="c72-portraits c72-width" aria-label="Alliance candidates">
      {candidateCampaigns.map(candidate => <Link className="c72-person" href={"/" + candidate.slug + "/"} id={candidate.slug} key={candidate.name} aria-label={"Visit " + candidate.name + "’s campaign website"}>
        <figure><img src={candidate.image} alt={candidate.name} style={{objectPosition:candidate.portraitPosition}} loading="lazy" /></figure>
        <h2>{candidate.name}</h2><p>{candidate.region}</p>
      </Link>)}
    </section>
  </CampaignShell>;
}
