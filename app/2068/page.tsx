import { CampaignShell, PhotoCard } from "../campaign-2072/CampaignChrome";
import { homeStories } from "../campaign-2072/content";

export default function CampaignHome() {
  return <CampaignShell className="c72-home">
    <section className="c72-intro c72-width"><h1>We back the people<br />who build Caprica.</h1></section>
    <section className="c72-photo-grid c72-width" aria-label="The Alliance in 2072">
      {homeStories.map((story, index) => <PhotoCard story={story} key={story.href} priority={index < 2} />)}
    </section>
  </CampaignShell>;
}
