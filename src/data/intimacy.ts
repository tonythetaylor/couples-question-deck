import type { Question } from "../domain/types";

export const INTIMACY_QUESTIONS_APPEND: Question[] = [
  // Emotional safety & closeness
  {
    id: "intimacy-1",
    category: "intimacy",
    tone: "gentle",
    intensity: 1,
    tags: ["emotional_safety"],
    prompt: "What helps you feel emotionally close to someone?",
    notes: "Maps emotional access points without pressure."
  },
  {
    id: "intimacy-2",
    category: "intimacy",
    tone: "neutral",
    intensity: 1,
    tags: ["connection"],
    prompt: "When do you feel most connected to a partner?",
    notes: "Reveals connection patterns: time, talk, touch, or presence."
  },
  {
    id: "intimacy-3",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["vulnerability"],
    prompt: "What makes it easier or harder for you to be vulnerable with someone?",
    notes: "Identifies gates to deeper intimacy."
  },
  {
    id: "intimacy-4",
    category: "intimacy",
    tone: "gentle",
    intensity: 1,
    tags: ["safety"],
    prompt: "What helps you feel safe enough to open up emotionally?",
    notes: "Safety precedes intimacy. This names the conditions."
  },
  {
    id: "intimacy-5",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["avoidance"],
    prompt: "What part of emotional closeness do you tend to pull away from?",
    notes: "High-signal avoidance map."
  },

  // Physical intimacy & consent
  {
    id: "intimacy-6",
    category: "intimacy",
    tone: "gentle",
    intensity: 1,
    tags: ["physical", "consent"],
    prompt: "What helps physical closeness feel comfortable and welcome for you?",
    notes: "Consent-forward framing."
  },
  {
    id: "intimacy-7",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["physical", "boundaries"],
    prompt: "How do you usually communicate physical boundaries?",
    notes: "Clarifies explicit vs implicit communication styles."
  },
  {
    id: "intimacy-8",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["physical", "pressure"],
    prompt: "What makes physical intimacy feel pressured instead of desired?",
    notes: "Critical for safety and mutuality."
  },
  {
    id: "intimacy-9",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["physical", "signals"],
    prompt: "What signals tell you that someone wants physical closeness?",
    notes: "Prevents guessing games."
  },
  {
    id: "intimacy-10",
    category: "intimacy",
    tone: "gentle",
    intensity: 1,
    tags: ["physical", "comfort"],
    prompt: "What kinds of physical affection feel most grounding to you?",
    notes: "Maps soothing vs stimulating touch."
  },

  // Desire & attraction
  {
    id: "intimacy-11",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["desire"],
    prompt: "What helps you feel desired by a partner?",
    notes: "Desire is emotional as well as physical."
  },
  {
    id: "intimacy-12",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["attraction"],
    prompt: "What tends to deepen attraction for you over time?",
    notes: "Shows whether attraction grows through safety, novelty, or effort."
  },
  {
    id: "intimacy-13",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["desire", "blockers"],
    prompt: "What tends to shut down your desire, even if you care about the person?",
    notes: "High-signal intimacy blocker."
  },
  {
    id: "intimacy-14",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["attraction", "energy"],
    prompt: "How does stress affect your desire for closeness or intimacy?",
    notes: "Stress-intimacy relationship."
  },
  {
    id: "intimacy-15",
    category: "intimacy",
    tone: "gentle",
    intensity: 1,
    tags: ["desire", "expression"],
    prompt: "How do you usually express desire when you’re feeling it?",
    notes: "Clarifies overt vs subtle expression."
  },

  // Emotional intimacy under stress
  {
    id: "intimacy-16",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["stress", "connection"],
    prompt: "When you’re overwhelmed, do you want closeness or space?",
    notes: "Key regulation-intimacy compatibility."
  },
  {
    id: "intimacy-17",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["stress", "misalignment"],
    prompt: "What happens when a partner wants closeness and you want distance?",
    notes: "Predicts push–pull cycles."
  },
  {
    id: "intimacy-18",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["repair", "intimacy"],
    prompt: "After conflict, what helps intimacy feel safe again?",
    notes: "Repair pathway for closeness."
  },
  {
    id: "intimacy-19",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["conflict", "damage"],
    prompt: "What kinds of conflict make intimacy feel unsafe for you?",
    notes: "Hard boundary clarity."
  },
  {
    id: "intimacy-20",
    category: "intimacy",
    tone: "gentle",
    intensity: 1,
    tags: ["repair", "patience"],
    prompt: "How much time do you usually need to feel close again after tension?",
    notes: "Prevents mismatched expectations."
  },

  // Vulnerability & sharing
  {
    id: "intimacy-21",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["vulnerability", "sharing"],
    prompt: "What kinds of things feel hardest for you to share about yourself?",
    notes: "Maps vulnerability edges."
  },
  {
    id: "intimacy-22",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["vulnerability", "fear"],
    prompt: "What do you fear might happen if you fully opened up?",
    notes: "High-signal fear map."
  },
  {
    id: "intimacy-23",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["sharing", "pace"],
    prompt: "How do you know when it’s the right time to share something personal?",
    notes: "Pacing awareness."
  },
  {
    id: "intimacy-24",
    category: "intimacy",
    tone: "gentle",
    intensity: 1,
    tags: ["listening"],
    prompt: "What helps you feel truly received when you share something vulnerable?",
    notes: "Listening preferences for intimacy."
  },
  {
    id: "intimacy-25",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["vulnerability", "shutdown"],
    prompt: "What makes you shut down instead of opening up?",
    notes: "Critical avoidance signal."
  },

  // Intimacy expectations & alignment
  {
    id: "intimacy-26",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["expectations"],
    prompt: "What expectations do you have around intimacy that you rarely say out loud?",
    notes: "Surfaces silent contracts."
  },
  {
    id: "intimacy-27",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["mismatch"],
    prompt: "What would make you feel chronically unmet in intimacy?",
    notes: "Dealbreaker detection."
  },
  {
    id: "intimacy-28",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["frequency"],
    prompt: "How do you think about frequency versus quality of intimacy?",
    notes: "Compatibility check."
  },
  {
    id: "intimacy-29",
    category: "intimacy",
    tone: "gentle",
    intensity: 1,
    tags: ["closeness"],
    prompt: "What small moments make you feel close without being sexual?",
    notes: "Broadens intimacy beyond sex."
  },
  {
    id: "intimacy-30",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["alignment"],
    prompt: "How do you want intimacy to evolve over time in a long-term partnership?",
    notes: "Future orientation."
  },

  // Trust + intimacy overlap
  {
    id: "intimacy-31",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["trust", "intimacy"],
    prompt: "What makes intimacy feel trusting rather than risky?",
    notes: "Bridges trust and closeness."
  },
  {
    id: "intimacy-32",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["trust", "fear"],
    prompt: "What fear shows up most strongly around intimacy for you?",
    notes: "High-signal emotional blocker."
  },
  {
    id: "intimacy-33",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["trust", "consistency"],
    prompt: "What consistency helps you relax into intimacy?",
    notes: "Predictable safety cues."
  },
  {
    id: "intimacy-34",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["trust", "betrayal"],
    prompt: "What kind of betrayal would make intimacy feel unsafe long-term?",
    notes: "Hard boundary clarity."
  },
  {
    id: "intimacy-35",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["trust", "repair"],
    prompt: "What helps intimacy return after trust has been shaken?",
    notes: "Repair roadmap."
  },

  // Self-awareness & growth
  {
    id: "intimacy-36",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["self_awareness"],
    prompt: "What have you learned about yourself through intimacy?",
    notes: "Reflective growth signal."
  },
  {
    id: "intimacy-37",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["growth", "edges"],
    prompt: "What part of intimacy are you actively working to grow into?",
    notes: "Intentional development."
  },
  {
    id: "intimacy-38",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["growth", "support"],
    prompt: "How can a partner support your growth around intimacy without pushing?",
    notes: "Support without coercion."
  },
  {
    id: "intimacy-39",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["growth", "accountability"],
    prompt: "What responsibility do you take for keeping intimacy healthy?",
    notes: "Ownership check."
  },
  {
    id: "intimacy-40",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["growth", "feedback"],
    prompt: "How do you want feedback about intimacy to be shared with you?",
    notes: "Prevents defensiveness."
  },

  // Long-term intimacy
  {
    id: "intimacy-41",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["long_term"],
    prompt: "What do you believe keeps intimacy alive long-term?",
    notes: "Values longevity."
  },
  {
    id: "intimacy-42",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["long_term", "erosion"],
    prompt: "What slowly erodes intimacy if no one pays attention?",
    notes: "Prevention mindset."
  },
  {
    id: "intimacy-43",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["long_term", "maintenance"],
    prompt: "What habits help intimacy feel steady rather than intense and sporadic?",
    notes: "Stability vs spikes."
  },
  {
    id: "intimacy-44",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["long_term", "fear"],
    prompt: "What worries you most about long-term closeness?",
    notes: "Attachment-level fear."
  },
  {
    id: "intimacy-45",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["long_term", "vision"],
    prompt: "How do you imagine intimacy changing as life gets more complex?",
    notes: "Future realism."
  },

  // Closing / integration
  {
    id: "intimacy-46",
    category: "intimacy",
    tone: "gentle",
    intensity: 1,
    tags: ["integration"],
    prompt: "What helps intimacy feel natural instead of effortful?",
    notes: "Ease vs labor."
  },
  {
    id: "intimacy-47",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["integration"],
    prompt: "What do you need more of to feel closer right now?",
    notes: "Present-moment calibration."
  },
  {
    id: "intimacy-48",
    category: "intimacy",
    tone: "direct",
    intensity: 3,
    tags: ["integration"],
    prompt: "What do you need less of to feel closer?",
    notes: "Boundary through subtraction."
  },
  {
    id: "intimacy-49",
    category: "intimacy",
    tone: "neutral",
    intensity: 2,
    tags: ["integration"],
    prompt: "What makes intimacy feel mutual rather than one-sided?",
    notes: "Equity check."
  },
  {
    id: "intimacy-50",
    category: "intimacy",
    tone: "gentle",
    intensity: 1,
    tags: ["integration", "closeness"],
    prompt: "What makes you feel quietly chosen?",
    notes: "Ends on warmth and safety."
  }
];