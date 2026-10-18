import type { PhotoStory } from "./CampaignChrome";

export type PlatformStory = {
  slug: string; title: string; headline: string; image: string; alt: string; position?: string;
  introduction: string; promises: { title: string; text: string }[];
  secondImage: string; secondAlt: string; belief: string;
};

export const platformStories: PlatformStory[] = [
  {
    slug: "housing", title: "Housing", headline: "A place to call yours.",
    image: "/images/2072/housing.jpg", alt: "Sunlit homes with generous balconies", position: "center 54%",
    introduction: "Your next chapter should not depend on finding the last affordable home in town.",
    promises: [
      { title: "Build more homes.", text: "Aim for 50% more annual home completions by 2076 than the verified 2072 total. Release serviced land and build near jobs and transport." },
      { title: "Rent with confidence.", text: "Portable deposits, clear repair duties and secure agreements. A fast tribunal route when serious problems go unresolved." },
      { title: "Put a clock on permission.", text: "Decide complete growth-area applications within 120 days and compliant infill within 60. Missed deadlines bring fee refunds and independent appeals." },
    ],
    secondImage: "/images/reno/homes.jpg", secondAlt: "A residential street with homes and mature trees", belief: "Independence starts with a front door.",
  },
  {
    slug: "economy", title: "Enterprise", headline: "Back the next good idea.",
    image: "/images/2072/enterprise.jpg", alt: "A barista at work behind the counter of an independent coffee shop", position: "center 50%",
    introduction: "A small business is somebody’s big idea. A first job is somebody’s first chance. Both deserve room to grow.",
    promises: [
      { title: "A fair chance at work.", text: "Replace compulsory workplace arrangements with voluntary unions and secret ballots. Protect pay and safety from day one, with fair probation rules." },
      { title: "Share the cost of family leave.", text: "Develop pooled parental and serious-illness insurance with published contributions and benefit limits. Protect accrued rights through the transition." },
      { title: "Make room for new firms.", text: "One-day standard incorporation, public invoices paid within 20 working days and a route to challenge licensing rules that shelter incumbents." },
      { title: "Pay for promises honestly.", text: "Retain the earnings-credit principle. Publish an opening fiscal audit, cost permanent commitments and set a path to falling debt relative to GDP by 2076 under normal conditions." },
    ],
    secondImage: "/images/belief-discovery.jpg", secondAlt: "A researcher working with laboratory samples", belief: "Opportunity grows when people are free to try.",
  },
  {
    slug: "education", title: "Education", headline: "Talent deserves a chance.",
    image: "/images/2072/learning.jpg", alt: "Students working at long tables in a light-filled library", position: "center 55%",
    introduction: "Where you begin should never decide how far you can go.",
    promises: [
      { title: "Get the foundations right.", text: "Excellent teaching, strong reading and mathematics, and help before a student falls behind." },
      { title: "A first step into working life.", text: "By 2074, offer eligible under-25s a suitable job, paid apprenticeship or accredited training place within 90 days after four months outside work or education." },
      { title: "Let talent through.", text: "Portable training accounts, fair recognition of qualifications and job-related language standards. Keep research and academic appointments free from political loyalty tests." },
    ],
    secondImage: "/images/chasmia/skilled-work.jpg", secondAlt: "Practical work in an engineering workshop", belief: "There is more than one way to build a future.",
  },
  {
    slug: "healthcare", title: "Healthcare", headline: "Care, when it matters.",
    image: "/images/policy-healthcare.jpg", alt: "Healthcare professionals working together in a clinical setting", position: "center 46%",
    introduction: "When you are unwell, getting help should be the simple part.",
    promises: [
      { title: "An easier first appointment.", text: "More primary care capacity and clear access standards, including for communities far from a hospital." },
      { title: "A waiting-time right.", text: "Arrange suitable accredited alternative care at no extra charge when a commissioner misses a clinical maximum wait. Put staffing and funding in place first." },
      { title: "Mental health without the maze.", text: "By 2074, aim for first clinical contact within 14 days for urgent nonemergency referrals under 25. Publish treatment waits too; emergencies need immediate assessment." },
    ],
    secondImage: "/images/services.jpg", secondAlt: "A healthcare professional preparing to care for patients", belief: "Good care starts with being heard.",
  },
  {
    slug: "infrastructure", title: "Energy & connections", headline: "Keep life moving.",
    image: "/images/2072/energy.jpg", alt: "Offshore wind turbines across an open stretch of sea", position: "center 57%",
    introduction: "Power that stays on. Water you can trust. A journey that gets you there.",
    promises: [
      { title: "Build dependable power.", text: "Let clean generation, storage and demand response compete on cost and reliability. Clear grid queues for projects ready to build." },
      { title: "Repair before failure.", text: "Publish maintenance plans for roads, rail and water. Fund useful connections and coordinate infrastructure with new housing." },
      { title: "Finish what we start.", text: "Publish project costs, milestones and the person responsible. Fund maintenance from the beginning." },
    ],
    secondImage: "/images/pleucadeuc/rail.jpg", secondAlt: "A passenger train connecting communities", belief: "Ambition needs good foundations.",
  },
  {
    slug: "civil-liberties", title: "Civil liberties", headline: "Your life. Your freedom.",
    image: "/images/policy-civil-liberties.jpg", alt: "The scales of justice against a bright sky", position: "center 38%",
    introduction: "Government holds power on your behalf. It should remember who that power belongs to.",
    promises: [
      { title: "Restore the limits on power.", text: "Introduce a Liberty Restoration Bill in the first 100 days. Protect free expression, privacy and equal citizenship without tests of political loyalty." },
      { title: "Keep intelligence under law.", text: "Judicial warrants, accountable human authorisation and no intelligence-controlled army. Preserve the Nuremberg Act framework and prohibit torture." },
      { title: "End blanket secrecy.", text: "Review classified records every five years, with a presumption of release after 20 and narrow, independently reviewed extensions. Give watchdogs access to the files and budget." },
      { title: "A person must answer.", text: "Guarantee human review of consequential automated public decisions. Protect encryption and keep essential services accessible without mandatory digital identity." },
    ],
    secondImage: "/images/events/montiablo-hall.jpg", secondAlt: "A civic building opening onto a public street", belief: "A confident country can trust its people.",
  },
  {
    slug: "foreign-policy", title: "Foreign policy", headline: "An open country. A steady partner.",
    image: "/images/2072/trade.jpg", alt: "A working commercial port connecting goods to international markets", position: "center 28%",
    introduction: "The Bluespan Doctrine: trade openly, keep our word and know the limits of force.",
    promises: [
      { title: "Keep our gateways open.", text: "Secure sea lanes and open markets. Make Caprica a partner others want to trade and build with." },
      { title: "Lead reform from within the CU.", text: "Commit to membership and propose a CU Reform Compact within six months: transparent contributions, audited programmes and stronger national parliamentary scrutiny." },
      { title: "Choose steady diplomacy.", text: "Build on the Kaoqing Communique and normalization with OURS. Defend territorial integrity and resist open-ended military adventures." },
    ],
    secondImage: "/images/myrati/coast.jpg", secondAlt: "An island coastline looking out towards open water", belief: "Our horizons should be wider than our shores.",
  },
  {
    slug: "defense", title: "Defense", headline: "Ready to protect our home.",
    image: "/images/policy-defense.jpg", alt: "Naval vessels sailing together at sea", position: "center 57%",
    introduction: "An island nation needs the strength to keep its seas open and its people safe.",
    promises: [
      { title: "Stronger at sea and in the air.", text: "Prioritize the navy, air force, maritime surveillance and the protection of vital cables and ports." },
      { title: "One lawful chain of command.", text: "Mobile, well-equipped professionals under civilian defence authority. No parallel intelligence army. Cooperate with CU partners on clearly defined missions." },
      { title: "Look after those who serve.", text: "Ready equipment, decent conditions and clear missions. Service deserves practical support during and after deployment." },
    ],
    secondImage: "/images/chasmia/maritime.jpg", secondAlt: "Maritime engineering and the industry behind national readiness", belief: "Strong enough to defend. Wise enough to show restraint.",
  },
];

