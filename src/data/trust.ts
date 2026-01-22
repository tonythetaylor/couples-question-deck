import type { Question } from "../domain/types";

export const TRUST_QUESTIONS_APPEND: Question[] = [
  {
    id: "trust-1",
    category: "trust",
    tone: "gentle",
    intensity: 1,
    tags: ["trust", "baseline"],
    prompt: "What helps you feel safe enough to trust someone over time?",
    notes: "Maps trust inputs: consistency, honesty, care, reliability."
  },
  {
    id: "trust-2",
    category: "trust",
    tone: "neutral",
    intensity: 1,
    tags: ["trust", "definition"],
    prompt: "When you say “trust,” what does that actually mean to you in real life?",
    notes: "Forces an operational definition instead of a vibe."
  },
  {
    id: "trust-3",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["trust", "signals"],
    prompt: "What are the earliest signs that someone is trustworthy to you?",
    notes: "Identifies their trust heuristics."
  },
  {
    id: "trust-4",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["trust", "signals"],
    prompt: "What are the earliest signs that someone is not trustworthy to you?",
    notes: "Clarifies red flags and sensitivity points."
  },
  {
    id: "trust-5",
    category: "trust",
    tone: "gentle",
    intensity: 1,
    tags: ["trust", "history"],
    prompt: "How has your past shaped the way you give or withhold trust now?",
    notes: "Explores context without forcing disclosure."
  },

  // Honesty & transparency
  {
    id: "trust-6",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["honesty", "communication"],
    prompt: "Do you prefer full transparency, or do you believe some things are private even in partnership?",
    notes: "Clarifies privacy vs secrecy expectations."
  },
  {
    id: "trust-7",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["honesty", "avoidance"],
    prompt: "What truth do you find hardest to say out loud to a partner?",
    notes: "High-signal. Watch for avoidance or honesty."
  },
  {
    id: "trust-8",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["honesty", "timing"],
    prompt: "When you know a difficult truth, do you share it immediately or wait until the moment feels safer?",
    notes: "Predicts conflict timing and avoidance patterns."
  },
  {
    id: "trust-9",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["honesty", "accountability"],
    prompt: "What would make you feel like someone is being dishonest even if they’re not lying?",
    notes: "Defines “dishonesty” beyond lies: omissions, tone, inconsistency."
  },
  {
    id: "trust-10",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["honesty", "boundaries"],
    prompt: "Where do you draw the line between privacy and secrecy?",
    notes: "Very practical and clarifying."
  },

  // Consistency & reliability
  {
    id: "trust-11",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["reliability", "consistency"],
    prompt: "What does reliability look like to you day-to-day?",
    notes: "Consistency is trust’s oxygen."
  },
  {
    id: "trust-12",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["reliability", "follow_through"],
    prompt: "How important is follow-through compared to good intentions for you?",
    notes: "Measures evidence-based trust."
  },
  {
    id: "trust-13",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["reliability", "broken_promises"],
    prompt: "What kind of broken promise is hardest for you to recover from?",
    notes: "Identifies unforgivable categories."
  },
  {
    id: "trust-14",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["reliability", "patterns"],
    prompt: "When someone disappoints you, what matters more: the reason or the pattern?",
    notes: "Shows how they process hurt."
  },
  {
    id: "trust-15",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["reliability", "standards"],
    prompt: "What do you consider ‘bare minimum’ behavior in a relationship?",
    notes: "Clarifies standards so no one plays dumb later."
  },

  // Integrity & character
  {
    id: "trust-16",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["integrity", "values"],
    prompt: "What does integrity look like when no one is watching?",
    notes: "Reveals values and character model."
  },
  {
    id: "trust-17",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["integrity", "temptation"],
    prompt: "What kinds of temptations test your integrity the most?",
    notes: "High-signal, but not accusatory."
  },
  {
    id: "trust-18",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["integrity", "principles"],
    prompt: "What principle do you refuse to break even when it costs you something?",
    notes: "Maps deep values."
  },
  {
    id: "trust-19",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["integrity", "growth"],
    prompt: "How do you handle it when you realize you’ve been unfair or wrong?",
    notes: "Integrity includes repair."
  },
  {
    id: "trust-20",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["integrity", "self_image"],
    prompt: "What part of your character are you most protective of?",
    notes: "Reveals identity and potential defensiveness triggers."
  },

  // Jealousy, insecurity, reassurance
  {
    id: "trust-21",
    category: "trust",
    tone: "gentle",
    intensity: 1,
    tags: ["jealousy", "reassurance"],
    prompt: "When you feel insecure, what kind of reassurance actually helps?",
    notes: "Prevents mind-reading."
  },
  {
    id: "trust-22",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["jealousy", "triggers"],
    prompt: "What tends to trigger jealousy for you: secrecy, distance, attention, or comparison?",
    notes: "Maps triggers without blame."
  },
  {
    id: "trust-23",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["jealousy", "behavior"],
    prompt: "When jealousy shows up, how do you want to handle it without controlling your partner?",
    notes: "High-signal: autonomy and self-regulation."
  },
  {
    id: "trust-24",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["reassurance", "communication"],
    prompt: "Do you prefer reassurance through words, actions, or time and consistency?",
    notes: "Maps their trust language."
  },
  {
    id: "trust-25",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["jealousy", "boundaries"],
    prompt: "What reassurance crosses the line into enabling or babysitting?",
    notes: "Defines healthy support limits."
  },

  // Conflict & trust under stress
  {
    id: "trust-26",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["conflict", "trust"],
    prompt: "What happens to your trust when you’re angry or hurt?",
    notes: "Measures stability under stress."
  },
  {
    id: "trust-27",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["conflict", "damage"],
    prompt: "What words or behaviors permanently change how you see a person?",
    notes: "Identifies irreversible trust breakers."
  },
  {
    id: "trust-28",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["conflict", "repair"],
    prompt: "After conflict, what helps you feel safe again?",
    notes: "Creates an actionable repair path."
  },
  {
    id: "trust-29",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["conflict", "accountability"],
    prompt: "When conflict happens, what do you do that makes trust harder to rebuild?",
    notes: "Self-awareness test."
  },
  {
    id: "trust-30",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["conflict", "accountability"],
    prompt: "When conflict happens, what do you think I do that makes trust harder to rebuild?",
    notes: "Mutual reality check. Watch for contempt vs clarity."
  },

  // Trust behaviors: phones, social media, boundaries
  {
    id: "trust-31",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["privacy", "phones"],
    prompt: "How do you feel about phone privacy in a relationship?",
    notes: "Clarifies norms: access vs boundaries."
  },
  {
    id: "trust-32",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["privacy", "control"],
    prompt: "At what point does ‘checking’ become controlling for you?",
    notes: "Draws a clear line."
  },
  {
    id: "trust-33",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["social", "boundaries"],
    prompt: "What boundaries feel important with friends or exes while in a committed relationship?",
    notes: "Compatibility check without accusation."
  },
  {
    id: "trust-34",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["social", "integrity"],
    prompt: "What’s something that looks innocent to some people but feels like a betrayal to you?",
    notes: "Defines personal betrayal thresholds."
  },
  {
    id: "trust-35",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["communication", "transparency"],
    prompt: "What do you believe partners owe each other in terms of updates and transparency?",
    notes: "Sets expectations around communication."
  },

  // Repairing trust
  {
    id: "trust-36",
    category: "trust",
    tone: "gentle",
    intensity: 1,
    tags: ["repair", "trust"],
    prompt: "When trust is shaken, what first step helps you feel grounded again?",
    notes: "Low pressure, practical start."
  },
  {
    id: "trust-37",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["repair", "trust"],
    prompt: "Do you rebuild trust through time, through actions, through conversation, or all three?",
    notes: "Maps repair preference."
  },
  {
    id: "trust-38",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["repair", "evidence"],
    prompt: "What specific behaviors would prove to you that trust is being rebuilt?",
    notes: "Turns trust into measurable evidence."
  },
  {
    id: "trust-39",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["repair", "limits"],
    prompt: "What’s something you can forgive, but you can’t forget?",
    notes: "Reveals permanent scar tissue areas."
  },
  {
    id: "trust-40",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["repair", "boundaries"],
    prompt: "What boundaries help you rebuild trust without resentment?",
    notes: "Prevents rebuilding from turning into punishment."
  },

  // Self-trust & accountability
  {
    id: "trust-41",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["self_trust", "accountability"],
    prompt: "How do you know when you can trust your own judgment about a person?",
    notes: "Self-trust influences relationship stability."
  },
  {
    id: "trust-42",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["self_trust", "patterns"],
    prompt: "What pattern in yourself has made trust harder in past relationships?",
    notes: "Ownership without shame."
  },
  {
    id: "trust-43",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["accountability", "truth"],
    prompt: "What do you do when you realize you’ve been interpreting things in the worst possible way?",
    notes: "Tests cognitive flexibility and repair."
  },
  {
    id: "trust-44",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["accountability", "repair"],
    prompt: "When you mess up, what do you do to make it right without making excuses?",
    notes: "Integrity is repair plus behavior change."
  },
  {
    id: "trust-45",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["accountability", "feedback"],
    prompt: "How do you want a partner to bring concerns to you so you don’t feel attacked?",
    notes: "Creates a safe channel for truth."
  },

  // Future-proofing trust
  {
    id: "trust-46",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["future", "agreements"],
    prompt: "What agreement would make you feel more secure in this relationship?",
    notes: "Turns insecurity into a solvable problem."
  },
  {
    id: "trust-47",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["future", "dealbreakers"],
    prompt: "What is a trust dealbreaker for you, even if everything else is good?",
    notes: "Hard boundary clarity."
  },
  {
    id: "trust-48",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["future", "expectations"],
    prompt: "What expectations do you have around loyalty, and how do you define it?",
    notes: "Loyalty means different things to different people."
  },
  {
    id: "trust-49",
    category: "trust",
    tone: "direct",
    intensity: 3,
    tags: ["future", "clarity"],
    prompt: "What’s one thing you need to know about me to feel fully settled in trusting me?",
    notes: "High-signal: asks for the missing piece."
  },
  {
    id: "trust-50",
    category: "trust",
    tone: "neutral",
    intensity: 2,
    tags: ["future", "maintenance"],
    prompt: "What habits should we build to maintain trust before it gets tested?",
    notes: "Prevention mindset. Trust as maintenance, not emergency response."
  }
];