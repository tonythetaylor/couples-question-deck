import type { Question } from "../domain/types";

export const COMMUNICATION_QUESTIONS_APPEND: Question[] = [
// --- NEW COMMUNICATION QUESTIONS (append after comm-8) ---
{
  id: "comm-9",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["openness"],
  prompt: "What helps you feel comfortable speaking freely?",
  notes: "Conditions for openness."
},
{
  id: "comm-10",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["listening"],
  prompt: "What makes you feel like someone is really listening to you?",
  notes: "Defines felt listening."
},
{
  id: "comm-11",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["miscommunication"],
  prompt: "What do people most often misunderstand about how you communicate?",
  notes: "Gap between intent and perception."
},
{
  id: "comm-12",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["pace"],
  prompt: "Do you prefer to talk things out right away or after time to process?",
  notes: "Timing preference."
},
{
  id: "comm-13",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["clarity"],
  prompt: "When do conversations start to feel unclear or frustrating for you?",
  notes: "Early friction signals."
},
{
  id: "comm-14",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["avoidance"],
  prompt: "What do you avoid saying even when it feels important?",
  notes: "Avoided truths."
},
{
  id: "comm-15",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["expression"],
  prompt: "How do you usually express care without words?",
  notes: "Non-verbal communication."
},
{
  id: "comm-16",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["tone"],
  prompt: "How much does tone matter to you compared to words?",
  notes: "Tone sensitivity."
},
{
  id: "comm-17",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["conflict"],
  prompt: "What communication habit of yours makes conflict harder?",
  notes: "Self-identified blockers."
},
{
  id: "comm-18",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["safety"],
  prompt: "What makes a conversation feel emotionally safe for you?",
  notes: "Safety cues."
},
{
  id: "comm-19",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["processing"],
  prompt: "Do you process thoughts out loud or internally first?",
  notes: "Processing style."
},
{
  id: "comm-20",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["shutdown"],
  prompt: "What causes you to stop engaging in a conversation?",
  notes: "Shutdown triggers."
},
{
  id: "comm-21",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["repair"],
  prompt: "What helps bring a conversation back when it goes sideways?",
  notes: "Recovery strategies."
},
{
  id: "comm-22",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["clarification"],
  prompt: "How do you prefer someone check in when they’re unsure what you meant?",
  notes: "Clarification preference."
},
{
  id: "comm-23",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["assumptions"],
  prompt: "What assumption do people often make about you that isn’t true?",
  notes: "Corrects false narratives."
},
{
  id: "comm-24",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["expression"],
  prompt: "What’s easiest for you to talk about?",
  notes: "Comfort zones."
},
{
  id: "comm-25",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["difficulty"],
  prompt: "What topics feel hardest to put into words?",
  notes: "Vulnerability threshold."
},
{
  id: "comm-26",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["honesty"],
  prompt: "What truth do you soften when you’re afraid of conflict?",
  notes: "Filtered honesty."
},
{
  id: "comm-27",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["nonverbal"],
  prompt: "What signals tell others how you’re feeling without you saying it?",
  notes: "Implicit cues."
},
{
  id: "comm-28",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["feedback"],
  prompt: "How do you prefer to receive difficult feedback?",
  notes: "Feedback channel preference."
},
{
  id: "comm-29",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["listening"],
  prompt: "When do you feel talked over instead of heard?",
  notes: "Disconnection moments."
},
{
  id: "comm-30",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["curiosity"],
  prompt: "What questions make you feel genuinely seen?",
  notes: "Connection levers."
},
{
  id: "comm-31",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["misalignment"],
  prompt: "When do conversations feel like parallel monologues?",
  notes: "Misalignment detection."
},
{
  id: "comm-32",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["pressure"],
  prompt: "What kind of communication feels like pressure to you?",
  notes: "Boundary awareness."
},
{
  id: "comm-33",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["repair"],
  prompt: "What helps you stay engaged during difficult talks?",
  notes: "Staying present."
},
{
  id: "comm-34",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["expectations"],
  prompt: "What do you expect someone to already understand about you?",
  notes: "Unspoken expectations."
},
{
  id: "comm-35",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["conflict"],
  prompt: "What phrase or tone immediately shuts you down?",
  notes: "Hot buttons."
},
{
  id: "comm-36",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["expression"],
  prompt: "How do you usually ask for what you need?",
  notes: "Needs expression style."
},
{
  id: "comm-37",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["repair"],
  prompt: "What lets you know a conversation has truly landed?",
  notes: "Completion signals."
},
{
  id: "comm-38",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["honesty"],
  prompt: "What do you say ‘it’s fine’ about when it isn’t?",
  notes: "Suppressed truth."
},
{
  id: "comm-39",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["attunement"],
  prompt: "How do you know when someone is emotionally attuned to you?",
  notes: "Attunement markers."
},
{
  id: "comm-40",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["clarity"],
  prompt: "What helps you feel clear after a hard conversation?",
  notes: "Post-talk integration."
},
{
  id: "comm-41",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["avoidance"],
  prompt: "What conversation are you most likely to postpone?",
  notes: "Avoidance pattern."
},
{
  id: "comm-42",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["expression"],
  prompt: "What’s your default way of signaling something matters to you?",
  notes: "Priority cues."
},
{
  id: "comm-43",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["misinterpretation"],
  prompt: "What part of your communication style gets misread most often?",
  notes: "Style vs intent."
},
{
  id: "comm-44",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["truth"],
  prompt: "What’s hardest for you to say out loud?",
  notes: "Core vulnerability."
},
{
  id: "comm-45",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["listening"],
  prompt: "What helps you feel safe enough to listen without preparing a response?",
  notes: "Deep listening."
},
{
  id: "comm-46",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["conflict"],
  prompt: "How do you usually know a conversation is becoming an argument?",
  notes: "Escalation awareness."
},
{
  id: "comm-47",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["patterns"],
  prompt: "What communication pattern do you wish you could break?",
  notes: "Change readiness."
},
{
  id: "comm-48",
  category: "communication",
  tone: "gentle",
  intensity: 1,
  tags: ["repair"],
  prompt: "What makes you willing to re-enter a hard conversation?",
  notes: "Re-engagement conditions."
},
{
  id: "comm-49",
  category: "communication",
  tone: "neutral",
  intensity: 2,
  tags: ["connection"],
  prompt: "What kind of conversation leaves you feeling closer afterward?",
  notes: "Connection outcomes."
},
{
  id: "comm-50",
  category: "communication",
  tone: "direct",
  intensity: 3,
  tags: ["depth"],
  prompt: "What conversation do you think we still haven’t fully had?",
  notes: "Unfinished dialogue."
}
]