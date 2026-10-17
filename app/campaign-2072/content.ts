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
      { title: "Build more homes.", text: "Open land near transport. Give planning decisions a deadline. Build the services alongside the homes." },
      { title: "Rent with confidence.", text: "Clear agreements, decent standards and fair deposits. A home should feel secure, whoever owns it." },
      { title: "Put down roots.", text: "Make room for first homes, growing families and people who want to stay in their community." },
    ],
    secondImage: "/images/reno/homes.jpg", secondAlt: "A residential street with homes and mature trees", belief: "Independence starts with a front door.",
  },
  {
    slug: "economy", title: "Enterprise", headline: "Back the next good idea.",
    image: "/images/2072/enterprise.jpg", alt: "A barista at work behind the counter of an independent coffee shop", position: "center 50%",
    introduction: "A small business is somebody’s big idea. Give it room to become something.",
    promises: [
      { title: "Let work pay.", text: "Protect the negative income tax and childcare tax credit. Keep the rewards of extra effort clear." },
      { title: "Make starting simpler.", text: "One clear business registration process. Fewer forms. Public contracts that smaller firms can compete for." },
      { title: "Think beyond tomorrow.", text: "Sound finances, open competition and stable rules. Publish the cost of promises and keep debt falling." },
    ],
    secondImage: "/images/belief-discovery.jpg", secondAlt: "A researcher working with laboratory samples", belief: "Opportunity grows when people are free to try.",
  },
  {
    slug: "education", title: "Education", headline: "Talent deserves a chance.",
    image: "/images/2072/learning.jpg", alt: "Students working at long tables in a light-filled library", position: "center 55%",
    introduction: "Where you begin should never decide how far you can go.",
    promises: [
      { title: "Get the foundations right.", text: "Excellent teaching, strong reading and mathematics, and help before a student falls behind." },
      { title: "Respect every route.", text: "Apprenticeships and technical qualifications with the same ambition and standing as university." },
      { title: "Keep discovery open.", text: "Back research, independent thought and a fair chance for talent from every part of Caprica." },
    ],
    secondImage: "/images/chasmia/skilled-work.jpg", secondAlt: "Practical work in an engineering workshop", belief: "There is more than one way to build a future.",
  },
  {
    slug: "healthcare", title: "Healthcare", headline: "Care, when it matters.",
    image: "/images/policy-healthcare.jpg", alt: "Healthcare professionals working together in a clinical setting", position: "center 46%",
    introduction: "When you are unwell, getting help should be the simple part.",
    promises: [
      { title: "An easier first appointment.", text: "More primary care capacity and clear access standards, including for communities far from a hospital." },
      { title: "A shorter wait.", text: "Use available public and independent capacity. Universal access should mean treatment, not another queue." },
      { title: "Trust the people who care.", text: "Give clinicians time with patients. Publish actual waiting times and listen when care falls short." },
    ],
    secondImage: "/images/services.jpg", secondAlt: "A healthcare professional preparing to care for patients", belief: "Good care starts with being heard.",
  },
  {
    slug: "infrastructure", title: "Energy & connections", headline: "Keep life moving.",
    image: "/images/2072/energy.jpg", alt: "Offshore wind turbines across an open stretch of sea", position: "center 57%",
    introduction: "Power that stays on. Water you can trust. A journey that gets you there.",
    promises: [
      { title: "Build dependable power.", text: "More clean generation, storage and grid capacity. Let technologies compete on cost and reliability." },
      { title: "Connect our communities.", text: "Maintain roads, improve rail and strengthen our ports. Make daily journeys part of the national plan." },
      { title: "Finish what we start.", text: "Publish project costs, milestones and the person responsible. Fund maintenance from the beginning." },
    ],
    secondImage: "/images/pleucadeuc/rail.jpg", secondAlt: "A passenger train connecting communities", belief: "Ambition needs good foundations.",
  },
  {
    slug: "civil-liberties", title: "Civil liberties", headline: "Your life. Your freedom.",
    image: "/images/policy-civil-liberties.jpg", alt: "The scales of justice against a bright sky", position: "center 38%",
    introduction: "Government holds power on your behalf. It should remember who that power belongs to.",
    promises: [
      { title: "Say what you think.", text: "Protect free expression, privacy and equal treatment before the law. Disagreement belongs in a free country." },
      { title: "Put power under law.", text: "Uphold the Nuremberg Act, independent courts and judicial approval for intrusive surveillance." },
      { title: "Let the public see.", text: "Open contracts, accountable intelligence and meaningful oversight. No permanent emergency and no encryption backdoors." },
    ],
    secondImage: "/images/events/montiablo-hall.jpg", secondAlt: "A civic building opening onto a public street", belief: "A confident country can trust its people.",
  },
  {
    slug: "foreign-policy", title: "Foreign policy", headline: "An open country. A steady partner.",
    image: "/images/2072/trade.jpg", alt: "A working commercial port connecting goods to international markets", position: "center 28%",
    introduction: "The Bluespan Doctrine: trade openly, keep our word and know the limits of force.",
    promises: [
      { title: "Keep our gateways open.", text: "Secure sea lanes and open markets. Make Caprica a partner others want to trade and build with." },
      { title: "Work with our neighbours.", text: "Practical cooperation through the Columbian Union, with clear commitments and parliamentary accountability." },
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
      { title: "A smaller, modern army.", text: "Mobile, well-equipped professionals with the training and lift to respond quickly alongside CU partners." },
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
