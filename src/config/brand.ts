// src/config/brand.ts

export type BrandLayerId = "surface" | "underneath" | "thicker" | "edge" | "open";

export type BrandModeId = "deck" | "tonight" | "checkin" | "pause" | "us";

export type BrandConfig = {
  /** Primary product name (UI + marketing) */
  appName: string;
  shortName: string;
  slug: string;
  domain: string;

  /**
   * Used for document.title and SEO templates.
   * Example: `${pageTitle} · ${defaultTitleTemplate}`
   */
  defaultTitleTemplate: string;

  /** Core public one-liner */
  tagline: string;

  /** Slightly longer (store/landing page) */
  taglineLong: string;

  /** The "spine" of the brand */
  essence: {
    oneLine: string;
    meaning: string;
    tone: {
      notAccusatory: string;
      invitational: string;
      noPressure: string;
    };
  };

  /** Product naming system */
  naming: {
    brand: string;
    coreExperience: string; // "The Deck"
    cardGroupings: string; // "Layers"
    layers: Array<{ id: BrandLayerId; label: string; description: string }>;
    modes: Array<{ id: BrandModeId; label: string; description: string }>;
  };

  /** Reusable UI copy (microcopy) */
  copy: {
    hero: {
      eyebrow: string;
      headline: string;
      subhead: string;
    };
    deck: {
      title: string;
      subtitle: string;
      taglines: string[];
    };
    safety: {
      principles: string[]; // not "safe space" wording, but demonstrates it
      hints: {
        answerOnlyWhatYouWant: string;
        pauseIsOption: string;
        listenNotAgree: string;
        nothingScored: string;
      };
    };
    wordOfMouth: {
      lines: string[];
    };
  };

  /** Philosophy (kept subtle) */
  philosophy: {
    presenceOverPerformance: string;
    curiosityOverCertainty: string;
  };

  /** Helpful derived URLs */
  urls: {
    website: string;
    origin: string;
  };
};

export const BRAND: BrandConfig = {
  appName: "Is This Everything?",
  shortName: "IsThisEverything",
  slug: "isthiseverything",
  domain: "isthiseverything.com",

  defaultTitleTemplate: "Is This Everything?",

  tagline: "A conversation-first relationship space.",
  taglineLong: "A shared space for honest conversation and intentional choice.",

  essence: {
    oneLine: "The moment before clarity.",
    meaning:
      "A question you return to when you’ve been talking, but not saying — dating, but not understanding — choosing plans, but not choosing intention.",
    tone: {
      notAccusatory: "Not accusatory.",
      invitational: "Invitational.",
      noPressure: "Honesty without pressure.",
    },
  },

  naming: {
    brand: "Is This Everything?",
    coreExperience: "The Deck",
    cardGroupings: "Layers",
    layers: [
      {
        id: "surface",
        label: "Surface",
        description: "Warm-up, easy truths, momentum builders.",
      },
      {
        id: "underneath",
        label: "Underneath",
        description: "Values, patterns, habits, and how you move through life.",
      },
      {
        id: "thicker",
        label: "Thicker",
        description: "Fears, needs, expectations, and the stuff we avoid naming.",
      },
      {
        id: "edge",
        label: "Edge",
        description: "Dealbreakers, honesty checks, and real clarity moments.",
      },
      {
        id: "open",
        label: "Open",
        description: "Future, intention, desire, and what you actually want.",
      },
    ],
    modes: [
      {
        id: "deck",
        label: "The Deck",
        description: "Questions that go past the surface.",
      },
      {
        id: "tonight",
        label: "Tonight",
        description: "What are we actually in the mood for? (vibe, budget, energy)",
      },
      {
        id: "checkin",
        label: "Check-In",
        description: "A quick relational pulse to get aligned.",
      },
      {
        id: "pause",
        label: "The Pause",
        description: "When something feels off but no one knows what to say.",
      },
      {
        id: "us",
        label: "Us",
        description: "Shared reflections over time — patterns, growth, and clarity.",
      },
    ],
  },

  copy: {
    hero: {
      eyebrow: "Conversation-first",
      headline: "Is This Everything?",
      subhead: "A place to slow down and actually talk.",
    },
    deck: {
      title: "Is This Everything? – The Deck",
      subtitle: "Not small talk.",
      taglines: [
        "Questions that go past the surface.",
        "Not small talk.",
        "What we don’t usually ask.",
        "A place to be honest.",
      ],
    },
    safety: {
      principles: [
        "Safety comes from absence of pressure, not reassurance.",
        "You don’t have to agree. You just have to listen.",
        "A place where honesty isn’t punished.",
      ],
      hints: {
        answerOnlyWhatYouWant: "Answer only what you’re ready to share.",
        pauseIsOption: "Pause is always an option.",
        listenNotAgree: "You don’t have to agree. You just have to listen.",
        nothingScored: "Nothing here is scored.",
      },
    },
    wordOfMouth: {
      lines: [
        "It’s called Is This Everything? It helps you actually talk instead of guessing.",
        "It’s like… when you want to know if you really know someone.",
      ],
    },
  },

  philosophy: {
    presenceOverPerformance: "Presence > performance",
    curiosityOverCertainty: "Curiosity > certainty",
  },

  urls: {
    website: "https://isthiseverything.com",
    origin: "https://isthiseverything.com",
  },
};

// Optional convenience helpers
export function titleFor(pageTitle?: string) {
  const base = BRAND.defaultTitleTemplate;
  const t = (pageTitle ?? "").trim();
  return t ? `${t} · ${base}` : base;
}

// Optional helpers for lookups
export function getLayer(id: BrandLayerId) {
  return BRAND.naming.layers.find((l) => l.id === id);
}

export function getMode(id: BrandModeId) {
  return BRAND.naming.modes.find((m) => m.id === id);
}