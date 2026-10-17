import type { Metadata } from "next";
import { CampaignShell } from "../../campaign-2072/CampaignChrome";

export const metadata: Metadata = { title: "An open letter to Capricans | Alliance 2072", description: "Robert Bluespan on the country we can build together." };

export default function MissionStatementPage() {
  return <CampaignShell className="c72-mission">
    <header className="c72-page-intro c72-width"><h1>Faith in what<br />we can become.</h1><p>An open letter to Capricans.</p></header>
    <figure className="c72-letter-landscape c72-width"><img src="/images/policy-mission.jpg" alt="A city skyline illuminated at night" fetchPriority="high" /></figure>
    <section className="c72-letter-wrap c72-width">
      <article className="c72-letter">
        <p className="c72-letter-date">CAPRICA, 2072</p>
        <h2>A country built<br />by its people.</h2>
        <p className="c72-salutation">Fellow Capricans,</p>
        <p>I believe a good government gives people the confidence to get on with their lives. To find a home. To start something. To speak freely. To make a future that feels like their own.</p>
        <p>That belief still guides us in 2072. The next four years should open more doors: to a first home, a skilled job, a new business and a life built here in Caprica.</p>
        <p>Our place in the world gives us a remarkable opportunity. At the western edge of Columbia, facing the Twin Strait, we can be the continent’s gateway to the world. We have the people, the ingenuity and the ambition. Our size need not set our limits.</p>
        <p>I want enterprise to flourish because good ideas deserve a chance. I want excellent schools, dependable infrastructure and care people can reach because freedom needs solid foundations. And I want public finances we can trust because the next generation should inherit choices.</p>
        <p>Government must keep the law fair, protect our liberties and be honest about its promises. Abroad, Caprica should remain open to trade, reliable with its friends and restrained in its use of force.</p>
        <p>We will not all imagine the same future. That is the point of a free country. The Alliance’s job is to give more people the freedom to build theirs.</p>
        <p className="c72-letter-closing">With faith in Caprica,</p>
        <div className="c72-signature"><img src="/images/robert-bluespan-signature.png" alt="Robert Bluespan signature" width="220" height="54" /><strong>Robert Bluespan</strong><span>Party Co-leader</span></div>
      </article>
    </section>
  </CampaignShell>;
}
