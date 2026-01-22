export type Category =
  | "intent"
  | "accountability"
  | "communication"
  | "regulation"
  | "money"
  | "anchor"
  | "repair"
  | "values"
  | "humor";

export type Tone = "gentle" | "neutral" | "direct";

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
  size: 5 | 8 | 12;
  tone: Tone | "mixed";
  excludeTags: string[];
  weights?: Partial<Record<Category, number>>; // optional
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