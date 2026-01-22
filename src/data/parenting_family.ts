// parenting_family.ts
import type { Question } from "../domain/types";

export const PARENTING_FAMILY_QUESTIONS_APPEND: Question[] = [
  {
    id: "family-1",
    category: "parenting_family",
    tone: "gentle",
    intensity: 1,
    tags: ["family_systems", "background"],
    prompt: "What did love look like in your home growing up?",
    notes: "Maps family-of-origin model without diagnosing."
  },
  {
    id: "family-2",
    category: "parenting_family",
    tone: "neutral",
    intensity: 2,
    tags: ["family_systems", "conflict"],
    prompt: "How did people in your family handle conflict when you were growing up?",
    notes: "Predicts default conflict scripts."
  },
  {
    id: "family-3",
    category: "parenting_family",
    tone: "neutral",
    intensity: 2,
    tags: ["family_systems", "repair"],
    prompt: "When conflict happened in your home, how did it usually end?",
    notes: "Shows closure norms: repair vs avoidance."
  },
  {
    id: "family-4",
    category: "parenting_family",
    tone: "gentle",
    intensity: 1,
    tags: ["family_systems", "roles"],
    prompt: "What role did you tend to play in your family: peacemaker, protector, rebel, achiever, or something else?",
    notes: "Reveals learned identity patterns."
  },
  {
    id: "family-5",
    category: "parenting_family",
    tone: "neutral",
    intensity: 2,
    tags: ["family_systems", "boundaries"],
    prompt: "What boundaries did your family respect well, and what boundaries did they ignore?",
    notes: "Maps boundary norms early."
  },
  {
    id: "family-6",
    category: "parenting_family",
    tone: "direct",
    intensity: 3,
    tags: ["family_systems", "triggers"],
    prompt: "What family pattern do you refuse to repeat in your own relationships?",
    notes: "High-signal intentionality check."
  },
  {
    id: "family-7",
    category: "parenting_family",
    tone: "gentle",
    intensity: 1,
    tags: ["children", "values"],
    prompt: "If you were raising a child, what values would you want them to feel daily, not just learn verbally?",
    notes: "Values expressed as environment and behavior."
  },
  {
    id: "family-8",
    category: "parenting_family",
    tone: "neutral",
    intensity: 2,
    tags: ["children", "discipline"],
    prompt: "What do you think discipline should teach: fear, respect, self-control, or something else?",
    notes: "Reveals philosophy and potential mismatch."
  },
  {
    id: "family-9",
    category: "parenting_family",
    tone: "neutral",
    intensity: 2,
    tags: ["children", "structure"],
    prompt: "How much structure do you think kids need, and what does that look like in real life?",
    notes: "Operational definition of parenting style."
  },
  {
    id: "family-10",
    category: "parenting_family",
    tone: "direct",
    intensity: 3,
    tags: ["children", "dealbreakers"],
    prompt: "What parenting behavior would make you lose respect for a partner?",
    notes: "Hard boundary and integrity check."
  },
  {
    id: "family-11",
    category: "parenting_family",
    tone: "neutral",
    intensity: 2,
    tags: ["children", "support"],
    prompt: "What does support look like if one person is parenting more day-to-day than the other?",
    notes: "Labor and fairness clarity."
  },
  {
    id: "family-12",
    category: "parenting_family",
    tone: "neutral",
    intensity: 2,
    tags: ["co_parenting", "communication"],
    prompt: "If we disagreed about how to handle a kid situation, how would you want us to resolve it?",
    notes: "Conflict protocol in parenting context."
  },
  {
    id: "family-13",
    category: "parenting_family",
    tone: "gentle",
    intensity: 1,
    tags: ["children", "emotions"],
    prompt: "How comfortable are you with big kid emotions: tantrums, tears, defiance, anxiety?",
    notes: "Regulation capacity check."
  },
  {
    id: "family-14",
    category: "parenting_family",
    tone: "neutral",
    intensity: 2,
    tags: ["children", "role_clarity"],
    prompt: "If kids are in the picture, what role do you think a partner should play early on?",
    notes: "Step-parent/partner boundaries."
  },
  {
    id: "family-15",
    category: "parenting_family",
    tone: "direct",
    intensity: 3,
    tags: ["children", "boundaries"],
    prompt: "What boundaries would you need to feel comfortable around a partner’s child?",
    notes: "Protects child and adult emotional safety."
  },
  {
    id: "family-16",
    category: "parenting_family",
    tone: "neutral",
    intensity: 2,
    tags: ["extended_family", "influence"],
    prompt: "How much influence should extended family have on a couple’s decisions?",
    notes: "In-law pressure test."
  },
  {
    id: "family-17",
    category: "parenting_family",
    tone: "direct",
    intensity: 3,
    tags: ["extended_family", "boundaries"],
    prompt: "What’s a boundary you would set with family to protect your relationship?",
    notes: "Individuation and loyalty check."
  },
  {
    id: "family-18",
    category: "parenting_family",
    tone: "neutral",
    intensity: 2,
    tags: ["holidays", "traditions"],
    prompt: "What traditions matter to you, and which ones are you willing to redesign?",
    notes: "Flexibility vs rigidity in family culture."
  },
  {
    id: "family-19",
    category: "parenting_family",
    tone: "neutral",
    intensity: 2,
    tags: ["money", "family"],
    prompt: "How do you feel about financially supporting family members, and where is your line?",
    notes: "Family money boundary clarity."
  },
  {
    id: "family-20",
    category: "parenting_family",
    tone: "direct",
    intensity: 3,
    tags: ["alignment", "future"],
    prompt: "If our family goals don’t align, do you see compromise as possible or as a dealbreaker?",
    notes: "High-signal compatibility check."
  }
];