import type { Question } from "../domain/types";

export const ACCOUNTABILITY_QUESTIONS_APPEND: Question[] = [
// --- NEW ACCOUNTABILITY QUESTIONS (append after acct-8) ---
{
  id: "acct-9",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["awareness"],
  prompt: "What’s something you’ve recently realized about yourself?",
  notes: "Low-pressure insight check."
},
{
  id: "acct-10",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["patterns"],
  prompt: "What pattern do you notice repeating in your relationships?",
  notes: "Tests recognition of recurring dynamics."
},
{
  id: "acct-11",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["ownership"],
  prompt: "What problem do you tend to blame on circumstances instead of choices?",
  notes: "Externalization vs ownership."
},
{
  id: "acct-12",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["growth"],
  prompt: "What feedback have you taken seriously recently?",
  notes: "Shows openness to correction."
},
{
  id: "acct-13",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["impact"],
  prompt: "How do you think your stress affects the people close to you?",
  notes: "Impact awareness beyond intent."
},
{
  id: "acct-14",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["avoidance"],
  prompt: "What responsibility do you tend to avoid when things get hard?",
  notes: "Pinpoints avoidance behavior."
},
{
  id: "acct-15",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["reflection"],
  prompt: "What do you usually need after realizing you’ve made a mistake?",
  notes: "Reveals repair readiness."
},
{
  id: "acct-16",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["conflict"],
  prompt: "What role do you usually play when conflict escalates?",
  notes: "Self-positioning in tension."
},
{
  id: "acct-17",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["responsibility"],
  prompt: "Where do you think you’ve fallen short in this relationship?",
  notes: "Direct ownership check."
},
{
  id: "acct-18",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["learning"],
  prompt: "What mistake taught you the most about yourself?",
  notes: "Growth-from-error signal."
},
{
  id: "acct-19",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["habits"],
  prompt: "What habit do you know isn’t serving you anymore?",
  notes: "Readiness for change."
},
{
  id: "acct-20",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["truth"],
  prompt: "What truth about yourself do you tend to downplay?",
  notes: "Minimization vs honesty."
},
{
  id: "acct-21",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["self_compassion"],
  prompt: "How do you usually talk to yourself after messing up?",
  notes: "Self-accountability without shame."
},
{
  id: "acct-22",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["consistency"],
  prompt: "Where do your actions and intentions not fully match?",
  notes: "Behavioral alignment check."
},
{
  id: "acct-23",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["impact"],
  prompt: "What behavior of yours has caused unintended harm before?",
  notes: "Impact over intent."
},
{
  id: "acct-24",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["reflection"],
  prompt: "What do you usually need in order to take responsibility?",
  notes: "Conditions for ownership."
},
{
  id: "acct-25",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["repair"],
  prompt: "What helps you stay accountable without becoming defensive?",
  notes: "Regulation + ownership."
},
{
  id: "acct-26",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["patterns"],
  prompt: "What pattern do you repeat even though you know better?",
  notes: "Awareness vs follow-through."
},
{
  id: "acct-27",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["learning"],
  prompt: "What’s something you’re actively trying to do differently?",
  notes: "Behavioral change signal."
},
{
  id: "acct-28",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["feedback"],
  prompt: "How do you usually respond internally to criticism?",
  notes: "Internal accountability process."
},
{
  id: "acct-29",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["honesty"],
  prompt: "What excuse do you rely on most often?",
  notes: "Defense mechanism exposure."
},
{
  id: "acct-30",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["reflection"],
  prompt: "What have you outgrown about yourself?",
  notes: "Growth acknowledgment."
},
{
  id: "acct-31",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["responsibility"],
  prompt: "What do you feel most responsible for in relationships?",
  notes: "Scope of responsibility."
},
{
  id: "acct-32",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["blame"],
  prompt: "When something goes wrong, who do you instinctively blame first?",
  notes: "Blame orientation."
},
{
  id: "acct-33",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["self_awareness"],
  prompt: "What personal trigger are you most aware of?",
  notes: "Trigger ownership."
},
{
  id: "acct-34",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["patterns"],
  prompt: "What situation reliably brings out your worst reactions?",
  notes: "Predictable stress responses."
},
{
  id: "acct-35",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["change"],
  prompt: "What behavior do you know you need to change but haven’t yet?",
  notes: "Resistance point."
},
{
  id: "acct-36",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["reflection"],
  prompt: "What helps you slow down before reacting?",
  notes: "Accountability regulation."
},
{
  id: "acct-37",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["impact"],
  prompt: "How do you usually realize you’ve hurt someone?",
  notes: "Impact recognition."
},
{
  id: "acct-38",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["ownership"],
  prompt: "What do you owe an apology for but haven’t given yet?",
  notes: "Unresolved accountability."
},
{
  id: "acct-39",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["growth"],
  prompt: "What are you proud of changing about yourself?",
  notes: "Positive accountability reinforcement."
},
{
  id: "acct-40",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["self_control"],
  prompt: "What emotion is hardest for you to manage responsibly?",
  notes: "Emotional regulation insight."
},
{
  id: "acct-41",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["deflection"],
  prompt: "When do you notice yourself explaining instead of owning?",
  notes: "Explanation vs accountability."
},
{
  id: "acct-42",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["reflection"],
  prompt: "What helps you feel safe enough to admit fault?",
  notes: "Conditions for honesty."
},
{
  id: "acct-43",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["patterns"],
  prompt: "What reaction of yours tends to escalate situations?",
  notes: "Escalation awareness."
},
{
  id: "acct-44",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["truth"],
  prompt: "What’s something about yourself you don’t want to look at too closely?",
  notes: "Avoidance detection."
},
{
  id: "acct-45",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["learning"],
  prompt: "What are you currently learning about how you relate to others?",
  notes: "Ongoing self-study."
},
{
  id: "acct-46",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["repair"],
  prompt: "What helps you follow through after taking responsibility?",
  notes: "Action after apology."
},
{
  id: "acct-47",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["patterns"],
  prompt: "What’s a mistake you’ve made more than once?",
  notes: "Repeated behavior flag."
},
{
  id: "acct-48",
  category: "accountability",
  tone: "gentle",
  intensity: 1,
  tags: ["reflection"],
  prompt: "What do you wish people understood about your intentions?",
  notes: "Intent vs impact gap."
},
{
  id: "acct-49",
  category: "accountability",
  tone: "neutral",
  intensity: 2,
  tags: ["self_honesty"],
  prompt: "What’s something you’ve had to admit to yourself recently?",
  notes: "Internal accountability."
},
{
  id: "acct-50",
  category: "accountability",
  tone: "direct",
  intensity: 3,
  tags: ["ownership"],
  prompt: "What responsibility are you ready to take on more fully?",
  notes: "Forward-looking accountability."
}
]