export type CandidateCampaign = {
  slug: string; name: string; region: string; image: string; portraitPosition?: string;
  landscape: string; landscapeAlt: string; landscapePosition?: string;
  headline: string; belief: string; priorities: [string, string][]; event: string;
};

export const candidateCampaigns: CandidateCampaign[] = [
  {
    slug: "alistair-foulke-mckeon", name: "Alistair Foulke-McKeon", region: "Ambrosia", image: "/images/alistair-hero-hd.jpg", portraitPosition: "center 30%",
    landscape: "/images/candidate-review/ambrosia/fields-and-village.jpg", landscapeAlt: "A village among green fields and rolling farmland", headline: "A future worth staying for.",
    belief: "You should not have to leave the place you love to get ahead. Ambrosia is home, and its future matters to me.",
    priorities: [["Good water, good foundations", "Reliable water at home and on the farm, with repairs people can see and trust."], ["More from what we grow", "Local food processing, practical training and dependable routes to market."], ["Room for the next generation", "Serviced homes in our towns, so a future here is a real choice."]], event: "ambrosia-roundtable",
  },
  {
    slug: "david-cutter", name: "David Cutter", region: "Chasmia", image: "/images/chasmia/david-cutter-team.jpg",
    landscape: "/images/chasmia/skilled-work.jpg", landscapeAlt: "A modern industrial workshop", headline: "Make it here. Build a life here.",
    belief: "Good work should come with the chance to build a good life close to home.",
    priorities: [["Skills that lead somewhere", "Paid apprenticeships and practical training shaped with the firms doing the work."], ["Room to build", "Homes near jobs, with dependable transport and services planned alongside them."], ["Confidence to invest", "Fair competition, modern workshops and a clear route from research to production."]], event: "chasmia-future",
  },
  {
    slug: "rupert-pagi-shaw", name: "Rupert Pagi Shaw", region: "Kalahooska", image: "/images/pagi-2064.png",
    landscape: "/images/candidate-review/kalahooska/forest-hd.jpg", landscapeAlt: "Mist over a working forest and mountain landscape", headline: "Rooted here. Ready to grow.",
    belief: "Growth should leave a place stronger than it found it. That starts with respect for the land and its people.",
    priorities: [["More value, made locally", "Skilled timber processing, open contracts and room for small suppliers to grow."], ["A forest with a future", "Responsible harvesting, restoration and care for the resource our livelihoods depend on."], ["Connected communities", "Dependable roads, serviced homes and practical decisions made closer to home."]], event: "kalahooska-forest-walk",
  },
  {
    slug: "darth-ron-paul", name: "Darth Ron Paul", region: "Mezeta", image: "/images/2072/darth-ron-paul.jpg", portraitPosition: "center 25%",
    landscape: "/images/2072/mezeta-fields.jpg", landscapeAlt: "Golden fields beneath an open evening sky", headline: "Free people. Working land.",
    belief: "The people who grow our food deserve more time on the land and less time asking permission.",
    priorities: [["Let growers get on with it", "Clear rules, simpler permits and fair access to markets for farms of every size."], ["Water that lasts", "Reliable rural water and investment in the soil that sustains the next harvest."], ["Keep our towns working", "Useful roads, local processing and practical skills that keep more opportunity in Mezeta."]], event: "mezeta-growers",
  },
  {
    slug: "jon-fraser", name: "Jon Fraser", region: "Montiablo", image: "/images/jon-fraser.jpg",
    landscape: "/images/montiablo/capital-connections.jpg", landscapeAlt: "The streets and connections of a major metropolitan region", headline: "One capital. More possibility.",
    belief: "A capital should work for the people who live in it, every day.",
    priorities: [["One network, one fare", "Useful connections across bus, tram, metro, ferry and regional rail."], ["A city with room", "More homes near stations and public spaces that make a neighbourhood feel like home."], ["Open doors for enterprise", "An easier start for small firms, cultural venues and the people bringing streets to life."]], event: "caprica-we-can-build",
  },
  {
    slug: "jb-stoner", name: "JB Stoner", region: "Myrati", image: "/images/stoner.png",
    landscape: "/images/myrati/port.jpg", landscapeAlt: "A working harbour connecting an island to the wider world", headline: "Our island. Open horizons.",
    belief: "I want Myrati to be a place people choose to return to, with skills, ideas and a future of their own.",
    priorities: [["A port that opens doors", "Better freight connections and more opportunity in shipbuilding, repair and trade."], ["Bring skills home", "Strong technical routes and a fair chance to turn learning into local work."], ["An island that works", "Dependable transport, sensible homes and a voice for every island community."]], event: "open-seas-open-markets",
  },
  {
    slug: "tony-blair", name: "Tony Blair", region: "Oplana", image: "/images/tony-blair.png",
    landscape: "/images/events/oplana-market.jpg", landscapeAlt: "Shops and people along a lively market street", headline: "Safe streets. Fresh chances.",
    belief: "Everyone should feel safe on their own street, and everyone deserves a fair chance to begin again.",
    priorities: [["A safe walk home", "Visible policing, better lighting and clear limits on the use of public power."], ["More life on Market Mile", "Simpler permits, occupied shops and homes on land that has been left idle."], ["A way forward", "Connect treatment, recovery and practical training to a lasting route back into work."]], event: "safe-streets-second-chances",
  },
  {
    slug: "adrien-sanquier", name: "Adrien Sanquier", region: "Pleucadeuc", image: "/images/mathieu.jpg",
    landscape: "/images/pleucadeuc/rail.jpg", landscapeAlt: "A passenger train travelling through mountain country", headline: "Closer to home. Further ahead.",
    belief: "Better connections should give our towns more possibilities without taking away what makes them home.",
    priorities: [["A stronger southern line", "Faster, dependable journeys connecting Valcartier, Fiévreau and Syon."], ["Life around the station", "Homes, useful local buses and space for businesses where people already travel."], ["Confident in who we are", "A strong voice for Gallic life, coastal communities and Pleucadeuc’s own ambitions."]], event: "southern-line",
  },
  {
    slug: "walter-black", name: "Walter Black", region: "Reno", image: "/images/2072/walter-black.png", portraitPosition: "center 35%",
    landscape: "/images/reno/park.jpg", landscapeAlt: "Green public space and neighbourhood life in a city", headline: "A good life. On solid ground.",
    belief: "A good city gives you room to make a life, and the confidence to get on with it.",
    priorities: [["A home within reach", "Build near transport, bring unused sites back to life and make renting dependable."], ["A connected Reno", "Better everyday journeys, welcoming public spaces and neighbourhoods people can enjoy."], ["A fair start", "Clear rules for local firms and a council that treats your time as valuable."]], event: "homes-within-reach",
  },
  {
    slug: "robert-bluespan", name: "Robert Bluespan", region: "Ventura", image: "/images/2072/robert-bluespan.jpg",
    landscape: "/images/2072/ventura-coast.jpg", landscapeAlt: "A coastal metropolis beside a long sandy beach", landscapePosition: "center 53%", headline: "A coast you can call home.",
    belief: "Ventura should be a wonderful place to visit and a place where we can afford to live.",
    priorities: [["Homes for local life", "More homes near transport, so families and the people who work here can stay."], ["Our coast, shared", "Protect public beach access, clean water and the shoreline that makes Ventura special."], ["A metropolis that moves", "Useful public transport and walkable streets connecting our neighbourhoods with jobs and the sea."]], event: "ventura-coast-and-city",
  },
  {
    slug: "sejin-bluespan", name: "Sejin Bluespan", region: "Ambarino", image: "/images/2072/sejin-bluespan.png", portraitPosition: "center 38%",
    landscape: "/images/2072/ambarino-campus.jpg", landscapeAlt: "People walking between contemporary university buildings", headline: "Ideas begin here.",
    belief: "A district full of talent should make it easier to learn, speak freely and turn an idea into a living.",
    priorities: [["Room to learn and live", "More homes near universities and dependable connections between campus, work and the rest of the city."], ["Discovery into opportunity", "Open the way from research to new firms, with space for founders and practical partnerships."], ["Free minds, open doors", "Protect academic freedom and keep education open to talent from every background."]], event: "next-generation-economy",
  },
];

export function getCandidate(slug: string) {
  const candidate = candidateCampaigns.find(item => item.slug === slug);
  if (!candidate) throw new Error("Unknown candidate: " + slug);
  return candidate;
}
