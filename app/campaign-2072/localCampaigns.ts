export type LocalPhoto = { image: string; alt: string; title: string; copy: string; position?: string };
export type LocalCampaign = { headline: string; belief: string; invitation: string; photos: LocalPhoto[] };

// The six competitive constituencies get a fuller, photograph-led local story.
export const localCampaigns: Record<string, LocalCampaign> = {
  "sejin-bluespan": {
    headline: "Your ideas deserve a future here.",
    belief: "Ambarino should be somewhere you can study, find your voice and build a life. I want the future you imagine here to be one you can stay for.",
    invitation: "What would make it easier to start your life here? Come and tell me.",
    photos: [
      { image: "/images/2072/learning.jpg", alt: "People reading and working in a university library", title: "Free to think for yourself.", copy: "Universities should welcome argument, protect academic freedom and open doors to talent." },
      { image: "/images/chasmia/research.jpg", alt: "A researcher working with a laboratory microscope", title: "Let the next good idea grow.", copy: "Make it easier for researchers to start a firm and bring discoveries into everyday life.", position: "center 40%" },
      { image: "/images/2072/housing.jpg", alt: "New homes with balconies and space for neighbourhood life", title: "A degree. Then a home.", copy: "Build more homes near campus and transport. A first job should come with a way to stay." }
    ]
  },
  "alistair-foulke-mckeon": {
    headline: "Home is worth building for.",
    belief: "Ambrosia shaped me. I want the next generation to have a real choice to stay, earn a good living and raise a family in the place they love.",
    invitation: "Bring a question from your farm, your business or your town. I want to hear it.",
    photos: [
      { image: "/images/2072/ambrosia-produce.jpg", alt: "Fresh produce at a local farmers market", title: "More of the value stays here.", copy: "Back local food processing and open routes to market, so a good harvest supports a good living." },
      { image: "/images/2072/mezeta-tractor.jpg", alt: "A tractor working across a green field", title: "Respect the people doing the work.", copy: "Practical training, dependable roads and rules that give family businesses room to grow." },
      { image: "/images/farm.jpg", alt: "Green crops and pathways seen from above", title: "Good water is a promise to keep.", copy: "Repair rural water systems and publish local test results. The basics should not be a battle." }
    ]
  },
  "darth-ron-paul": {
    headline: "Your land. Your living. Your say.",
    belief: "Freedom means little if every decision needs permission. I trust the people who work this land, and I want government to treat their time and judgement with respect.",
    invitation: "What gets in the way of making a living here? Let’s talk about it.",
    photos: [
      { image: "/images/2072/mezeta-tractor.jpg", alt: "A farmer driving a tractor across a field", title: "Let growers get on with it.", copy: "Simpler permits and clear rules. Protect property rights without giving anyone a licence to pollute." },
      { image: "/images/farm.jpg", alt: "Healthy green crops viewed from above", title: "The next harvest matters too.", copy: "Dependable water, healthy soil and practical investment that lasts beyond a single season." },
      { image: "/images/2072/ambrosia-produce.jpg", alt: "Locally grown produce displayed for sale", title: "An open market. A fair chance.", copy: "Give small farms room to sell, process and compete. Keep opportunity in Mezeta’s towns." }
    ]
  },
  "tony-blair": {
    headline: "Your street. Your future.",
    belief: "I want Oplana to feel like a place you can count on. Safe to come home to, open to anyone ready to make a start.",
    invitation: "Walk Market Mile with me. Tell me what’s working, and what needs to change.",
    photos: [
      { image: "/images/2072/oplana-evening.jpg", alt: "People enjoying an illuminated neighbourhood street in the evening", title: "A safe walk home.", copy: "Visible neighbourhood policing, better lighting and firm, independent limits on police power.", position: "center 55%" },
      { image: "/images/2072/enterprise.jpg", alt: "A small neighbourhood coffee shop at work", title: "Give the street its spark back.", copy: "Simpler shop permits and homes on idle land. Let the people with an idea get started.", position: "center 38%" },
      { image: "/images/reno/cafe.jpg", alt: "People talking together at an outdoor cafe", title: "A second chance that goes somewhere.", copy: "Connect treatment and recovery with training and work. Safety and compassion belong together." }
    ]
  },
  "walter-black": {
    headline: "Make a life. Not just a living.",
    belief: "Hard work should give you a way forward. I want a Reno where finding a home, starting a business and making time for the people you love feel within reach.",
    invitation: "A good city starts with listening. Come and tell me what Reno needs next.",
    photos: [
      { image: "/images/reno/homes.jpg", alt: "Homes along a green residential street", title: "More keys. Fewer closed doors.", copy: "Build near transport and bring unused sites back to life. More homes mean more real choices.", position: "center 55%" },
      { image: "/images/reno/commute.jpg", alt: "Commuters waiting beside a train", title: "Your time belongs to you.", copy: "Useful, connected journeys that leave more of the day for life beyond work.", position: "center 42%" },
      { image: "/images/reno/cafe.jpg", alt: "Neighbours in conversation at a local cafe", title: "A city made by its people.", copy: "Fair rules for small firms and welcoming public spaces. Give local ambition room to breathe." }
    ]
  },
  "robert-bluespan": {
    headline: "A coast you can call home.",
    belief: "The people who keep Ventura running should be able to afford a life here. That is the city I want to represent.",
    invitation: "Let’s meet by the water and talk about the Ventura we want to live in.",
    photos: [
      { image: "/images/2072/ventura-promenade.jpg", alt: "People spending an evening together on a waterfront promenade", title: "The coast belongs to all of us.", copy: "Keep beaches public, water clean and the shoreline open. Our greatest asset should be everyone’s to enjoy.", position: "center 87%" },
      { image: "/images/2072/housing.jpg", alt: "Contemporary homes with open balconies", title: "A home, not a holiday from home.", copy: "Build more homes near transport, so local families and the people working here can stay." },
      { image: "/images/montiablo/transit.jpg", alt: "A tram connecting homes, shops and walkable streets", title: "Less traffic. More Ventura.", copy: "Connect neighbourhoods, jobs and the sea with useful public transport and streets worth walking.", position: "center 50%" }
    ]
  }
};