export const homeStories: PhotoStory[] = [
  { href: "/platform/housing/", image: "/images/2072/housing.jpg", alt: "Modern homes with open balconies", category: "Housing", title: "A place to call yours.", caption: "More homes. More independence.", position: "center 54%", className: "c72-card-half" },
  { href: "/platform/economy/", image: "/images/2072/enterprise.jpg", alt: "An independent coffee shop at work", category: "Enterprise", title: "An idea worth backing.", caption: "Room to start. Freedom to grow.", className: "c72-card-half" },
  { href: "/platform/education/", image: "/images/2072/learning.jpg", alt: "Students working together in a library", category: "Education", title: "Talent deserves a chance.", className: "c72-card-third" },
  { href: "/platform/healthcare/", image: "/images/policy-healthcare.jpg", alt: "A clinical team working together", category: "Healthcare", title: "Care, when it matters.", className: "c72-card-third" },
  { href: "/platform/infrastructure/", image: "/images/2072/energy.jpg", alt: "Wind turbines on the open sea", category: "Energy & connections", title: "Keep life moving.", position: "center 58%", className: "c72-card-third" },
  { href: "/platform/foreign-policy/", image: "/images/2072/trade.jpg", alt: "An aerial view across a working port", category: "Our place in the world", title: "Open horizons.", caption: "Trade. Cooperation. Steady judgment.", position: "center 28%", className: "c72-card-wide" },
  { href: "/platform/civil-liberties/", image: "/images/policy-civil-liberties.jpg", alt: "Lady Justice holding the scales of justice", category: "Civil liberties", title: "Free to be yourself.", position: "37% center", className: "c72-card-third" },
  { href: "/team/", image: "/images/alistair-conversation-hd.jpg", alt: "A conversation on the campaign trail", category: "Our candidates", title: "People who show up.", caption: "Meet the Alliance.", className: "c72-card-half" },
  { href: "/events/", image: "/images/events/events-hero.jpg", alt: "People coming together for a public conversation", category: "On the road", title: "Come with a question.", caption: "Find us across Caprica.", className: "c72-card-half" },
  { href: "/platform/mission-statement/", image: "/images/cambria/coast.jpg", alt: "Mountains meeting the sea on a rugged coastline", category: "Our mission", title: "Faith in what we can become.", caption: "An open letter to Capricans.", className: "c72-card-full" },
];
