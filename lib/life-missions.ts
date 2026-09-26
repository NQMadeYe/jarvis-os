export type Pillar = 'empire' | 'money' | 'body' | 'mind' | 'faith' | 'presence' | 'relationships' | 'experiences';
export type Mission = { id: string; pillar: Pillar; title: string; detail: string; minutes: number; date: string; time: string; done: boolean; evidence: string; completedOn?: string; sourceId?: string };
export type MissionIdea = { id: string; pillar: Pillar; title: string; detail: string; minutes: number; proof: string };
export const PILLARS: { id: Pillar; label: string; intent: string; target: number }[] = [
  { id:'empire', label:'EMPIRE', intent:'Build something that serves a real customer.', target:4 },
  { id:'money', label:'MONEY', intent:'Know your numbers. Respect your rules.', target:2 },
  { id:'body', label:'BODY', intent:'Train, refuel, recover, and carry yourself well.', target:4 },
  { id:'mind', label:'MIND', intent:'Study deeply. Turn knowledge into skill.', target:4 },
  { id:'faith', label:'FAITH', intent:'Know God through Scripture, prayer, and practice.', target:7 },
  { id:'presence', label:'PRESENCE', intent:'Grooming, clear speech, composure, and integrity.', target:3 },
  { id:'relationships', label:'RELATIONSHIPS', intent:'Be present. Initiate. Listen. Follow through.', target:3 },
  { id:'experiences', label:'EXPERIENCES', intent:'Leave the usual loop. Explore and participate.', target:1 },
];
export const MISSIONS: MissionIdea[] = [
  {id:'demo',pillar:'empire',title:'Finish one your business demo workflow',detail:'Choose one agency task. Write its finish line, build the smallest useful improvement, and record a short walkthrough.',minutes:60,proof:'Working change + a short demo.'},
  {id:'buyer',pillar:'empire',title:'Understand one buyer’s problem',detail:'Draft five questions about an HR or background-investigation workflow. Identify the right person to ask; prepare a specific request for a conversation.',minutes:30,proof:'Five questions + one relevant contact.'},
  {id:'pitch',pillar:'empire',title:'Sharpen the your business pitch',detail:'Explain the problem, the workflow you improve, and a measurable pilot result. Practice it aloud without promises you cannot support.',minutes:25,proof:'A clear 60-second explanation.'},
  {id:'spec',pillar:'empire',title:'Turn an idea into a build task',detail:'Name the user, the task, and what done looks like. Break it into three implementation steps.',minutes:15,proof:'One small, testable feature brief.'},
  {id:'numbers',pillar:'money',title:'Reconcile your money',detail:'Review balances, upcoming bills, and recent spending. Record facts and the next responsibility; no extra trading required.',minutes:15,proof:'Updated numbers + one next action.'},
  {id:'trade-review',pillar:'money',title:'Review a trade without placing another',detail:'Annotate one existing setup, entry, stop, and rule followed or broken. Write one process lesson.',minutes:25,proof:'One annotated trade journal entry.'},
  {id:'expense',pillar:'money',title:'Find one spending leak',detail:'Check your recurring subscriptions or last seven days of spending. Choose one unnecessary expense to reconsider.',minutes:10,proof:'One expense identified and a decision.'},
  {id:'money-learn',pillar:'money',title:'Understand one financial concept',detail:'Use an official educational source to study one topic: interest, diversification, or account fees. Explain it in your own words.',minutes:30,proof:'A five-sentence explanation, not a trade.'},
  {id:'train',pillar:'body',title:'Complete your planned training',detail:'Follow your existing workout. Record what you did and how you felt. On a recovery day, use the recovery mission instead.',minutes:60,proof:'Workout completed and logged.'},
  {id:'recover',pillar:'body',title:'Take a recovery walk',detail:'Choose a comfortable route, get outside, and return refreshed. Let recovery support your next training session.',minutes:30,proof:'A walk completed.'},
  {id:'meal',pillar:'body',title:'Prepare your next real meal',detail:'Cook or assemble a meal from food you have. Put tomorrow’s meal or grocery needs on a short list.',minutes:25,proof:'Meal ready + next meal planned.'},
  {id:'wind-down',pillar:'body',title:'Protect tonight’s sleep',detail:'Choose a bedtime, set your alarm, prepare tomorrow’s clothes, and charge your phone away from bed.',minutes:10,proof:'A bedtime and a prepared space.'},
  {id:'read',pillar:'mind',title:'Read, then close the book',detail:'Read Disruptive Thinking or your current book. Close it and write three ideas you remember and one you will apply.',minutes:30,proof:'Three takeaways + one application.'},
  {id:'code',pillar:'mind',title:'Build one coding exercise',detail:'Choose one small concept. Write working code, test an example, and explain what you learned.',minutes:50,proof:'Working exercise + your explanation.'},
  {id:'learn',pillar:'mind',title:'Turn a lesson into a useful note',detail:'Watch or read one lesson without switching apps. Produce an example or a one-page summary before moving on.',minutes:25,proof:'An example or a useful page of notes.'},
  {id:'journal',pillar:'mind',title:'Think on paper',detail:'Write what is on your mind, what you control, and the next choice you can make. Keep it honest and concrete.',minutes:10,proof:'One page + one next action.'},
  {id:'scripture',pillar:'faith',title:'Read Scripture in context',detail:'Read a chapter. Write what it says, what it teaches about God, and one way to live it today. Start with James if you need a place.',minutes:20,proof:'A passage reference + one application.'},
  {id:'prayer',pillar:'faith',title:'Make room for prayer',detail:'Put your phone away. Give thanks, speak honestly about what you are facing, and pray for someone else.',minutes:10,proof:'Uninterrupted time in prayer.'},
  {id:'fellowship',pillar:'faith',title:'Take a step into Christian community',detail:'Check your church’s service, small-group, or volunteer information. Choose one gathering and plan how you will attend.',minutes:15,proof:'One gathering selected and scheduled.'},
  {id:'serve',pillar:'faith',title:'Put faith into service',detail:'Ask a family member what would help, or choose a practical act of service. Do it without making it about recognition.',minutes:30,proof:'One act of service completed.'},
  {id:'groom',pillar:'presence',title:'Get ready like you have somewhere to be',detail:'Shower, groom, wear clean clothes, and reset your room. Use what you own; this does not require shopping.',minutes:20,proof:'Ready for the day + a clean space.'},
  {id:'speak',pillar:'presence',title:'Practice speaking with clarity',detail:'Record a one-minute introduction. Listen once. Remove filler, slow down, and record a clearer second version.',minutes:15,proof:'A clearer second recording.'},
  {id:'composure',pillar:'presence',title:'Practice calm attention',detail:'Spend five minutes without a screen. Then approach one task slowly and deliberately instead of rushing between distractions.',minutes:5,proof:'Five uninterrupted minutes.'},
  {id:'promise',pillar:'presence',title:'Keep an overdue promise',detail:'Choose a small commitment you have left hanging. Finish it or communicate honestly about when you can.',minutes:15,proof:'One promise addressed.'},
  {id:'family',pillar:'relationships',title:'Give someone your full attention',detail:'Call or sit with someone you care about. Ask a real question and listen without scrolling.',minutes:20,proof:'One undistracted conversation.'},
  {id:'invite',pillar:'relationships',title:'Initiate a real plan',detail:'Invite a friend to a walk, meal, workout, or local activity. Suggest a specific day and a plan that fits your budget.',minutes:10,proof:'One thoughtful invitation sent by you.'},
  {id:'new-person',pillar:'relationships',title:'Meet someone through a shared interest',detail:'Attend a class, volunteer session, church group, or founder gathering. Introduce yourself and ask about their interest; respect whether they want to talk.',minutes:60,proof:'One genuine conversation, with no pressure.'},
  {id:'follow-up',pillar:'relationships',title:'Follow up with someone you met',detail:'Reference something you actually discussed. Ask a thoughtful question or suggest staying in touch.',minutes:5,proof:'One personal follow-up sent by you.'},
  {id:'local',pillar:'experiences',title:'Choose somewhere new this week',detail:'Open Explore Miami, choose a place, verify its hours and cost, and put a date on it.',minutes:15,proof:'One outing on your plan.'},
  {id:'new-skill',pillar:'experiences',title:'Try a beginner experience',detail:'Choose a library workshop, recreation class, art activity, or beginner group. Go to participate, not to perform.',minutes:60,proof:'One new experience tried.'},
  {id:'neighborhood',pillar:'experiences',title:'Explore a different neighborhood',detail:'Pick a public trail, park, or cultural district. Decide your route and transport before leaving; notice something new.',minutes:60,proof:'One new place + one observation.'},
];
export type LocalPlace = {
  id: string;
  area: string;
  kind: 'Dining' | 'Outdoors' | 'Tourist' | 'Local';
  title: string;
  detail: string;
  mission: string;
  url: string;
  source: string;
  cost: string;
  minutes: number;
};
export const PLACES: LocalPlace[] = [
  {id:'versailles',area:'Little Havana',kind:'Dining',title:'Versailles Restaurant',detail:'Try a classic Cuban meal and spend time around Calle Ocho instead of making it a quick food stop.',mission:'Eat at Versailles and walk part of Calle Ocho',url:'https://www.versaillesrestaurant.com/',source:'Versailles',cost:'Meal + transport',minutes:90},
  {id:'zak-baker',area:'Wynwood',kind:'Dining',title:'Zak the Baker',detail:'Grab breakfast or lunch at the Wynwood bakery, then walk the surrounding arts district.',mission:'Try Zak the Baker and explore Wynwood',url:'https://zakthebaker.com/',source:'Zak the Baker',cost:'Meal + transport',minutes:90},
  {id:'citadel',area:'Little River',kind:'Dining',title:'The Citadel',detail:'Explore a local food hall with multiple Miami vendors and make the outing about trying something new.',mission:'Try a new vendor at The Citadel',url:'https://www.thecitadelmiami.com/',source:'The Citadel',cost:'Meal + transport',minutes:90},
  {id:'bill-baggs',area:'Key Biscayne',kind:'Outdoors',title:'Bill Baggs Cape Florida State Park',detail:'Plan a beach, lighthouse, walking, or biking day at the south end of Key Biscayne.',mission:'Spend an outdoor day at Bill Baggs Cape Florida',url:'https://www.floridastateparks.org/parks-and-trails/bill-baggs-cape-florida-state-park',source:'Florida State Parks',cost:'Check park fee + transport',minutes:180},
  {id:'kampong',area:'Coconut Grove',kind:'Outdoors',title:'The Kampong',detail:'Visit the tropical botanical garden and slow down enough to actually explore the grounds.',mission:'Explore The Kampong',url:'https://ntbg.org/gardens/kampong/',source:'National Tropical Botanical Garden',cost:'Check admission + reservation',minutes:120},
  {id:'matheson',area:'Coral Gables',kind:'Outdoors',title:'Matheson Hammock Park',detail:'Use the waterfront park for a walk, picnic, or low-key outdoor reset away from the usual routine.',mission:'Take a Matheson Hammock outdoor day',url:'https://www.miamidade.gov/parks/matheson-hammock.asp',source:'Miami-Dade County',cost:'Check parking + transport',minutes:120},
  {id:'vizcaya',area:'Coconut Grove',kind:'Tourist',title:'Vizcaya Museum & Gardens',detail:'Explore the historic estate, gardens, architecture, and Biscayne Bay views.',mission:'Visit Vizcaya and note three things that stand out',url:'https://vizcaya.org/',source:'Vizcaya Museum & Gardens',cost:'Admission + transport',minutes:150},
  {id:'wynwood-walls',area:'Wynwood',kind:'Tourist',title:'Wynwood Walls',detail:'See the outdoor murals and use the visit as a starting point to explore more of Wynwood on foot.',mission:'Visit Wynwood Walls and explore the district',url:'https://thewynwoodwalls.com/',source:'Wynwood Walls',cost:'Check admission + transport',minutes:120},
  {id:'pamm',area:'Downtown Miami',kind:'Tourist',title:'Pérez Art Museum Miami',detail:'Spend time with modern and contemporary art, then walk the waterfront around Maurice A. Ferré Park.',mission:'Visit PAMM and walk the waterfront',url:'https://www.pamm.org/',source:'Pérez Art Museum Miami',cost:'Admission + transport',minutes:150},
  {id:'little-havana',area:'Little Havana',kind:'Local',title:'Little Havana / Calle Ocho',detail:'Walk Calle Ocho, stop for Cuban coffee, see Domino Park, and experience the neighborhood beyond one destination.',mission:'Spend an afternoon exploring Little Havana',url:'https://www.miamiandbeaches.com/neighborhoods/little-havana',source:'Greater Miami & Miami Beach',cost:'Flexible / transport + food',minutes:150},
  {id:'design-district',area:'Design District',kind:'Local',title:'Miami Design District',detail:'Walk the district for architecture, public art, shops, galleries, and people-watching without needing a shopping agenda.',mission:'Explore the Miami Design District on foot',url:'https://www.miamidesigndistrict.com/',source:'Miami Design District',cost:'Free to explore / transport extra',minutes:120},
  {id:'lincoln-road',area:'Miami Beach',kind:'Local',title:'Lincoln Road',detail:'Walk the pedestrian district, browse galleries and shops, and stop somewhere new to eat or people-watch.',mission:'Explore Lincoln Road without rushing',url:'https://www.lincolnroad.com/',source:'Lincoln Road',cost:'Free to explore / food optional',minutes:120},
];
export function recentDays(end: string) { const [y,m,d]=end.split('-').map(Number); return Array.from({length:7},(_,i)=>{const date=new Date(y,m-1,d-i,12);return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}); }
export function weeklyPillarDays(missions: Mission[], end: string, pillar: Pillar) { const dates=new Set(recentDays(end));return new Set(missions.filter(m=>m.done&&m.pillar===pillar&&dates.has(m.completedOn||m.date)).map(m=>m.completedOn||m.date)).size; }
