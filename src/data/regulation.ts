import type { Question } from "../domain/types";

// --- NEW REGULATION QUESTIONS (append after reg-8) ---
export const REGULATION_QUESTIONS_APPEND: Question[] = [
  {
    id: "reg-9",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["self_awareness"],
    prompt: "What’s the first sign your body gives you when you’re getting overwhelmed?",
    notes: "Early detection question. Helps prevent escalation before shutdown."
  },
  {
    id: "reg-10",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["stress"],
    prompt: "How do you usually behave when you’re stressed but trying to hide it?",
    notes: "Reveals masked stress patterns that partners often misread."
  },
  {
    id: "reg-11",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["calm"],
    prompt: "What reliably helps you return to calm after a difficult day?",
    notes: "Identifies effective regulation tools already working."
  },
  {
    id: "reg-12",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["emotional_range"],
    prompt: "Which emotions are easiest for you to sit with, and which feel overwhelming?",
    notes: "Maps emotional tolerance without judgment."
  },
  {
    id: "reg-13",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["avoidance"],
    prompt: "What emotion do you avoid feeling at all costs?",
    notes: "High-signal avoidance check. Handle gently."
  },
  {
    id: "reg-14",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["rest"],
    prompt: "What does a truly restorative evening look like for you?",
    notes: "Separates rest from distraction."
  },
  {
    id: "reg-15",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["communication"],
    prompt: "How do you usually signal that you need a pause without meaning distance?",
    notes: "Prevents misinterpretation of regulation as withdrawal."
  },
  {
    id: "reg-16",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["nervous_system"],
    prompt: "What helps your nervous system feel safe around another person?",
    notes: "Core co-regulation question."
  },
  {
    id: "reg-17",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["coping"],
    prompt: "When emotions spike, do you tend to move, talk, go quiet, or distract yourself?",
    notes: "Identifies default coping strategy."
  },
  {
    id: "reg-18",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["shutdown"],
    prompt: "What usually pushes you from stressed into shutdown?",
    notes: "Critical threshold identification."
  },
  {
    id: "reg-19",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["support"],
    prompt: "When you’re overwhelmed, what kind of support helps rather than hurts?",
    notes: "Prevents well-intentioned but misaligned help."
  },
  {
    id: "reg-20",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["space"],
    prompt: "How do you prefer space to be handled so it feels regulating instead of rejecting?",
    notes: "Defines healthy space vs emotional distance."
  },
  {
    id: "reg-21",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["grounding"],
    prompt: "What grounds you when your thoughts start racing?",
    notes: "Practical grounding insight."
  },
  {
    id: "reg-22",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["patterns"],
    prompt: "What regulation pattern do you know isn’t healthy but still fall into?",
    notes: "Ownership without shaming."
  },
  {
    id: "reg-23",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["triggers"],
    prompt: "What situations tend to dysregulate you the fastest?",
    notes: "Trigger mapping for prevention."
  },
  {
    id: "reg-24",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["co_regulation"],
    prompt: "How do you feel about being regulated with someone versus alone?",
    notes: "Compatibility check around co-regulation."
  },
  {
    id: "reg-25",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["energy"],
    prompt: "What drains your emotional energy the quickest?",
    notes: "Helps protect limited capacity."
  },
  {
    id: "reg-26",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["conflict"],
    prompt: "What do you do in conflict that you later wish you had regulated better?",
    notes: "High-signal self-reflection."
  },
  {
    id: "reg-27",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["boundaries"],
    prompt: "What boundary helps you stay emotionally steady?",
    notes: "Regulation through structure."
  },
  {
    id: "reg-28",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["sensory"],
    prompt: "Are you more sensitive to noise, clutter, time pressure, or emotional tone?",
    notes: "Sensory regulation insight."
  },
  {
    id: "reg-29",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["sleep"],
    prompt: "How does lack of sleep change the way you show up emotionally?",
    notes: "Normalizes physiological impact."
  },
  {
    id: "reg-30",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["responsibility"],
    prompt: "What part of your regulation do you believe is your responsibility, not your partner’s?",
    notes: "Clarifies emotional ownership."
  },
  {
    id: "reg-31",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["repair"],
    prompt: "How do you usually come back after you’ve been dysregulated?",
    notes: "Repair pathway awareness."
  },
  {
    id: "reg-32",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["comfort"],
    prompt: "What comforts you without making you feel dependent?",
    notes: "Healthy soothing check."
  },
  {
    id: "reg-33",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["conflict"],
    prompt: "How long do you typically need to regulate before you can talk clearly?",
    notes: "Sets realistic timing expectations."
  },
  {
    id: "reg-34",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["escalation"],
    prompt: "What behavior tells you you’ve crossed from productive into escalated?",
    notes: "Escalation awareness prevents damage."
  },
  {
    id: "reg-35",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["routine"],
    prompt: "What daily routine helps keep you emotionally balanced?",
    notes: "Regulation through consistency."
  },
  {
    id: "reg-36",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["capacity"],
    prompt: "How do you recognize when you’re at emotional capacity?",
    notes: "Prevents overextension."
  },
  {
    id: "reg-37",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["conflict"],
    prompt: "What do you need to stop doing when you’re upset?",
    notes: "Behavioral regulation contract."
  },
  {
    id: "reg-38",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["presence"],
    prompt: "What kind of presence feels regulating rather than overwhelming?",
    notes: "Fine-tunes support style."
  },
  {
    id: "reg-39",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["recovery"],
    prompt: "How long does it usually take you to fully recover after emotional stress?",
    notes: "Recovery timeline awareness."
  },
  {
    id: "reg-40",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["patterns"],
    prompt: "What regulation pattern has caused the most trouble in past relationships?",
    notes: "Pattern recognition predicts change."
  },
  {
    id: "reg-41",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["safety"],
    prompt: "What helps you feel emotionally safe when conversations get intense?",
    notes: "Creates safety agreements."
  },
  {
    id: "reg-42",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["self_talk"],
    prompt: "What story do you tell yourself when emotions run high?",
    notes: "Cognitive regulation insight."
  },
  {
    id: "reg-43",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["ownership"],
    prompt: "Where do you rely too much on others to regulate you?",
    notes: "High-signal accountability."
  },
  {
    id: "reg-44",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["touch"],
    prompt: "Does physical closeness help or hinder you when you’re overwhelmed?",
    notes: "Important consent and co-regulation insight."
  },
  {
    id: "reg-45",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["boundaries"],
    prompt: "What boundary do you need when emotions are high?",
    notes: "Prevents accidental harm."
  },
  {
    id: "reg-46",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["self_control"],
    prompt: "What emotion do you feel least in control of?",
    notes: "Names regulation growth edge."
  },
  {
    id: "reg-47",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["care"],
    prompt: "How do you take care of yourself after a hard emotional moment?",
    notes: "Self-repair awareness."
  },
  {
    id: "reg-48",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["signals"],
    prompt: "What signal do you wish others would recognize when you’re overwhelmed?",
    notes: "Improves mutual understanding."
  },
  {
    id: "reg-49",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["change"],
    prompt: "What regulation skill are you actively trying to improve?",
    notes: "Growth-oriented regulation check."
  },
  {
    id: "reg-50",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["balance"],
    prompt: "What helps you return to emotional balance after conflict?",
    notes: "Closes the loop on recovery and repair."
  },
];