import type { Question } from "../domain/types";

export const BOUNDARIES_QUESTIONS_APPEND: Question[] = [
  {
    id: "boundaries-1",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["boundaries", "self_awareness"],
    prompt: "What kinds of boundaries feel easiest for you to set?",
    notes: "Reveals comfort zones and baseline boundary skill."
  },
  {
    id: "boundaries-2",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["boundaries", "self_awareness"],
    prompt: "What kinds of boundaries feel hardest for you to set?",
    notes: "Identifies fear points: conflict, rejection, guilt."
  },
  {
    id: "boundaries-3",
    category: "boundaries",
    tone: "neutral",
    intensity: 1,
    tags: ["boundaries", "respect"],
    prompt: "How do you usually know when a boundary has been crossed?",
    notes: "Tests internal signals vs external blame."
  },
  {
    id: "boundaries-4",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["boundaries", "communication"],
    prompt: "How comfortable are you saying no without explaining yourself?",
    notes: "Reveals people-pleasing vs self-trust."
  },
  {
    id: "boundaries-5",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["boundaries", "patterns"],
    prompt: "What boundary do you tend to notice only after it’s already been crossed?",
    notes: "Highlights reactive vs proactive boundary setting."
  },
  {
    id: "boundaries-6",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["boundaries", "conflict"],
    prompt: "When someone sets a boundary with you, what’s your first internal reaction?",
    notes: "Checks defensiveness vs respect."
  },
  {
    id: "boundaries-7",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["boundaries", "repair"],
    prompt: "What helps you feel respected when a boundary needs to be reinforced?",
    notes: "Guides healthy repetition instead of escalation."
  },
  {
    id: "boundaries-8",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["boundaries", "communication"],
    prompt: "How do you prefer boundaries to be communicated: early, gently, or clearly and direct?",
    notes: "Prevents mismatched delivery styles."
  },
  {
    id: "boundaries-9",
    category: "boundaries",
    tone: "direct",
    intensity: 2,
    tags: ["boundaries", "ownership"],
    prompt: "What boundary of yours have you avoided stating because you hoped it wouldn’t be needed?",
    notes: "Surfaces silent contracts."
  },
  {
    id: "boundaries-10",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["boundaries", "honesty"],
    prompt: "What boundary do you struggle to honor when it inconveniences you?",
    notes: "High-signal integrity check."
  },

  // Agreements & expectations
  {
    id: "boundaries-11",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["agreements", "expectations"],
    prompt: "What agreements make you feel safest in a relationship?",
    notes: "Identifies stabilizing structures."
  },
  {
    id: "boundaries-12",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["agreements", "clarity"],
    prompt: "How do you usually clarify expectations before they turn into resentment?",
    notes: "Checks proactive communication habits."
  },
  {
    id: "boundaries-13",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["agreements", "change"],
    prompt: "How do you feel about renegotiating agreements once they’re no longer working?",
    notes: "Tests flexibility vs rigidity."
  },
  {
    id: "boundaries-14",
    category: "boundaries",
    tone: "direct",
    intensity: 2,
    tags: ["agreements", "follow_through"],
    prompt: "What makes an agreement feel binding to you?",
    notes: "Reveals values around commitment."
  },
  {
    id: "boundaries-15",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["agreements", "accountability"],
    prompt: "What do you do when you realize you’ve broken an agreement?",
    notes: "Repair behavior > intentions."
  },

  // Time, space, autonomy
  {
    id: "boundaries-16",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["time", "autonomy"],
    prompt: "How much alone time do you need to feel like yourself?",
    notes: "Normalizes autonomy needs."
  },
  {
    id: "boundaries-17",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["time", "balance"],
    prompt: "How do you balance togetherness and independence?",
    notes: "Compatibility signal."
  },
  {
    id: "boundaries-18",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["space", "regulation"],
    prompt: "What happens for you when you don’t get enough space?",
    notes: "Identifies escalation risk."
  },
  {
    id: "boundaries-19",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["time", "respect"],
    prompt: "What makes you feel crowded or controlled in a relationship?",
    notes: "High-signal autonomy check."
  },
  {
    id: "boundaries-20",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["space", "pressure"],
    prompt: "What kind of closeness starts to feel like pressure to you?",
    notes: "Prevents intimacy from becoming coercive."
  },

  // Privacy & external relationships
  {
    id: "boundaries-21",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["privacy", "trust"],
    prompt: "How do you think about privacy within a relationship?",
    notes: "Defines baseline expectations."
  },
  {
    id: "boundaries-22",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["privacy", "phones"],
    prompt: "What feels private to you even inside a committed relationship?",
    notes: "Clarifies gray areas."
  },
  {
    id: "boundaries-23",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["friends", "family"],
    prompt: "How do you decide what stays between partners and what gets shared with others?",
    notes: "Prevents triangulation."
  },
  {
    id: "boundaries-24",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["exes", "trust"],
    prompt: "What boundaries do you believe are necessary around exes or past partners?",
    notes: "Hard compatibility signal."
  },
  {
    id: "boundaries-25",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["privacy", "integrity"],
    prompt: "What behavior would feel like a violation of trust even if it wasn’t explicitly forbidden?",
    notes: "Unspoken boundary detector."
  },

  // Conflict & enforcement
  {
    id: "boundaries-26",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["conflict", "repair"],
    prompt: "How do you usually enforce a boundary when it keeps getting tested?",
    notes: "Escalation strategy insight."
  },
  {
    id: "boundaries-27",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["conflict", "communication"],
    prompt: "What helps you stay calm when you need to restate a boundary?",
    notes: "Supports non-reactive enforcement."
  },
  {
    id: "boundaries-28",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["conflict", "patterns"],
    prompt: "What boundary conflicts tend to repeat in your relationships?",
    notes: "Pattern recognition."
  },
  {
    id: "boundaries-29",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["conflict", "accountability"],
    prompt: "When a boundary is crossed, what consequence feels fair to you?",
    notes: "Tests realism and self-respect."
  },
  {
    id: "boundaries-30",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["conflict", "respect"],
    prompt: "What boundary, if ignored, would make you reconsider the relationship?",
    notes: "Identifies true dealbreakers."
  },

  // Meta-boundaries
  {
    id: "boundaries-31",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["self_reflection"],
    prompt: "What boundary have you gotten better at setting over time?",
    notes: "Growth acknowledgment."
  },
  {
    id: "boundaries-32",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["learning"],
    prompt: "What did past relationships teach you about your boundaries?",
    notes: "Learning vs repeating."
  },
  {
    id: "boundaries-33",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["misalignment"],
    prompt: "How do you usually handle it when someone’s boundaries don’t match yours?",
    notes: "Compatibility vs control."
  },
  {
    id: "boundaries-34",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["control", "autonomy"],
    prompt: "Where do you think boundaries end and control begins?",
    notes: "High-level values check."
  },
  {
    id: "boundaries-35",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["self_respect"],
    prompt: "What boundary do you need to set more firmly in your life right now?",
    notes: "Action-oriented clarity."
  },

  // Relationship-specific
  {
    id: "boundaries-36",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["relationship"],
    prompt: "What boundary of yours do you hope I already respect?",
    notes: "Checks awareness."
  },
  {
    id: "boundaries-37",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["relationship"],
    prompt: "Is there a boundary you’d like us to clarify that we haven’t named yet?",
    notes: "Invites proactive alignment."
  },
  {
    id: "boundaries-38",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["relationship", "honesty"],
    prompt: "Is there a boundary you’re afraid to state because it might change how I see you?",
    notes: "High-signal vulnerability test."
  },
  {
    id: "boundaries-39",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["relationship", "risk"],
    prompt: "What boundary would you regret not setting if things went wrong between us?",
    notes: "Future-self perspective."
  },
  {
    id: "boundaries-40",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["relationship", "respect"],
    prompt: "What boundary of mine do you think deserves more care than you’ve given it?",
    notes: "Mutual accountability."
  },

  // Closing set
  {
    id: "boundaries-41",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["values"],
    prompt: "What does respecting boundaries say about how you value someone?",
    notes: "Values framing."
  },
  {
    id: "boundaries-42",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["trust"],
    prompt: "How do boundaries contribute to trust for you?",
    notes: "Connects structure to safety."
  },
  {
    id: "boundaries-43",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["intimacy"],
    prompt: "How do good boundaries affect emotional closeness for you?",
    notes: "Counters the myth that boundaries reduce intimacy."
  },
  {
    id: "boundaries-44",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["growth"],
    prompt: "What boundary would you like to be better at honoring?",
    notes: "Self-accountability."
  },
  {
    id: "boundaries-45",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["growth"],
    prompt: "What boundary do you hope I’ll help you uphold rather than test?",
    notes: "Tests partnership mindset."
  },
  {
    id: "boundaries-46",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["care"],
    prompt: "What helps you feel supported rather than restricted by boundaries?",
    notes: "Language calibration."
  },
  {
    id: "boundaries-47",
    category: "boundaries",
    tone: "neutral",
    intensity: 2,
    tags: ["respect"],
    prompt: "What boundary feels non-negotiable for your emotional health?",
    notes: "Identifies core protections."
  },
  {
    id: "boundaries-48",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["self_respect"],
    prompt: "What boundary, if ignored, would make you feel you were betraying yourself?",
    notes: "Deep self-trust signal."
  },
  {
    id: "boundaries-49",
    category: "boundaries",
    tone: "direct",
    intensity: 3,
    tags: ["future"],
    prompt: "What boundary do you want firmly in place before deepening this relationship?",
    notes: "Prevents premature escalation."
  },
  {
    id: "boundaries-50",
    category: "boundaries",
    tone: "gentle",
    intensity: 1,
    tags: ["reflection"],
    prompt: "What does a well-bounded relationship feel like to you?",
    notes: "Ends with integration and vision."
  }
];