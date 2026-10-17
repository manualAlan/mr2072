import { events } from "../data";
import type { Metadata } from "next";
import { eventCalendarHref } from "./EventActions";
import { CampaignShell } from "../campaign-2072/CampaignChrome";

export const metadata: Metadata = { title: "Events | Alliance 2072", description: "Come with a question. Meet the Alliance across Caprica in 2072." };
const eventMonths: Record<string, string> = { AUG: "08", SEP: "09", OCT: "10" };

export default function Events() {
  return <CampaignShell className="c72-events">
    <section className="c72-page-intro c72-width"><h1>Come with a question.</h1><p>On the road in 2072.</p></section>
    <section className="c72-event-grid c72-width" aria-label="Campaign events">
      {events.map(event => <article className="c72-event" id={event.slug} key={event.slug}>
        <figure><img src={event.image} alt={event.place} style={{objectPosition:event.imagePosition}} loading="lazy" /></figure>
        <div className="c72-event-caption"><time dateTime={"2072-" + (eventMonths[event.month] ?? "01") + "-" + event.day}>{event.day} {event.month} 2072</time><h2>{event.title}</h2><p>{event.place}</p><div><span>{event.time}</span><a href={eventCalendarHref(event, 2072)} download={event.slug + "-2072.ics"}>Save the date</a></div></div>
      </article>)}
    </section>
    <p className="c72-small-note c72-width">All times are local to the venue.</p>
  </CampaignShell>;
}
