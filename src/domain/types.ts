export type Category =
  | "intent"
  | "accountability"
  | "communication"
  | "regulation"
  | "money"
  | "repair"
  | "values"
  | "humor"
  | "anchor"
  | "boundaries"
  | "co_living"
  | "trust"
  | "intimacy"
  | "parenting_family"
  | "breakup_exit"
  | "adult_parent"
  | "marriage"
  | "health_wellness"
  | "fitness_goals"

export type Tone = "gentle" | "neutral" | "direct" | "reflective";

export type Question = {
  id: string;
  prompt: string;
  category: Category;
  tone: Tone;
  tags: string[];
  intensity: 1 | 2 | 3;
  notes?: string;
};

export type DeckOptions = {
  size: number;
  tone: Tone | "mixed";
  excludeTags: string[];
  weights?: Partial<Record<Category, number>>; // optional
  recentQuestionIds?: string[];
  categories?: Category[]; // NEW
};

export type Deck = {
  id: string;
  createdAt: number;
  options: DeckOptions;
  questions: Question[];
  index: number; // current card index
  savedQuestionIds: string[];

  swapsByIndex?: Record<number, number>;
};