import type { Question } from "../domain/types";
import { ACCOUNTABILITY_QUESTIONS_APPEND } from "./accountability";
import { COMMUNICATION_QUESTIONS_APPEND } from "./communication";
import { INTENT_QUESTIONS_APPEND } from "./intent";
import { MONEY_QUESTIONS_APPEND } from "./money";
import { REGULATION_QUESTIONS_APPEND } from "./regulation";
import { REPAIR_QUESTIONS_APPEND } from "./repair";
import { VALUES_QUESTIONS_APPEND } from "./values";
import { BOUNDARIES_QUESTIONS_APPEND } from "./boundaries";
import { COLIVING_QUESTIONS_APPEND } from "./coliving";
import { TRUST_QUESTIONS_APPEND } from "./trust";
import { INTIMACY_QUESTIONS_APPEND } from "./intimacy";
import { BREAKUP_EXIT_QUESTIONS_APPEND } from "./breakup_exit";
import { PARENTING_FAMILY_QUESTIONS_APPEND } from "./parenting_family";

export const QUESTIONS: Question[] = [
  // 1) Intent
  {
    id: "intent-1",
    category: "intent",
    tone: "neutral",
    intensity: 1,
    tags: ["living_together"],
    prompt: "When you asked about living together, what made that come up for you in that moment?",
    notes: "Clarifies intent without accusation. Looks for future-thinking vs emotional anchoring."
  },
  {
    id: "intent-2",
    category: "intent",
    tone: "neutral",
    intensity: 1,
    tags: ["living_together"],
    prompt: "What does “living together” actually mean to you, practically, not emotionally?",
    notes: "Forces a concrete definition. Separates fantasy from logistics."
  },
  {
    id: "intent-3",
    category: "intent",
    tone: "direct",
    intensity: 2,
    tags: ["living_together"],
    prompt: "In your mind, what problem does living together solve?",
    notes: "Reveals the underlying motivation: closeness, control, finances, fear, or convenience."
  },

  // 2) Accountability
  {
    id: "acct-1",
    category: "accountability",
    tone: "neutral",
    intensity: 2,
    tags: ["self_reflection"],
    prompt: "What do you think is hardest about being in a relationship with you?",
    notes: "Tests reflection vs justification."
  },
  {
    id: "acct-2",
    category: "accountability",
    tone: "neutral",
    intensity: 2,
    tags: ["stress"],
    prompt: "What patterns do you notice in yourself when you’re stressed or overwhelmed?",
    notes: "Identifies default coping patterns before they become relationship problems."
  },
  {
    id: "acct-3",
    category: "accountability",
    tone: "gentle",
    intensity: 2,
    tags: ["conflict"],
    prompt: "When things feel off between us, how do you usually cope internally?",
    notes: "Shows whether they process, avoid, ruminate, shut down, or reach for repair."
  },

  // 3) Communication depth
  {
    id: "comm-1",
    category: "communication",
    tone: "neutral",
    intensity: 2,
    tags: ["depth"],
    prompt: "Do you feel like we talk about how we’re doing emotionally, or do we mostly talk about logistics and work?",
    notes: "Measures emotional intimacy vs operational partnership."
  },
  {
    id: "comm-2",
    category: "communication",
    tone: "gentle",
    intensity: 2,
    tags: ["pauses"],
    prompt: "When I ask how you’re really feeling and you pause, what’s happening for you in that moment?",
    notes: "Names the pause without pressure. Reveals fear, uncertainty, or avoidance."
  },
  {
    id: "comm-3",
    category: "communication",
    tone: "direct",
    intensity: 3,
    tags: ["avoidance"],
    prompt: "What makes it hard for you to stay in deeper conversations?",
    notes: "High-signal. Reveals capacity, willingness, and emotional tolerance."
  },

  // 4) Regulation / boundaries
  {
    id: "reg-1",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["rest"],
    prompt: "How do you usually decompress when you finally get quiet time?",
    notes: "Maps decompression habits. Helps you protect each other’s nervous systems."
  },
  {
    id: "reg-2",
    category: "regulation",
    tone: "neutral",
    intensity: 1,
    tags: ["rest"],
    prompt: "What does rest actually look like for you?",
    notes: "Clarifies whether rest is sleep, solitude, hobbies, silence, or distraction."
  },
  {
    id: "reg-3",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["stillness"],
    prompt: "Do you feel comfortable being still with someone, or do you need movement and distraction?",
    notes: "Reveals comfort with closeness and presence without stimulation."
  },

  // 5) Money / contribution
  {
    id: "money-1",
    category: "money",
    tone: "neutral",
    intensity: 2,
    tags: ["money"],
    prompt: "How do you think couples should handle money when both people are in transition?",
    notes: "Surfaces values around fairness, support, and shame during unstable seasons."
  },
  {
    id: "money-2",
    category: "money",
    tone: "neutral",
    intensity: 2,
    tags: ["effort"],
    prompt: "What does “showing up” look like to you when neither person has it all together?",
    notes: "Defines contribution beyond money. Reveals emotional and practical expectations."
  },
  {
    id: "money-3",
    category: "money",
    tone: "direct",
    intensity: 3,
    tags: ["expectations"],
    prompt: "When you imagine partnership, what do you expect from the other person during hard seasons?",
    notes: "High-signal. Forces honest expectations instead of unspoken demands."
  },

  // 6) Anchor (limit to 1 per deck)
  {
    id: "anchor-1",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor"],
    prompt: "Do you feel like you’re choosing me for who I am right now, or for who you believe I’ll be once I’m fully back on my feet?",
    notes: "High-signal question. Ask once, then stop talking."
  },

  // 7) Repair
  {
    id: "repair-1",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["repair"],
    prompt: "When we get tense, what helps you come back to calm without shutting down?",
    notes: "Identifies calming strategies that don’t require withdrawal or escalation."
  },
  {
    id: "repair-2",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["apology"],
    prompt: "What does a real apology look like to you, in actions not words?",
    notes: "Turns apology into behavior. Helps prevent repeated “sorry” without change."
  },

  // 8) Values
  {
    id: "values-1",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["future"],
    prompt: "What does a healthy partnership look like day-to-day, not just during big moments?",
    notes: "Defines normal-life standards: routines, tone, chores, communication, and care."
  },
  {
    id: "values-2",
    category: "values",
    tone: "direct",
    intensity: 2,
    tags: ["standards"],
    prompt: "What are your non-negotiables in a shared home and shared life?",
    notes: "Surfaces boundaries early. Prevents resentment by naming needs up front."
  },
  {
    id: "intent-4",
    category: "intent",
    tone: "neutral",
    intensity: 1,
    tags: ["future"],
    prompt: "When you think about the next phase of your life, how do you imagine a partner fitting into it?",
    notes: "Reveals whether a partner is integrated into their plans or treated as optional support."
  },
  {
    id: "intent-5",
    category: "intent",
    tone: "gentle",
    intensity: 1,
    tags: ["pace"],
    prompt: "Do you feel like our relationship is unfolding at a pace that feels sustainable to you?",
    notes: "Checks pacing without pressure. Helps prevent silent resentment or forced closeness."
  },
  {
    id: "intent-6",
    category: "intent",
    tone: "direct",
    intensity: 2,
    tags: ["commitment"],
    prompt: "What are you actively choosing in this relationship right now?",
    notes: "Separates passive involvement from intentional commitment."
  },
  {
    id: "intent-7",
    category: "intent",
    tone: "neutral",
    intensity: 2,
    tags: ["clarity"],
    prompt: "What does commitment mean to you beyond labels or timelines?",
    notes: "Defines commitment by behavior and priorities, not just words."
  },
  {
    id: "intent-8",
    category: "intent",
    tone: "direct",
    intensity: 3,
    tags: ["hesitation"],
    prompt: "What would make you hesitate to fully invest in this relationship?",
    notes: "Identifies fear points and dealbreakers before they become sabotage."
  },

  // 10) Accountability (expanded)
  {
    id: "acct-4",
    category: "accountability",
    tone: "gentle",
    intensity: 1,
    tags: ["growth"],
    prompt: "What have you learned about yourself through being in this relationship?",
    notes: "Measures insight and willingness to grow, not just evaluate the other person."
  },
  {
    id: "acct-5",
    category: "accountability",
    tone: "neutral",
    intensity: 2,
    tags: ["patterns"],
    prompt: "What personal patterns are you currently working on changing?",
    notes: "Tests whether growth is real and ongoing, not just a concept."
  },
  {
    id: "acct-6",
    category: "accountability",
    tone: "direct",
    intensity: 3,
    tags: ["ownership"],
    prompt: "Where do you think you contribute most to tension between us?",
    notes: "High-signal ownership check. Look for specifics, not generalities."
  },
  {
    id: "acct-7",
    category: "accountability",
    tone: "neutral",
    intensity: 2,
    tags: ["feedback"],
    prompt: "How do you usually respond when someone you care about gives you feedback?",
    notes: "Reveals defensiveness vs curiosity. Predicts long-term conflict health."
  },
  {
    id: "acct-8",
    category: "accountability",
    tone: "direct",
    intensity: 3,
    tags: ["deflection"],
    prompt: "When do you notice yourself becoming defensive instead of reflective?",
    notes: "Names the moment defensiveness kicks in. Helps build accountability muscle."
  },

  // 11) Communication (expanded)
  {
    id: "comm-4",
    category: "communication",
    tone: "gentle",
    intensity: 1,
    tags: ["openness"],
    prompt: "What helps you feel safe enough to open up emotionally?",
    notes: "Identifies the conditions for vulnerability so connection is repeatable."
  },
  {
    id: "comm-5",
    category: "communication",
    tone: "neutral",
    intensity: 2,
    tags: ["listening"],
    prompt: "What makes you feel truly heard during difficult conversations?",
    notes: "Defines listening preferences. Reduces talking past each other."
  },
  {
    id: "comm-6",
    category: "communication",
    tone: "neutral",
    intensity: 2,
    tags: ["signals"],
    prompt: "How do you usually know when a conversation is starting to feel like too much?",
    notes: "Maps early warning signs. Helps prevent shutdown and escalation."
  },
  {
    id: "comm-7",
    category: "communication",
    tone: "direct",
    intensity: 3,
    tags: ["avoidance"],
    prompt: "What topics do you tend to avoid talking about, and why?",
    notes: "High-signal. Reveals shame, fear, and unresolved history."
  },
  {
    id: "comm-8",
    category: "communication",
    tone: "direct",
    intensity: 3,
    tags: ["depth"],
    prompt: "What kinds of conversations make you feel most connected to someone?",
    notes: "Shows what connection means to them. Helps you meet them where they bond."
  },

  // 12) Regulation / boundaries (expanded)
  {
    id: "reg-4",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["nervous_system"],
    prompt: "What signals tell you that you’re becoming emotionally overloaded?",
    notes: "Identifies overload cues before shutdown. Prevents accidental harm."
  },
  {
    id: "reg-5",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["coping"],
    prompt: "How do you usually self-soothe when you’re overwhelmed?",
    notes: "Reveals coping style. Useful for support without enabling avoidance."
  },
  {
    id: "reg-6",
    category: "regulation",
    tone: "neutral",
    intensity: 2,
    tags: ["space"],
    prompt: "How do you prefer to take space without disconnecting from your partner?",
    notes: "Defines healthy space vs emotional abandonment."
  },
  {
    id: "reg-7",
    category: "regulation",
    tone: "direct",
    intensity: 3,
    tags: ["shutdown"],
    prompt: "What tends to cause you to emotionally shut down in relationships?",
    notes: "High-signal trigger map. Helps you avoid repeating old patterns together."
  },
  {
    id: "reg-8",
    category: "regulation",
    tone: "gentle",
    intensity: 1,
    tags: ["restoration"],
    prompt: "What kind of rest actually restores you, not just distracts you?",
    notes: "Separates recovery from numbing. Helps you protect real restoration time."
  },

  // 13) Money / contribution (expanded)
  {
    id: "money-4",
    category: "money",
    tone: "gentle",
    intensity: 1,
    tags: ["support"],
    prompt: "How do you prefer to be supported when money feels stressful?",
    notes: "Defines support style: reassurance, planning, space, help, or encouragement."
  },
  {
    id: "money-5",
    category: "money",
    tone: "neutral",
    intensity: 2,
    tags: ["security"],
    prompt: "What makes you feel financially secure within a partnership?",
    notes: "Surfaces security signals: transparency, budgeting, consistency, boundaries."
  },
  {
    id: "money-6",
    category: "money",
    tone: "neutral",
    intensity: 2,
    tags: ["values"],
    prompt: "What money habits feel most important for you to share with a partner?",
    notes: "Reveals compatibility around spending, saving, planning, and responsibility."
  },
  {
    id: "money-7",
    category: "money",
    tone: "direct",
    intensity: 3,
    tags: ["contribution"],
    prompt: "How do you define fairness when resources or effort are uneven?",
    notes: "High-signal. Exposes entitlement vs mutual care under imbalance."
  },
  {
    id: "money-8",
    category: "money",
    tone: "direct",
    intensity: 3,
    tags: ["entitlement"],
    prompt: "What do you believe you’re owed in a relationship during hard seasons?",
    notes: "Very revealing. Listen for reciprocity vs scorekeeping."
  },

  // 14) Repair (expanded)
  {
    id: "repair-3",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["reconnection"],
    prompt: "What helps you feel reconnected after a disagreement?",
    notes: "Names the reconnection path: talk, time, touch, humor, actions, reassurance."
  },
  {
    id: "repair-4",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["closure"],
    prompt: "What does closure look like for you after tension or conflict?",
    notes: "Clarifies what ‘done’ means so conflict doesn’t linger silently."
  },
  {
    id: "repair-5",
    category: "repair",
    tone: "neutral",
    intensity: 2,
    tags: ["apology"],
    prompt: "What tells you that an apology is sincere?",
    notes: "Defines sincerity markers: changed behavior, accountability, consistency."
  },
  {
    id: "repair-6",
    category: "repair",
    tone: "direct",
    intensity: 3,
    tags: ["repair"],
    prompt: "What makes it hardest for you to repair after conflict?",
    notes: "Identifies the block: pride, fear, shame, distrust, or overwhelm."
  },
  {
    id: "repair-7",
    category: "repair",
    tone: "gentle",
    intensity: 1,
    tags: ["forgiveness"],
    prompt: "How do you decide when to let something go?",
    notes: "Reveals whether ‘letting go’ means resolving or suppressing."
  },

  // 15) Values (expanded)
  {
    id: "values-3",
    category: "values",
    tone: "gentle",
    intensity: 1,
    tags: ["meaning"],
    prompt: "What gives your life the most meaning right now?",
    notes: "Shows priorities and purpose. Helps you understand what they protect most."
  },
  {
    id: "values-4",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["priorities"],
    prompt: "How do you decide what gets your time and energy?",
    notes: "Reveals decision-making, boundaries, and what consistently comes first."
  },
  {
    id: "values-5",
    category: "values",
    tone: "neutral",
    intensity: 2,
    tags: ["alignment"],
    prompt: "Where do you feel our values align most strongly?",
    notes: "Builds shared narrative. Also reveals what they actually value."
  },
  {
    id: "values-6",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["standards"],
    prompt: "What standards are you unwilling to compromise on in a partnership?",
    notes: "Defines the line. Prevents ‘I assumed you knew’ resentment later."
  },
  {
    id: "values-7",
    category: "values",
    tone: "direct",
    intensity: 3,
    tags: ["life_design"],
    prompt: "What kind of life are you intentionally trying to build?",
    notes: "Compatibility check. Reveals trajectory, pace, and lifestyle priorities."
  },

  // 16) Anchor (expanded – use sparingly)
  {
    id: "anchor-2",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor"],
    prompt: "Do you feel emotionally safe being fully honest with me right now?",
    notes: "High-signal question. Ask once, then stop talking."
  },
  {
    id: "anchor-3",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor"],
    prompt: "Are you staying in this relationship out of desire, or out of fear?",
    notes: "High-signal question. Ask once, then stop talking."
  },

  // Humor (light deck)
  {
    id: "humor-1",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["habits"],
    prompt: "What’s a small habit of mine that secretly makes you laugh?",
    notes: "Light connection question. Builds warmth without turning it into analysis."
  },
  {
    id: "humor-2",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["quirks"],
    prompt: "What’s one of your quirks that you know I’ve noticed?",
    notes: "Invites playful self-awareness. Good for lowering defenses."
  },
  {
    id: "humor-3",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["daily_life"],
    prompt: "If our relationship were a sitcom, what would the running joke be?",
    notes: "Creates a shared story. Reveals how they experience the relationship tone."
  },
  {
    id: "humor-4",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["food"],
    prompt: "What food disagreement would we absolutely argue about on a road trip?",
    notes: "Low-stakes conflict style check. Lets you laugh about differences."
  },
  {
    id: "humor-5",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["sleep"],
    prompt: "What do you think I’d be most annoying about if we traveled together?",
    notes: "Playful honesty. Tests whether they can tease without contempt."
  },
  {
    id: "humor-6",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["comfort"],
    prompt: "What’s my comfort behavior that you find oddly endearing?",
    notes: "Reinforces fondness. Fondness is relationship glue."
  },
  {
    id: "humor-7",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["music"],
    prompt: "What song do you think secretly represents my personality?",
    notes: "Creates a fun metaphor. Often reveals what traits they associate with you."
  },
  {
    id: "humor-8",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["pets"],
    prompt: "If I were an animal for a day, what would I be and why?",
    notes: "Silly on purpose. Helps people speak honestly through humor."
  },
  {
    id: "humor-9",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["choices"],
    prompt: "What’s a harmless decision of mine you’d never trust me with again?",
    notes: "Playfully surfaces patterns without blame. Keep it kind."
  },
  {
    id: "humor-10",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["home"],
    prompt: "What household chore do you think I would dramatically overdo?",
    notes: "Domestic compatibility preview, but funny. Lets preferences show safely."
  },
  {
    id: "humor-11",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["travel"],
    prompt: "What part of traveling together do you think I’d overthink the most?",
    notes: "Reveals your default stress style in a safe setting."
  },
  {
    id: "humor-12",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["communication"],
    prompt: "What’s a phrase I say that you could quote perfectly?",
    notes: "Builds closeness through recognition. Little details matter."
  },
  {
    id: "humor-13",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["habits"],
    prompt: "What’s something I do when I’m stressed that you find amusing?",
    notes: "Turns stress into understanding. Good for softening hard seasons."
  },
  {
    id: "humor-14",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["tech"],
    prompt: "What piece of technology do you think I rely on way too much?",
    notes: "Modern-day personality check. Teasing without attacking."
  },
  {
    id: "humor-15",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["daily_life"],
    prompt: "If we had to compete on a game show, what would be my biggest weakness?",
    notes: "Lets them name a flaw with affection. Keep it playful."
  },
  {
    id: "humor-16",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["preferences"],
    prompt: "What’s a strong opinion I have that you think is unnecessary but funny?",
    notes: "Reveals your quirks through their eyes. Bonding through differences."
  },
  {
    id: "humor-17",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["style"],
    prompt: "What outfit of mine do you think I’m way too confident wearing?",
    notes: "Flirty, light, and honest. Keeps things human."
  },
  {
    id: "humor-18",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["sleep"],
    prompt: "What do you think I’d be like if I were extremely sleep deprived?",
    notes: "A safe ‘stress test’ question. Reveals assumptions and empathy."
  },
  {
    id: "humor-19",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["food"],
    prompt: "What’s a food I love that you genuinely don’t understand?",
    notes: "Low-stakes difference. Helps normalize ‘we don’t have to match.’"
  },
  {
    id: "humor-20",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["routines"],
    prompt: "What routine of mine feels very ‘me’?",
    notes: "Creates appreciation. Highlights identity rather than critique."
  },
  {
    id: "humor-21",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["choices"],
    prompt: "What’s a decision I’d make quickly that you’d need a spreadsheet for?",
    notes: "Shows different thinking styles. Laugh at it, don’t litigate it."
  },
  {
    id: "humor-22",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["communication"],
    prompt: "What do you think I’m actually saying when I say ‘it’s fine’?",
    notes: "Playful but revealing. If this hits a nerve, slow down."
  },
  {
    id: "humor-23",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["habits"],
    prompt: "What small thing do I overprepare for?",
    notes: "Shows love language through preparation. Also reveals anxiety patterns gently."
  },
  {
    id: "humor-24",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["preferences"],
    prompt: "What preference of mine do you think would confuse a stranger?",
    notes: "Fun identity question. Normalizes harmless weirdness."
  },
  {
    id: "humor-25",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["daily_life"],
    prompt: "What’s something mundane I manage to make dramatic?",
    notes: "Lets them tease you with affection. Watch for contempt vs play."
  },
  {
    id: "humor-26",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["travel"],
    prompt: "What would I be in charge of if we planned a trip together?",
    notes: "Reveals competence stereotypes and division-of-labor tendencies."
  },
  {
    id: "humor-27",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["home"],
    prompt: "What part of sharing a space do you think I’d take too seriously?",
    notes: "Soft cohabitation preview. Useful for “house rules” later."
  },
  {
    id: "humor-28",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["decisions"],
    prompt: "What decision do you think I’d regret five minutes later?",
    notes: "Playful judgment call. Highlights impulsivity vs caution."
  },
  {
    id: "humor-29",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["quirks"],
    prompt: "What about me do you think is unintentionally funny?",
    notes: "Affection through observation. Keeps tone light."
  },
  {
    id: "humor-30",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["habits"],
    prompt: "What’s something I do that makes you think ‘that’s very on brand’?",
    notes: "Identity reinforcement. Builds familiarity and inside jokes."
  },
  {
    id: "humor-31",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["communication"],
    prompt: "What facial expression of mine says everything without words?",
    notes: "Invites closeness through micro-details. Good ‘fondness’ builder."
  },
  {
    id: "humor-32",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["preferences"],
    prompt: "What minor inconvenience do I react to like a major event?",
    notes: "Low-stakes ‘stress style’ reveal. Keep it teasing, not shaming."
  },
  {
    id: "humor-33",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["daily_life"],
    prompt: "What’s something ordinary we’d probably laugh about later?",
    notes: "Builds shared future memories. Keeps you oriented toward joy."
  },
  {
    id: "humor-34",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["food"],
    prompt: "What’s my most predictable food order?",
    notes: "Simple observation question. Builds ‘I know you’ energy."
  },
  {
    id: "humor-35",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["routines"],
    prompt: "What routine of mine do you think I’d defend irrationally?",
    notes: "Playful stubbornness reveal. Helps you laugh at yourself."
  },
  {
    id: "humor-36",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["travel"],
    prompt: "What would stress me out most if plans changed last minute?",
    notes: "Identifies control points. Good for being considerate in real life."
  },
  {
    id: "humor-37",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["habits"],
    prompt: "What habit of mine do you think I don’t realize I have?",
    notes: "Gentle feedback wrapped in humor. Don’t get defensive."
  },
  {
    id: "humor-38",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["preferences"],
    prompt: "What do you think I’d be overly opinionated about for no reason?",
    notes: "Playful roast. Keeps things honest without escalating."
  },
  {
    id: "humor-39",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["daily_life"],
    prompt: "What moment between us do you think would be funny in hindsight?",
    notes: "Reframes tension into story. Helpful for couples who spiral."
  },
  {
    id: "humor-40",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["communication"],
    prompt: "What tone of mine do you instantly recognize?",
    notes: "Builds awareness of emotional signals. Useful for repair later."
  },
  {
    id: "humor-41",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["habits"],
    prompt: "What small thing do I take way too seriously?",
    notes: "Playful self-awareness. Great for people who need to loosen up."
  },
  {
    id: "humor-42",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["preferences"],
    prompt: "What preference of mine do you think is unnecessary but harmless?",
    notes: "Normalizes quirks. Helps avoid ‘fixing’ each other."
  },
  {
    id: "humor-43",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["daily_life"],
    prompt: "What’s something we’d probably laugh about if friends watched us?",
    notes: "Creates a third-person lens. Often reveals lovable patterns."
  },
  {
    id: "humor-44",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["communication"],
    prompt: "What do you think I mean when I go quiet?",
    notes: "Humor question with real insight. Useful for misunderstanding patterns."
  },
  {
    id: "humor-45",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["quirks"],
    prompt: "What part of my personality feels the most exaggerated?",
    notes: "Playful self-perception check. Keep it kind, not diagnostic."
  },
  {
    id: "humor-46",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["daily_life"],
    prompt: "What everyday situation do you think I’d overanalyze?",
    notes: "Laugh at the inner narrator. Also reveals how they see your mind."
  },
  {
    id: "humor-47",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["habits"],
    prompt: "What’s a habit of mine that would confuse future archaeologists?",
    notes: "Pure fun question. Builds inside-joke energy fast."
  },
  {
    id: "humor-48",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["preferences"],
    prompt: "What opinion of mine would you playfully argue against forever?",
    notes: "Encourages safe disagreement. Practice conflict without threat."
  },
  {
    id: "humor-49",
    category: "humor",
    tone: "gentle",
    intensity: 1,
    tags: ["daily_life"],
    prompt: "What’s something about me that feels very predictable in a funny way?",
    notes: "Predictability can be comfort. This frames it positively."
  },
  {
    id: "humor-50",
    category: "humor",
    tone: "neutral",
    intensity: 1,
    tags: ["habits"],
    prompt: "What’s one small thing about me that always makes you smile?",
    notes: "Ends on warmth. Reinforces fondness and appreciation."
  },

  // Anchors you already have notes for (kept as-is)
  {
    id: "anchor-4",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "commitment"],
    prompt: "If we keep going exactly like this for the next 6 months, what do you think will happen to us?",
    notes: "Forecasting question. Reveals realism vs wishful thinking."
  },
  {
    id: "anchor-5",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "needs"],
    prompt: "What need of yours do you think I consistently miss, even when I’m trying?",
    notes: "Reveals unmet needs without blaming."
  },
  {
    id: "anchor-6",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "needs"],
    prompt: "What need of mine do you think you consistently miss, even when you’re trying?",
    notes: "Measures empathy and accountability."
  },
  {
    id: "anchor-7",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "trust"],
    prompt: "What would I have to do for you to trust me less, and what would I have to do for you to trust me more?",
    notes: "Trust is behavioral. This forces specifics."
  },
  {
    id: "anchor-8",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "repair"],
    prompt: "When conflict happens, do you believe the goal is to win, or to understand?",
    notes: "Reveals conflict philosophy."
  },
  {
    id: "anchor-9",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "truth"],
    prompt: "What’s a truth about us that you avoid saying out loud?",
    notes: "High-signal. Expect silence."
  },
  {
    id: "anchor-10",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "security"],
    prompt: "Do you feel safer with closeness or with independence, and how does that show up with me?",
    notes: "Attachment signal without jargon."
  },
  {
    id: "anchor-11",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "boundaries"],
    prompt: "What boundary of yours do you want honored even when you’re upset?",
    notes: "Tests boundary clarity under stress."
  },
  {
    id: "anchor-12",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "boundaries"],
    prompt: "What boundary of mine do you think you’ve struggled to honor?",
    notes: "Tests ownership and awareness."
  },
  {
    id: "anchor-13",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "future"],
    prompt: "What does building a life together mean to you in concrete habits, not just feelings?",
    notes: "Forces operational definitions."
  },
  {
    id: "anchor-14",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "values"],
    prompt: "What value of yours will you not betray for a relationship, even for me?",
    notes: "Reveals core priorities."
  },
  {
    id: "anchor-15",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "effort"],
    prompt: "When you say you’re “trying,” what specific behaviors should I see?",
    notes: "Turns intent into evidence."
  },
  {
    id: "anchor-16",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "effort"],
    prompt: "When you say I’m “not showing up,” what specific behaviors are you expecting?",
    notes: "Clarifies expectations."
  },
  {
    id: "anchor-17",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "accountability"],
    prompt: "What do you do when you realize you’re wrong?",
    notes: "Tests repair capacity."
  },
  {
    id: "anchor-18",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "accountability"],
    prompt: "What do you want me to do when I realize I’m wrong?",
    notes: "Defines repair ritual."
  },
  {
    id: "anchor-19",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "communication"],
    prompt: "Do you prefer difficult conversations immediately, or after time, and what’s the ideal time window?",
    notes: "Makes regulation actionable."
  },
  {
    id: "anchor-20",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "communication"],
    prompt: "When you shut down, what do you need from me that doesn’t feel like pressure?",
    notes: "Compatibility check."
  },
  {
    id: "anchor-21",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "communication"],
    prompt: "When I go quiet, what story do you tell yourself about why?",
    notes: "Reveals assumptions."
  },
  {
    id: "anchor-22",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "respect"],
    prompt: "What does respect look like when we disagree?",
    notes: "Defines rules of engagement."
  },
  {
    id: "anchor-23",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "respect"],
    prompt: "What behavior feels disrespectful to you even if it’s not intended that way?",
    notes: "Surface sensitivities early."
  },
  {
    id: "anchor-24",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "time"],
    prompt: "How much alone time do you need each week to stay emotionally well, and how should we protect it?",
    notes: "Practical regulation."
  },
  {
    id: "anchor-25",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "time"],
    prompt: "How much together time do you need each week to feel connected?",
    notes: "Compatibility metric."
  },
  {
    id: "anchor-26",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "conflict"],
    prompt: "What topic between us is the most fragile, and why?",
    notes: "Finds the fault line."
  },
  {
    id: "anchor-27",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "conflict"],
    prompt: "In conflict, what do you do that escalates things, even if you don’t mean to?",
    notes: "Self-awareness test."
  },
  {
    id: "anchor-28",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "conflict"],
    prompt: "In conflict, what do I do that escalates things, even if I don’t mean to?",
    notes: "Mutual reality check."
  },
  {
    id: "anchor-29",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "repair"],
    prompt: "When we hurt each other, how do you prefer we repair: talk, actions, time, or touch?",
    notes: "Maps repair language."
  },
  {
    id: "anchor-30",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "repair"],
    prompt: "What’s the fastest way to lose you emotionally?",
    notes: "Reveals dealbreakers."
  },
  {
    id: "anchor-31",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "repair"],
    prompt: "What’s the fastest way to win you back emotionally after distance?",
    notes: "Reveals reconnection keys."
  },
  {
    id: "anchor-32",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "commitment"],
    prompt: "Are you looking for a partner, or are you looking for relief?",
    notes: "High-signal motive check."
  },
  {
    id: "anchor-33",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "commitment"],
    prompt: "Do you see this relationship as optional or essential, and what makes it that way?",
    notes: "Defines attachment level."
  },
  {
    id: "anchor-34",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "growth"],
    prompt: "What part of yourself are you actively working on right now, and how will I know it’s changing?",
    notes: "Growth with evidence."
  },
  {
    id: "anchor-35",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "growth"],
    prompt: "What part of me do you hope changes, and is that fair to ask?",
    notes: "Checks realism and control."
  },
  {
    id: "anchor-36",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "responsibility"],
    prompt: "When something goes wrong between us, do you look for your part first, or their part first?",
    notes: "Blame orientation."
  },
  {
    id: "anchor-37",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "responsibility"],
    prompt: "What do you believe you’re responsible for emotionally in a relationship, and what are you not responsible for?",
    notes: "Clarifies emotional labor."
  },
  {
    id: "anchor-38",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "money"],
    prompt: "What financial behavior would make you lose respect for a partner?",
    notes: "Hard boundary."
  },
  {
    id: "anchor-39",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "money"],
    prompt: "What financial behavior would make you feel deeply cared for?",
    notes: "Positive signal."
  },
  {
    id: "anchor-40",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "home"],
    prompt: "What does “peace at home” require from both people?",
    notes: "Defines household emotional climate."
  },
  {
    id: "anchor-41",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "home"],
    prompt: "If we lived together, what rule would you want that protects your sanity?",
    notes: "Practical cohabitation."
  },
  {
    id: "anchor-42",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "home"],
    prompt: "If we lived together, what rule would I want that protects my sanity?",
    notes: "Perspective-taking."
  },
  {
    id: "anchor-43",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "intimacy"],
    prompt: "What makes intimacy feel safe for you, and what makes it feel pressured?",
    notes: "Consent and safety."
  },
  {
    id: "anchor-44",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "intimacy"],
    prompt: "What makes you feel chosen in a relationship?",
    notes: "Core attachment need."
  },
  {
    id: "anchor-45",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "intimacy"],
    prompt: "What makes you feel like an option instead of a priority?",
    notes: "Triggers and narratives."
  },
  {
    id: "anchor-46",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "honesty"],
    prompt: "Is there anything you’re currently not saying because you’re afraid of my reaction?",
    notes: "Truth vs fear."
  },
  {
    id: "anchor-47",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "honesty"],
    prompt: "Is there anything you’re currently not saying because you’re afraid of your own feelings?",
    notes: "Internal avoidance."
  },
  {
    id: "anchor-48",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "compatibility"],
    prompt: "What’s a non-negotiable incompatibility you’ve ignored in past relationships?",
    notes: "Pattern detection."
  },
  {
    id: "anchor-49",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "compatibility"],
    prompt: "What’s a non-negotiable incompatibility you think we might have?",
    notes: "Brave clarity."
  },
  {
    id: "anchor-50",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "communication"],
    prompt: "When you feel misunderstood, what do you want most: explanation, apology, or change?",
    notes: "Clarifies repair target."
  },
  {
    id: "anchor-51",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "communication"],
    prompt: "When I feel misunderstood, what do you think I want most: explanation, apology, or change?",
    notes: "Empathy calibration."
  },
  {
    id: "anchor-52",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "conflict"],
    prompt: "Do you believe yelling, sarcasm, or stonewalling is ever acceptable?",
    notes: "Standards under stress."
  },
  {
    id: "anchor-53",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "conflict"],
    prompt: "What do you need me to never do in an argument?",
    notes: "Safety contract."
  },
  {
    id: "anchor-54",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "conflict"],
    prompt: "What do you need yourself to never do in an argument?",
    notes: "Self-contract."
  },
  {
    id: "anchor-55",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "future"],
    prompt: "What are you building toward in the next year, and do you want me in that plan?",
    notes: "Future inclusion."
  },
  {
    id: "anchor-56",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "future"],
    prompt: "What would make you feel proud of us a year from now?",
    notes: "Defines success."
  },
  {
    id: "anchor-57",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "repair"],
    prompt: "If we keep hurting each other in the same way, what should we do differently?",
    notes: "Forces change plan."
  },
  {
    id: "anchor-58",
    category: "anchor",
    tone: "direct",
    intensity: 3,
    tags: ["anchor", "truth"],
    prompt: "What question do you hope I never ask you?",
    notes: "Ultra high-signal; handle gently."
  },

  ...MONEY_QUESTIONS_APPEND,
  ...INTENT_QUESTIONS_APPEND,
  ...REGULATION_QUESTIONS_APPEND,
  ...REPAIR_QUESTIONS_APPEND,
  ...VALUES_QUESTIONS_APPEND,
  ...ACCOUNTABILITY_QUESTIONS_APPEND,
  ...COMMUNICATION_QUESTIONS_APPEND,

  ...BOUNDARIES_QUESTIONS_APPEND,
  ...COLIVING_QUESTIONS_APPEND,
  ...TRUST_QUESTIONS_APPEND,
  ...INTIMACY_QUESTIONS_APPEND,
  ...BREAKUP_EXIT_QUESTIONS_APPEND,
  ...PARENTING_FAMILY_QUESTIONS_APPEND,
];