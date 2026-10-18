import Link from "next/link";
import { CampaignShell } from "./CampaignChrome";
import { getCandidate } from "./candidates";
import { localCampaigns, type LocalPhoto } from "./localCampaigns";
import { events } from "../data";

export function candidateMetadata(slug: string) {
  const person = getCandidate(slug);
  const local = localCampaigns[slug];
  return { title: person.name + " for " + person.region + " | Alliance 2072", description: (local?.headline ?? person.headline) + " " + (local?.belief ?? person.belief) };
}

function LocalFigure({ photo }: { photo: LocalPhoto }) {
  return <figure className="c72-local-photo"><div><img src={photo.image} alt={photo.alt} style={{objectPosition:photo.position}} loading="lazy" /></div><figcaption><h3>{photo.title}</h3><p>{photo.copy}</p></figcaption></figure>;
}

export default function CandidateSite({ slug }: { slug: string }) {
  const person = getCandidate(slug);
  const local = localCampaigns[slug];
  const event = events.find(item => item.slug === person.event);
  return <CampaignShell className="c72-candidate">
    <header className="c72-candidate-heading c72-width"><h1>{person.name}</h1><p>Candidate for {person.region} MP<span>2072</span></p></header>
    <section className="c72-candidate-photos c72-width" aria-label={person.region + " and your candidate"}>
      <figure className="c72-candidate-portrait"><img src={person.image} alt={person.name} style={{objectPosition:person.portraitPosition}} fetchPriority="high" /></figure>
      <figure className="c72-candidate-landscape"><img src={person.landscape} alt={person.landscapeAlt} style={{objectPosition:person.landscapePosition}} fetchPriority="high" /><figcaption>{local?.headline ?? person.headline}</figcaption></figure>
    </section>
    {local ? <>
      <section className="c72-local-opening c72-width"><div><h2>{local.belief}</h2><p>{person.name}</p></div><LocalFigure photo={local.photos[0]} /></section>
      <section className="c72-local-pair c72-width" aria-label={"A future for " + person.region}>{local.photos.slice(1).map(photo => <LocalFigure key={photo.image} photo={photo} />)}</section>
      <section className="c72-local-meet c72-width"><div><h2>Come with a question.</h2><p>{local.invitation}</p></div><div>{event && <p>{event.day} {event.month} 2072 · {event.time}<br/>{event.place}</p>}<Link href={"/events/#" + person.event}>Meet {person.name.split(" ")[0]}</Link></div></section>
    </> : <>
      <section className="c72-candidate-belief c72-width"><h2>{person.belief}</h2><div>{person.priorities.map(([title,copy])=><div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></section>
      <nav className="c72-candidate-invitation c72-width" aria-label="Get to know the campaign"><Link href={"/events/#"+person.event}>Meet {person.name.split(" ")[0]}</Link><Link href="/platform/">The Alliance platform</Link></nav>
    </>}
  </CampaignShell>;
}
