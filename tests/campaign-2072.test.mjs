import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

// Verify the HTML that GitHub Pages actually serves, after npm run export:pages.
const root = new URL("../docs/", import.meta.url);
const topics = ["housing", "economy", "education", "healthcare", "infrastructure", "civil-liberties", "foreign-policy", "defense"];
const roster = [["alistair-foulke-mckeon","Alistair Foulke-McKeon"],["david-cutter","David Cutter"],["rupert-pagi-shaw","Rupert Pagi Shaw"],["darth-ron-paul","Darth Ron Paul"],["jon-fraser","Jon Fraser"],["jb-stoner","JB Stoner"],["tony-blair","Tony Blair"],["adrien-sanquier","Adrien Sanquier"],["walter-black","Walter Black"],["robert-bluespan","Robert Bluespan"],["sejin-bluespan","Sejin Bluespan"]];
const routes = [...roster.map(([slug]) => slug), "", "2068", "platform", "platform/mission-statement", ...topics.map(x => "platform/" + x), "team", "events", "manifesto"];
const readPage = route => readFile(new URL((route ? route + "/" : "") + "index.html", root), "utf8");
const text = html => html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

for (const route of routes) {
  test(`2072 /${route}: page, navigation and assets are ready for GitHub Pages`, async () => {
    const html = await readPage(route);
    assert.match(html, /<title>[^<]*2072/);
    assert.match(html, /<h1\b/);
    assert.match(html, /class="c72[ "]/);
    assert.match(html, /© 2072 LCA/);
    assert.doesNotMatch(text(html), /[↗→↓—–]|For simulation purposes|Stability and Growth Pact/);
    assert.match(html, /<details class="c72-mobile-nav">/);
    const destinations = new Set([...html.matchAll(/href="([^"]+)"/g)].map(m => m[1].replace(/\/$/, "")));
    for (const destination of ["platform/mission-statement/", "platform/", "team/", "events/", "manifesto/"]) {
      assert.ok(destinations.has(("/mr2072/" + destination).replace(/\/$/, "")), "Missing navigation: " + destination);
    }
    const references = [...html.matchAll(/\b(?:href|src)="(\/mr2072\/[^"#?]*)/g)].map(m => m[1]);
    for (const href of new Set(references)) {
      const relative = href.slice("/mr2072/".length);
      const path = relative.endsWith("/") || !relative.split("/").at(-1).includes(".") ? relative.replace(/\/$/, "") + "/index.html" : relative;
      const info = await stat(new URL(path.replace(/^\//, ""), root)).catch(() => null);
      assert.ok(info?.isFile() && info.size, `/${route}: missing ${href}`);
    }
  });
}

test("the homepage stays visual, concise and free of duplicate photographs", async () => {
  const html = await readPage("");
  assert.equal((html.match(/class="c72-photo-card /g) ?? []).length, 10);
  const images = [...html.matchAll(/<img[^>]*src="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(images).size, images.length);
  assert.ok(text(html).split(/\s+/).length < 220);
  assert.doesNotMatch(html, /<video\b|priority-tab|lca68-drawer/);
});

test("all eleven candidates have one portrait and a working personal site", async () => {
  const html = await readPage("team");
  assert.equal((html.match(/class="c72-person"/g) ?? []).length, 11);
  assert.doesNotMatch(text(html), /Pepe Marti|Roberto Libero|Mathieu Jeon|Cambria/);
  const events = await readPage("events");
  for (const [slug, name] of roster) {
    const links = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1].replace(/\/$/, ""));
    assert.ok(links.includes("/mr2072/" + slug), name + " needs a profile link");
    assert.equal((html.split("<h2>" + name + "</h2>").length - 1), 1);
    const profile = await readPage(slug);
    assert.ok(profile.includes("<h1>" + name + "</h1>"));
    const focused = ["alistair-foulke-mckeon", "darth-ron-paul", "tony-blair", "walter-black", "robert-bluespan", "sejin-bluespan"].includes(slug);
    assert.equal((profile.match(/<figure\b/g) ?? []).length, focused ? 5 : 2);
    assert.ok(text(profile).split(/\s+/).length < 285, name + " should stay concise");
    const photos = [...profile.matchAll(/<img[^>]*src="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(photos).size, photos.length, name + " should not repeat photos");
    assert.doesNotMatch(text(profile), /2068|2064/);
    const event = profile.match(/href="\/mr2072\/events\/?#([^"]+)"/)?.[1];
    assert.ok(event && events.includes('id="' + event + '"'), name + " needs a current event");
  }
  assert.match(await readPage("adrien-sanquier"), /images\/mathieu\.jpg/);
});

test("retired campaign addresses forward to the current lineup", async () => {
  for (const [slug, destination] of [["cambria","team"],["pepe-marti-rutte","team"],["mathieu-jeon","adrien-sanquier"],["roberto-libero","walter-black"]]) {
    const html = await readPage(slug);
    assert.ok(html.includes('content="0;url=/mr2072/' + destination + '/"'));
  }
});

test("the letter retains its paper and the new schedule downloads 2072 dates", async () => {
  const letter = await readPage("platform/mission-statement");
  assert.match(letter, /CAPRICA, 2072/);
  assert.match(letter, /robert-bluespan-signature\.png/);
  const css = await readFile(new URL("assets/site.css", root), "utf8");
  assert.match(css, /\.c72-letter\{[^}]*policy-parchment\.jpg/);
  const html = await readPage("events");
  const calendars = [...html.matchAll(/href="(data:text\/calendar;[^"]+)"/g)];
  assert.equal(calendars.length, 11);
  for (const [, href] of calendars) {
    const calendar = decodeURIComponent(href.slice(href.indexOf(",") + 1));
    assert.match(calendar, /DTSTART:2072\d{4}T\d{6}/);
    assert.match(calendar, /UID:[^\r\n]+-2072@alliance\.caprica/);
  }
});
