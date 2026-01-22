import type { Question } from "../domain/types";

export const COLIVING_QUESTIONS_APPEND: Question[] = [
  {
    id: "coliving-1",
    category: "co_living",
    tone: "gentle",
    intensity: 1,
    tags: ["co_living", "vision"],
    prompt: "When you picture living together, what does a normal weekday look like?",
    notes: "Forces day-to-day realism instead of fantasy."
  },
  {
    id: "coliving-2",
    category: "co_living",
    tone: "neutral",
    intensity: 1,
    tags: ["co_living", "routines"],
    prompt: "What routines do you need to feel settled at home?",
    notes: "Maps baseline needs: quiet, order, structure, spontaneity."
  },
  {
    id: "coliving-3",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["co_living", "space"],
    prompt: "What parts of your home life feel most personal to you?",
    notes: "Identifies ‘do not touch’ zones before conflict."
  },
  {
    id: "coliving-4",
    category: "co_living",
    tone: "gentle",
    intensity: 1,
    tags: ["co_living", "comfort"],
    prompt: "What makes a home feel peaceful to you?",
    notes: "Defines peace: quiet, cleanliness, warmth, predictability."
  },
  {
    id: "coliving-5",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["co_living", "stress"],
    prompt: "What makes a home feel stressful to you?",
    notes: "Finds triggers: clutter, noise, unpredictability, mess."
  },

  // Cleanliness & clutter
  {
    id: "coliving-6",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["cleanliness", "standards"],
    prompt: "How would you describe your cleanliness standard: tidy, clean, or spotless?",
    notes: "Calibrates standards early."
  },
  {
    id: "coliving-7",
    category: "co_living",
    tone: "direct",
    intensity: 2,
    tags: ["cleanliness", "conflict"],
    prompt: "What household mess bothers you the fastest?",
    notes: "Pinpoints high-friction points."
  },
  {
    id: "coliving-8",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["clutter", "habits"],
    prompt: "What kinds of clutter do you tolerate, and what kinds do you not tolerate?",
    notes: "Defines practical thresholds."
  },
  {
    id: "coliving-9",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["cleanliness", "accountability"],
    prompt: "If we lived together, what would you need me to consistently do so you don’t feel like you’re carrying the home?",
    notes: "Prevents unspoken resentment."
  },
  {
    id: "coliving-10",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["cleanliness", "accountability"],
    prompt: "If we lived together, what would you need yourself to consistently do so the home feels stable?",
    notes: "Tests self-expectations, not just demands."
  },

  // Chores & division of labor
  {
    id: "coliving-11",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["chores", "division_of_labor"],
    prompt: "Do you prefer splitting chores equally, or splitting by strengths and preferences?",
    notes: "Reveals fairness model."
  },
  {
    id: "coliving-12",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["chores", "ownership"],
    prompt: "Which chores do you want full ownership of, and which do you never want to touch?",
    notes: "Makes roles explicit."
  },
  {
    id: "coliving-13",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["chores", "schedule"],
    prompt: "Do you like chores done on a schedule, or as-needed?",
    notes: "Prevents style conflict."
  },
  {
    id: "coliving-14",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["chores", "conflict"],
    prompt: "When chores aren’t done, do you tend to ask, hint, get resentful, or just do it yourself?",
    notes: "Predicts escalation patterns."
  },
  {
    id: "coliving-15",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["chores", "repair"],
    prompt: "If one of us is slipping at home, what’s the best way to address it without it turning into a fight?",
    notes: "Creates a repair protocol."
  },

  // Money in the house
  {
    id: "coliving-16",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["money", "bills"],
    prompt: "How do you think household bills should be handled: 50/50, income-based, or by responsibilities?",
    notes: "Defines fairness structure."
  },
  {
    id: "coliving-17",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["money", "planning"],
    prompt: "Do you prefer a shared budget, separate budgets, or a hybrid approach?",
    notes: "Compatibility check."
  },
  {
    id: "coliving-18",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["money", "stress"],
    prompt: "If money gets tight, what changes first in the household, and who decides?",
    notes: "Power and stress test."
  },
  {
    id: "coliving-19",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["money", "boundaries"],
    prompt: "What financial behavior in a shared home would feel irresponsible to you?",
    notes: "Hard boundary definition."
  },
  {
    id: "coliving-20",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["money", "transparency"],
    prompt: "How transparent do you want finances to be if we share a home?",
    notes: "Clarifies expectations without assumptions."
  },

  // Guests & social life
  {
    id: "coliving-21",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["guests", "boundaries"],
    prompt: "How do you feel about guests coming over without a heads-up?",
    notes: "Common co-living conflict area."
  },
  {
    id: "coliving-22",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["guests", "frequency"],
    prompt: "How often do you like having people over at home?",
    notes: "Introvert/extrovert alignment."
  },
  {
    id: "coliving-23",
    category: "co_living",
    tone: "direct",
    intensity: 2,
    tags: ["guests", "rules"],
    prompt: "What are your rules around friends or family staying overnight?",
    notes: "Defines policy before the first argument."
  },
  {
    id: "coliving-24",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["guests", "privacy"],
    prompt: "What guest situation would make you feel disrespected in your own home?",
    notes: "Identifies non-negotiables."
  },
  {
    id: "coliving-25",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["hosting", "labor"],
    prompt: "When guests come over, who does the ‘hosting labor’ and what feels fair?",
    notes: "Prevents invisible workload."
  },

  // Sleep & quiet hours
  {
    id: "coliving-26",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["sleep", "routines"],
    prompt: "What’s your sleep schedule like, and how strict is it?",
    notes: "Sleep mismatch is underrated relationship friction."
  },
  {
    id: "coliving-27",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["noise", "quiet_hours"],
    prompt: "How important are quiet hours to you at home?",
    notes: "Noise tolerance alignment."
  },
  {
    id: "coliving-28",
    category: "co_living",
    tone: "direct",
    intensity: 2,
    tags: ["sleep", "conflict"],
    prompt: "What bedtime habit would annoy you the most if we shared a room?",
    notes: "Prevents small irritations from compounding."
  },
  {
    id: "coliving-29",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["sleep", "boundaries"],
    prompt: "What do you need at night to feel calm and safe at home?",
    notes: "Safety rituals, not just comfort."
  },
  {
    id: "coliving-30",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["sleep", "solutions"],
    prompt: "How do you prefer to handle sleep conflicts: compromise, separate routines, or separate spaces?",
    notes: "Practical compatibility."
  },

  // Food, kitchen, groceries
  {
    id: "coliving-31",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["food", "kitchen"],
    prompt: "How do you like the kitchen to be kept day-to-day?",
    notes: "Kitchen standards are a major friction point."
  },
  {
    id: "coliving-32",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["groceries", "planning"],
    prompt: "Do you prefer planned meals, or flexible eating and ordering out?",
    notes: "Lifestyle and spending alignment."
  },
  {
    id: "coliving-33",
    category: "co_living",
    tone: "direct",
    intensity: 2,
    tags: ["food", "boundaries"],
    prompt: "What food or grocery habit would drive you crazy in a shared home?",
    notes: "Prevents repeated irritation."
  },
  {
    id: "coliving-34",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["groceries", "fairness"],
    prompt: "How should groceries be handled: shared, separated, or hybrid?",
    notes: "Defines practical policy."
  },
  {
    id: "coliving-35",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["food", "respect"],
    prompt: "What would feel disrespectful around food, leftovers, or shared items?",
    notes: "Defines micro-respect behaviors."
  },

  // Space ownership & personal areas
  {
    id: "coliving-36",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["space", "privacy"],
    prompt: "Do you need a personal space that’s truly yours, even if we live together?",
    notes: "Important for independence and regulation."
  },
  {
    id: "coliving-37",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["space", "home_office"],
    prompt: "How should we handle work-from-home space and interruptions?",
    notes: "Prevents daily operational friction."
  },
  {
    id: "coliving-38",
    category: "co_living",
    tone: "direct",
    intensity: 2,
    tags: ["space", "boundaries"],
    prompt: "What’s a ‘do not touch’ category for you in a shared space?",
    notes: "Clarifies personal property boundaries."
  },
  {
    id: "coliving-39",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["space", "control"],
    prompt: "What home decision would you struggle to share control over?",
    notes: "Power-sharing test."
  },
  {
    id: "coliving-40",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["space", "standards"],
    prompt: "What home standard would you refuse to compromise on?",
    notes: "Non-negotiable co-living compatibility."
  },

  // Parenting & kid-related ops (kept neutral and respectful)
  {
    id: "coliving-41",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["kids", "structure"],
    prompt: "What household structure feels important when a child is in the home?",
    notes: "Surfaces routines, expectations, stability needs."
  },
  {
    id: "coliving-42",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["kids", "roles"],
    prompt: "How do you imagine a partner fitting into the household when a child is involved?",
    notes: "Role clarity without overstepping."
  },
  {
    id: "coliving-43",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["kids", "boundaries"],
    prompt: "What boundaries matter most to you around parenting decisions and authority in the home?",
    notes: "High-signal. Prevents future conflict."
  },
  {
    id: "coliving-44",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["kids", "respect"],
    prompt: "What would feel disrespectful to you in how a partner interacts with your child or parenting routines?",
    notes: "Defines unacceptable behaviors early."
  },
  {
    id: "coliving-45",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["kids", "logistics"],
    prompt: "What practical support feels helpful in a home with a child, and what feels intrusive?",
    notes: "Separates care from control."
  },

  // Conflict protocols & household governance
  {
    id: "coliving-46",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["governance", "conflict"],
    prompt: "How should we handle household decisions when we disagree?",
    notes: "Defines process: discuss, vote, take turns, defer by domain."
  },
  {
    id: "coliving-47",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["governance", "fairness"],
    prompt: "In a shared home, what does fairness look like to you in practice?",
    notes: "Forces concrete definition, not vibes."
  },
  {
    id: "coliving-48",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["conflict", "repair"],
    prompt: "If a home argument happens, what do we do so the house doesn’t feel tense for days?",
    notes: "Creates a repair ritual specific to shared space."
  },
  {
    id: "coliving-49",
    category: "co_living",
    tone: "direct",
    intensity: 3,
    tags: ["commitment", "readiness"],
    prompt: "What needs to be true before living together becomes a healthy decision for us?",
    notes: "Readiness filter. Prevents premature cohabitation."
  },
  {
    id: "coliving-50",
    category: "co_living",
    tone: "neutral",
    intensity: 2,
    tags: ["co_living", "success"],
    prompt: "How would we know co-living is working well after the first 60 days?",
    notes: "Sets measurable signals instead of guessing."
  }
];