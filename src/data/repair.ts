import type { Question } from "../domain/types";

// --- NEW REPAIR QUESTIONS (append after repair-7) ---
export const REPAIR_QUESTIONS_APPEND: Question[] = [
  {
    id: "repair-8",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["reconnection"],
    prompt: "What helps you feel safe enough to reconnect after tension?",
    notes: "Identifies conditions for re-entry without pressure."
  },
  {
    id: "repair-9",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["apology"],
    prompt: "What makes an apology feel complete to you?",
    notes: "Defines completion so repair doesn’t stall."
  },
  {
    id: "repair-10",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["timing"],
    prompt: "How do you know when you’re ready to talk after conflict?",
    notes: "Clarifies timing cues to avoid premature repair."
  },
  {
    id: "repair-11",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["listening"],
    prompt: "What helps you feel truly listened to during repair conversations?",
    notes: "Improves repair quality, not just speed."
  },
  {
    id: "repair-12",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["blocks"],
    prompt: "What usually blocks you from repairing sooner?",
    notes: "High-signal. Reveals pride, fear, shame, or avoidance."
  },
  {
    id: "repair-13",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["closure"],
    prompt: "What helps you feel like an issue is truly settled?",
    notes: "Prevents recycling old conflicts."
  },
  {
    id: "repair-14",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["accountability"],
    prompt: "What does taking responsibility look like in actions, not words?",
    notes: "Turns repair into observable behavior."
  },
  {
    id: "repair-15",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["patterns"],
    prompt: "What repair mistake do you notice yourself repeating?",
    notes: "Pattern awareness precedes change."
  },
  {
    id: "repair-16",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["emotions"],
    prompt: "What emotion do you need acknowledged before you can move forward?",
    notes: "Prevents bypassing feelings in repair."
  },
  {
    id: "repair-17",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["repair_style"],
    prompt: "Do you prefer to repair through talking, actions, time, or reassurance?",
    notes: "Maps repair language."
  },
  {
    id: "repair-18",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["defensiveness"],
    prompt: "What makes you become defensive during repair?",
    notes: "Identifies sensitivity points."
  },
  {
    id: "repair-19",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["calm"],
    prompt: "What helps you stay regulated during difficult repair conversations?",
    notes: "Supports productive repair."
  },
  {
    id: "repair-20",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["trust"],
    prompt: "What repair behaviors rebuild trust for you over time?",
    notes: "Trust is cumulative and behavioral."
  },
  {
    id: "repair-21",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["avoidance"],
    prompt: "What makes you want to avoid repair altogether?",
    notes: "High-signal avoidance check."
  },
  {
    id: "repair-22",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["repair"],
    prompt: "What’s the smallest repair gesture that still matters to you?",
    notes: "Highlights low-effort, high-impact actions."
  },
  {
    id: "repair-23",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["conflict"],
    prompt: "How do you want disagreements to end, ideally?",
    notes: "Defines preferred resolution state."
  },
  {
    id: "repair-24",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["ownership"],
    prompt: "What’s hardest for you to admit when you’ve hurt someone?",
    notes: "Deep accountability question."
  },
  {
    id: "repair-25",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["repair"],
    prompt: "What makes it easier for you to accept repair attempts?",
    notes: "Helps repair land instead of bounce."
  },
  {
    id: "repair-26",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["forgiveness"],
    prompt: "How do you differentiate forgiveness from forgetting?",
    notes: "Clarifies forgiveness boundaries."
  },
  {
    id: "repair-27",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["resentment"],
    prompt: "What tends to turn hurt into lingering resentment for you?",
    notes: "Early warning for unresolved repair."
  },
  {
    id: "repair-28",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["care"],
    prompt: "What makes you feel cared for after conflict?",
    notes: "Reinforces safety post-conflict."
  },
  {
    id: "repair-29",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["communication"],
    prompt: "What words or tone make repair conversations harder for you?",
    notes: "Prevents accidental re-injury."
  },
  {
    id: "repair-30",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["repair"],
    prompt: "What repair behavior would you like to see more consistently?",
    notes: "Turns desire into clarity."
  },
  {
    id: "repair-31",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["patience"],
    prompt: "How much time do you usually need before repair feels possible?",
    notes: "Normalizes regulation time."
  },
  {
    id: "repair-32",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["repair"],
    prompt: "How do you know when repair has actually worked?",
    notes: "Defines success criteria."
  },
  {
    id: "repair-33",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["accountability"],
    prompt: "What do you expect to change after we repair?",
    notes: "Prevents repair without behavior change."
  },
  {
    id: "repair-34",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["repair"],
    prompt: "What helps you soften again after being hurt?",
    notes: "Emotional reopening question."
  },
  {
    id: "repair-35",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["repair"],
    prompt: "What repair effort feels meaningful rather than performative?",
    notes: "Distinguishes sincerity."
  },
  {
    id: "repair-36",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["patterns"],
    prompt: "What conflict pattern do you most want to break?",
    notes: "Future-oriented repair."
  },
  {
    id: "repair-37",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["connection"],
    prompt: "What helps you feel close again after distance?",
    notes: "Reconnection mapping."
  },
  {
    id: "repair-38",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["repair"],
    prompt: "How do you want us to handle mistakes going forward?",
    notes: "Creates shared repair agreements."
  },
  {
    id: "repair-39",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["repair"],
    prompt: "What repair have you avoided that still needs attention?",
    notes: "High-signal unresolved issue."
  },
  {
    id: "repair-40",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["repair"],
    prompt: "What makes repair feel like relief rather than work?",
    notes: "Encourages sustainable repair."
  },
  {
    id: "repair-41",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["communication"],
    prompt: "What do you need less of during repair conversations?",
    notes: "Removes friction."
  },
  {
    id: "repair-42",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["repair"],
    prompt: "What behavior would make repair feel impossible for you?",
    notes: "Names hard boundaries."
  },
  {
    id: "repair-43",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["trust"],
    prompt: "What small repair gesture helps rebuild trust the fastest?",
    notes: "Trust repair shortcut."
  },
  {
    id: "repair-44",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["repair"],
    prompt: "How do you want to check in after we’ve repaired something?",
    notes: "Follow-up prevents relapse."
  },
  {
    id: "repair-45",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["accountability"],
    prompt: "What repair responsibility do you think is hardest for you?",
    notes: "Growth edge identification."
  },
  {
    id: "repair-46",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["repair"],
    prompt: "What helps you believe repair is genuine?",
    notes: "Perception matters."
  },
  {
    id: "repair-47",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["repair"],
    prompt: "How do you want repair to feel emotionally?",
    notes: "Sets emotional target."
  },
  {
    id: "repair-48",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["repair"],
    prompt: "What repair pattern from your past are you trying not to repeat?",
    notes: "Historical awareness."
  },
  {
    id: "repair-49",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["repair"],
    prompt: "What reassures you that we’re okay after conflict?",
    notes: "Stability cue."
  },
  {
    id: "repair-50",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["repair"],
    prompt: "What helps you trust that repair will happen again when needed?",
    notes: "Long-term repair confidence."
  },
  {
    id: "repair-51",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["repair"],
    prompt: "What do you want us to do differently the next time we hurt each other?",
    notes: "Converts repair into change."
  },
  {
    id: "repair-52",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["repair"],
    prompt: "What makes repair feel emotionally safe for you?",
    notes: "Safety-first repair."
  },
  {
    id: "repair-53",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["repair"],
    prompt: "How do you want repair to affect our relationship going forward?",
    notes: "Future orientation."
  },
  {
    id: "repair-54",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["repair"],
    prompt: "What repair are you afraid might not work?",
    notes: "Names repair anxiety."
  },
  {
    id: "repair-55",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["repair"],
    prompt: "What makes you willing to try repairing again?",
    notes: "Hope and resilience check."
  },
  {
    id: "repair-56",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["repair"],
    prompt: "What does successful repair change in how you feel afterward?",
    notes: "Emotional outcome clarity."
  },
  {
    id: "repair-57",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["repair"],
    prompt: "What repair effort do you think you underestimate the impact of?",
    notes: "Hidden leverage insight."
  }
];

