import { getShareCaption, getShareLine } from "../../../config/brandUtils";

// Use on the share image as the “small line” area (tip/caption)
export const SHARE_CAPTION_TEXT = getShareCaption();

// If you still want the old name:
export const TIP_TEXT = getShareLine("safety_any");

// Optional exports (useful if different layouts want different lanes)
export const SAFETY_PRINCIPLE_TEXT = getShareLine("safety_principle");
export const SAFETY_HINT_TEXT = getShareLine("safety_hint");
export const PHILOSOPHY_TEXT = getShareLine("philosophy");
export const DECK_TAGLINE_TEXT = getShareLine("deck_tagline");
export const WORD_OF_MOUTH_TEXT = getShareLine("word_of_mouth");
export const ESSENCE_ONE_LINE_TEXT = getShareLine("essence_one_line");
export const TAGLINE_TEXT = getShareLine("tagline");
export const TAGLINE_LONG_TEXT = getShareLine("tagline_long");