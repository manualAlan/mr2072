import type { Metadata } from "next";
import { CampaignShell, PhotoCard } from "../campaign-2072/CampaignChrome";
import { platformStories } from "../campaign-2072/content";

export const metadata: Metadata = { title: "Our platform | Alliance 2072", description: "More freedom. More opportunity. The Alliance platform for 2072." };

export default function Platform() {
  return <CampaignShell className="c72-platform">
    <header className="c72-page-intro c72-width"><h1>Freedom to build.</h1><p>Our platform for 2072.</p></header>
    <section className="c72-platform-grid c72-width" aria-label="Our platform">{platformStories.map((story,index) => <PhotoCard key={story.slug} priority={index<2} story={{href:"/platform/"+story.slug+"/",image:story.image,alt:story.alt,position:story.position,category:story.title,title:story.headline}} />)}</section>
  </CampaignShell>;
}
