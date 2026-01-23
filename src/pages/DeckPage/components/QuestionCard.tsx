import type { Category, Question } from "../../../domain/types";
import { Card } from "../../../ui/Card";
import { CATEGORY_LABEL } from "../utils/categoryLabels";
import { getTipTextForQuestion } from "../../../config/brandUtils";

const normalizeCategoryLabel = (category: Category) =>
  CATEGORY_LABEL[category] ?? category;

export function QuestionCard({ current }: { current: Question }) {
  const tipText = getTipTextForQuestion(current);

  return (
    <Card>
      <div className="flex items-center justify-between">
        <span
          className="text-[11px] font-extrabold tracking-[0.14em] uppercase"
          style={{ color: "var(--muted)" }}
        >
          {normalizeCategoryLabel(current.category)}
        </span>

        <span
          className="text-[11px] font-extrabold tracking-[0.14em] uppercase"
          style={{ color: "var(--muted)" }}
        >
          Intensity {current.intensity}
        </span>
      </div>

      <div
        className="mt-5 text-[32px] leading-[1.1] font-extrabold tracking-tight"
        style={{ color: "var(--fg)" }}
      >
        {current.prompt}
      </div>

      <div className="mt-5 text-base" style={{ color: "var(--muted)" }}>
        {tipText}
      </div>

      {current.notes ? (
        <div
          className="mt-5 rounded-3xl p-5"
          style={{
            background: "color-mix(in srgb, var(--fg) 3%, transparent)",
            border: "1px solid color-mix(in srgb, var(--fg) 10%, transparent)",
          }}
        >
          <div
            className="text-sm font-extrabold tracking-tight"
            style={{ color: "color-mix(in srgb, var(--fg) 55%, transparent)" }}
          >
            Why this question exists
          </div>

          <div
            className="mt-2 text-lg font-semibold"
            style={{ color: "var(--fg)" }}
          >
            {current.notes}
          </div>
        </div>
      ) : null}
    </Card>
  );
}