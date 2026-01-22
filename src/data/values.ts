import type { Question } from "../domain/types";

// --- NEW VALUES QUESTIONS (append after values-7) ---
export const VALUES_QUESTIONS_APPEND: Question[] = [
  {
    id: "values-8",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["priorities"],
    prompt: "What matters most to you right now, even if it wasn’t always that way?",
    notes: "Shows evolving values rather than static identity."
  },
  {
    id: "values-9",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["time"],
    prompt: "How you spend most of your time — does that reflect what you value?",
    notes: "Behavior vs stated values check."
  },
  {
    id: "values-10",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["tradeoffs"],
    prompt: "What are you willing to sacrifice for the life you want?",
    notes: "Values require tradeoffs; this exposes seriousness."
  },
  {
    id: "values-11",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["peace"],
    prompt: "What does a peaceful day look like to you?",
    notes: "Reveals emotional and lifestyle preferences."
  },
  {
    id: "values-12",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["growth"],
    prompt: "What kind of growth feels meaningful to you right now?",
    notes: "Distinguishes growth-for-show vs growth-for-life."
  },
  {
    id: "values-13",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["standards"],
    prompt: "What standard do you hold yourself to even when no one is watching?",
    notes: "Integrity under low accountability."
  },
  {
    id: "values-14",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["relationships"],
    prompt: "What makes a relationship worth investing in for you?",
    notes: "Filters seriousness vs convenience."
  },
  {
    id: "values-15",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["consistency"],
    prompt: "What value do you try hardest to live out consistently?",
    notes: "Tests alignment between identity and action."
  },
  {
    id: "values-16",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["boundaries"],
    prompt: "What value of yours has cost you something meaningful?",
    notes: "Real values have consequences."
  },
  {
    id: "values-17",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["balance"],
    prompt: "How do you balance ambition and contentment?",
    notes: "Lifestyle tension reveal."
  },
  {
    id: "values-18",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["success"],
    prompt: "What does success mean to you beyond money or titles?",
    notes: "Clarifies internal vs external metrics."
  },
  {
    id: "values-19",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["authenticity"],
    prompt: "Where do you feel pressure to be someone you’re not?",
    notes: "Reveals values under social strain."
  },
  {
    id: "values-20",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["home"],
    prompt: "What makes a place feel like home to you?",
    notes: "Lifestyle and emotional grounding."
  },
  {
    id: "values-21",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["ethics"],
    prompt: "What’s a line you won’t cross, even if it benefits you?",
    notes: "Moral boundary clarity."
  },
  {
    id: "values-22",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["choices"],
    prompt: "What choice are you most proud of making for yourself?",
    notes: "Reveals core self-respect value."
  },
  {
    id: "values-23",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["simplicity"],
    prompt: "What do you think is overrated in life?",
    notes: "Negative values reveal priorities."
  },
  {
    id: "values-24",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["responsibility"],
    prompt: "What do you feel personally responsible for in your life?",
    notes: "Ownership orientation."
  },
  {
    id: "values-25",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["truth"],
    prompt: "What truth do you refuse to ignore about yourself?",
    notes: "Self-honesty check."
  },
  {
    id: "values-26",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["freedom"],
    prompt: "What does freedom look like to you day-to-day?",
    notes: "Lifestyle autonomy definition."
  },
  {
    id: "values-27",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["legacy"],
    prompt: "What do you hope people feel after spending time with you?",
    notes: "Impact-focused value."
  },
  {
    id: "values-28",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["alignment"],
    prompt: "Where do you feel most out of alignment in your life?",
    notes: "Signals unresolved value conflict."
  },
  {
    id: "values-29",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["joy"],
    prompt: "What reliably brings you a sense of quiet joy?",
    notes: "Reveals sustainable happiness sources."
  },
  {
    id: "values-30",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["decision_making"],
    prompt: "How do you usually decide what’s ‘worth it’?",
    notes: "Decision framework insight."
  },
  {
    id: "values-31",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["boundaries"],
    prompt: "What have you stopped tolerating as you’ve grown?",
    notes: "Shows maturation of standards."
  },
  {
    id: "values-32",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["care"],
    prompt: "How do you show care when you’re stretched thin?",
    notes: "Values under pressure."
  },
  {
    id: "values-33",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["priorities"],
    prompt: "What tends to get deprioritized when life gets busy?",
    notes: "Reality check on values vs stress."
  },
  {
    id: "values-34",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["identity"],
    prompt: "What part of yourself do you refuse to compromise?",
    notes: "Core identity protection."
  },
  {
    id: "values-35",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["presence"],
    prompt: "What helps you feel most present in your life?",
    notes: "Attention as a value."
  },
  {
    id: "values-36",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["meaning"],
    prompt: "What makes effort feel meaningful to you?",
    notes: "Motivation alignment."
  },
  {
    id: "values-37",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["truth"],
    prompt: "What belief about life do you feel most certain about?",
    notes: "Foundational worldview."
  },
  {
    id: "values-38",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["contentment"],
    prompt: "What helps you feel ‘enough’?",
    notes: "Scarcity vs sufficiency."
  },
  {
    id: "values-39",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["work"],
    prompt: "What role does work play in your sense of identity?",
    notes: "Work-life value balance."
  },
  {
    id: "values-40",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["change"],
    prompt: "What value are you currently being challenged to live up to?",
    notes: "Active growth edge."
  },
  {
    id: "values-41",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["respect"],
    prompt: "What makes you feel respected?",
    notes: "Respect definition clarity."
  },
  {
    id: "values-42",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["trust"],
    prompt: "What behaviors build trust for you over time?",
    notes: "Trust as a value-in-action."
  },
  {
    id: "values-43",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["convictions"],
    prompt: "What conviction of yours has been tested the most?",
    notes: "Resilience of belief."
  },
  {
    id: "values-44",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["care"],
    prompt: "How do you want to show up for the people you love?",
    notes: "Relational value expression."
  },
  {
    id: "values-45",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["simplicity"],
    prompt: "What would you like your life to feel simpler around?",
    notes: "Clutter vs clarity."
  },
  {
    id: "values-46",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["non_negotiables"],
    prompt: "What’s a non-negotiable value you’ve learned the hard way?",
    notes: "Experience-shaped values."
  },
  {
    id: "values-47",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["belonging"],
    prompt: "Where do you feel most like yourself?",
    notes: "Environment + identity."
  },
  {
    id: "values-48",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["alignment"],
    prompt: "What tells you that you’re living in alignment?",
    notes: "Internal alignment signals."
  },
  {
    id: "values-49",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["legacy"],
    prompt: "What would you regret not standing for?",
    notes: "Values under mortality lens."
  },
  {
    id: "values-50",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["gratitude"],
    prompt: "What part of your life do you feel most grateful for right now?",
    notes: "Gratitude reveals priorities."
  },
  {
    id: "values-51",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["direction"],
    prompt: "What direction do you feel most drawn toward, even if it scares you?",
    notes: "Values + courage intersection."
  },
  {
    id: "values-52",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["boundaries"],
    prompt: "What boundary best protects what you value most?",
    notes: "Values operationalized."
  },
  {
    id: "values-53",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["care"],
    prompt: "How do you take care of what matters most to you?",
    notes: "Stewardship mindset."
  },
  {
    id: "values-54",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["truth"],
    prompt: "What truth about life have you accepted, even if you don’t like it?",
    notes: "Mature realism."
  },
  {
    id: "values-55",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["future"],
    prompt: "What would you want your future to feel like, not look like?",
    notes: "Emotional orientation over aesthetics."
  },
  {
    id: "values-56",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["stability"],
    prompt: "What helps you feel grounded when life feels uncertain?",
    notes: "Values under instability."
  },
  {
    id: "values-57",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["alignment"],
    prompt: "What would you change if you were living fully by your values?",
    notes: "Gap analysis."
  }
];