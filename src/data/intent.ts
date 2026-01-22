import type { Question } from "../domain/types";

// --- NEW INTENT QUESTIONS (append after intent-8) ---
export const INTENT_QUESTIONS_APPEND: Question[] = [
  {
    id: "intent-9",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["pace"],
    prompt: "What pace feels healthiest for you when you’re building something real with someone?",
    notes: "Surfaces pacing needs without pressure. Helps prevent forced closeness."
  },
  {
    id: "intent-10",
    category: "intent",
    tone: "neutral",
    intensity: 1,
    tags: ["clarity"],
    prompt: "What are you hoping this relationship becomes, in plain words?",
    notes: "Simple intent statement. Look for specificity vs vagueness."
  },
  {
    id: "intent-11",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["expectations"],
    prompt: "What expectations do you have of me right now that you haven’t said out loud?",
    notes: "Finds unspoken demands early. Prevents silent scorekeeping."
  },
  {
    id: "intent-12",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["security"],
    prompt: "What helps you feel secure in a relationship without needing constant reassurance?",
    notes: "Tests internal security and relational self-regulation."
  },
  {
    id: "intent-13",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["effort"],
    prompt: "What does consistent effort look like to you in the ‘normal’ weeks, not the special ones?",
    notes: "Defines baseline standards instead of highlight-reel moments."
  },
  {
    id: "intent-14",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["motivation"],
    prompt: "What are you getting from this relationship that you don’t want to lose?",
    notes: "Reveals attachment drivers: love, stability, convenience, validation, relief."
  },
  {
    id: "intent-15",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["labels"],
    prompt: "How important are labels to you, and what do you think labels should change in behavior?",
    notes: "Tests whether labels are status or structure."
  },
  {
    id: "intent-16",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["pressure"],
    prompt: "Do you ever feel pressure to be a certain way in relationships, and where does that pressure come from?",
    notes: "Shows whether they’re performing or being real."
  },
  {
    id: "intent-17",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["future"],
    prompt: "When you picture your life a year from now, what role do you honestly want a partner to play?",
    notes: "Future inclusion check, without forcing commitment talk."
  },
  {
    id: "intent-18",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["commitment"],
    prompt: "What are you unwilling to do for a relationship, even if you really like the person?",
    notes: "Shows boundaries and limits. Helps avoid false promises."
  },
  {
    id: "intent-19",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["priority"],
    prompt: "What tells you someone is a priority in your life, and do you think I can feel that from you?",
    notes: "Turns ‘priority’ into observable signals."
  },
  {
    id: "intent-20",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["consistency"],
    prompt: "What does consistency look like for you when you care about someone?",
    notes: "Defines consistency beyond texts and promises."
  },
  {
    id: "intent-21",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["needs"],
    prompt: "What need are you hoping this relationship meets for you right now?",
    notes: "Clarifies motive: companionship, safety, growth, support, validation."
  },
  {
    id: "intent-22",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["relief"],
    prompt: "Be honest: are you looking for a partner, or are you looking for relief from something?",
    notes: "High-signal motive check. Listen for self-awareness."
  },
  {
    id: "intent-23",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["alignment"],
    prompt: "What about me feels most aligned with what you want long-term?",
    notes: "Reveals what traits they’re choosing you for."
  },
  {
    id: "intent-24",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["values"],
    prompt: "What values do you want to be true in your relationship, even on bad days?",
    notes: "Values under stress predict durability."
  },
  {
    id: "intent-25",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["time"],
    prompt: "How much time together feels connecting to you, and how much starts to feel like losing yourself?",
    notes: "Maps closeness vs independence preferences."
  },
  {
    id: "intent-26",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["avoidance"],
    prompt: "What are you avoiding by staying busy in relationships?",
    notes: "Surfaces avoidance patterns. High-signal if answered honestly."
  },
  {
    id: "intent-27",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["trust"],
    prompt: "What makes you decide you can trust someone with your real self?",
    notes: "Trust criteria. Helps you see how they attach."
  },
  {
    id: "intent-28",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["space"],
    prompt: "When you ask for space, what are you hoping will happen inside that space?",
    notes: "Distinguishes regulation from avoidance or punishment."
  },
  {
    id: "intent-29",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["repair"],
    prompt: "When something feels off between us, what outcome are you hoping for: understanding, distance, or repair?",
    notes: "Clarifies directional intent during tension."
  },
  {
    id: "intent-30",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["choice"],
    prompt: "If you had to choose today, would you choose us, and why?",
    notes: "High-signal. Forces clarity, not comfort."
  },
  {
    id: "intent-31",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["partner_role"],
    prompt: "What do you believe a partner is for, beyond romance?",
    notes: "Defines partnership function: teamwork, growth, stability, etc."
  },
  {
    id: "intent-32",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["openness"],
    prompt: "What would make you feel more open with me right now?",
    notes: "Invites actionable connection without blame."
  },
  {
    id: "intent-33",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["boundaries"],
    prompt: "What boundary do you need respected to stay happy in a relationship?",
    notes: "Intent to protect self. Helps prevent later explosions."
  },
  {
    id: "intent-34",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["congruence"],
    prompt: "Where do you think your actions and your words don’t match in relationships?",
    notes: "High-signal honesty check. Reveals self-awareness."
  },
  {
    id: "intent-35",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["growth"],
    prompt: "What do you want this relationship to teach you about yourself?",
    notes: "Turns relationship into growth, not consumption."
  },
  {
    id: "intent-36",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["effort"],
    prompt: "When you say you care, what do you want me to notice as proof?",
    notes: "Turns care into evidence. Prevents mind-reading."
  },
  {
    id: "intent-37",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["compatibility"],
    prompt: "What’s the biggest compatibility factor you look for that most people overlook?",
    notes: "Reveals deeper criteria, not surface traits."
  },
  {
    id: "intent-38",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["fear"],
    prompt: "What are you most afraid of losing if this relationship ends?",
    notes: "Attachment driver: love, status, security, identity, routine."
  },
  {
    id: "intent-39",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["independence"],
    prompt: "How do you balance being independent with being committed?",
    notes: "Shows whether they can do both without self-sabotage."
  },
  {
    id: "intent-40",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["availability"],
    prompt: "How emotionally available do you feel right now, honestly?",
    notes: "Quick reality-check without judgment."
  },
  {
    id: "intent-41",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["intention_vs_feeling"],
    prompt: "When feelings fade for a moment, what makes you stay intentional?",
    notes: "Tests commitment beyond emotion."
  },
  {
    id: "intent-42",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["accountability"],
    prompt: "What’s one way you know you’ve been unfair in relationships before?",
    notes: "Ownership of past patterns predicts future behavior."
  },
  {
    id: "intent-43",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["decision_making"],
    prompt: "How do you decide when a relationship is worth fighting for?",
    notes: "Reveals perseverance vs avoidance vs pride."
  },
  {
    id: "intent-44",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["connection"],
    prompt: "What makes you feel most connected to someone in everyday life?",
    notes: "Defines connection behaviors, not fantasies."
  },
  {
    id: "intent-45",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["standards"],
    prompt: "What standard do you hold yourself to when you’re in a committed relationship?",
    notes: "Self-standards matter more than expectations of you."
  },
  {
    id: "intent-46",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["truth"],
    prompt: "What’s something true about what you want that you usually downplay to seem ‘easy’?",
    notes: "High-signal: reveals hidden needs and people-pleasing."
  },
  {
    id: "intent-47",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["repair"],
    prompt: "When we disagree, what outcome matters more to you: being right or being close?",
    notes: "Predicts conflict style and priorities."
  },
  {
    id: "intent-48",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["clarity"],
    prompt: "What do you need to feel clear about us?",
    notes: "Invites specifics, reduces ambiguity anxiety."
  },
  {
    id: "intent-49",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["commitment"],
    prompt: "What does ‘choosing someone’ look like in actions to you?",
    notes: "Operationalizes ‘choice’ to observable behaviors."
  },
  {
    id: "intent-50",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["consistency"],
    prompt: "Where do you think you’re inconsistent in relationships, and why?",
    notes: "High-signal self-awareness and honesty test."
  },
  {
    id: "intent-51",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["pressure"],
    prompt: "Do you feel like you’re building with me, or managing me?",
    notes: "Softly checks for control patterns."
  },
  {
    id: "intent-52",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["timing"],
    prompt: "What timing feels right to you for deeper steps, and what makes it feel right?",
    notes: "Encourages reasoning, not vibes-only escalation."
  },
  {
    id: "intent-53",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["future"],
    prompt: "What part of your future are you not willing to compromise for a relationship?",
    notes: "Reveals priorities: kids, career, location, freedom, peace."
  },
  {
    id: "intent-54",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["exclusivity"],
    prompt: "What does exclusivity mean to you beyond ‘not talking to other people’?",
    notes: "Defines exclusivity as behavior, attention, honesty, and boundaries."
  },
  {
    id: "intent-55",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["presence"],
    prompt: "What kind of presence from a partner feels like love to you: time, attention, help, words, or something else?",
    notes: "Love-language-ish without jargon. Useful for alignment."
  },
  {
    id: "intent-56",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["intentions"],
    prompt: "What intention do you want to set for how we treat each other when things get hard?",
    notes: "Establishes a ‘how we do hard’ agreement."
  },
  {
    id: "intent-57",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["honesty"],
    prompt: "Is there any part of you that knows this won’t work long-term, and if so, why stay?",
    notes: "Very high-signal. Use carefully. Reveals avoidance and convenience."
  },
  {
    id: "intent-58",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["boundaries"],
    prompt: "What boundary do you wish you had set earlier in past relationships?",
    notes: "Shows learning and self-protection intent."
  },
];
