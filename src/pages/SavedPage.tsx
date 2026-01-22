import { useEffect, useState } from "react";
import type { Question } from "../domain/types";
import { loadSavedQuestions, saveSavedQuestions } from "../storage/db";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Pill } from "../ui/Pill";

export function SavedPage({ onExit }: { onExit: () => void }) {
  const [saved, setSaved] = useState<Question[]>([]);

  useEffect(() => {
    (async () => setSaved(await loadSavedQuestions()))();
  }, []);

  async function clearAll() {
    await saveSavedQuestions([]);
    setSaved([]);
  }

  return (
    <div className="mx-auto max-w-md px-4 py-6 space-y-4">
      <header className="flex items-center justify-between">
        <Button variant="ghost" onClick={onExit}>Home</Button>
        <Button variant="ghost" onClick={clearAll} disabled={saved.length === 0}>Clear</Button>
      </header>

      <Card>
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold text-slate-900">Saved questions</div>
          <Pill>{saved.length}</Pill>
        </div>
      </Card>

      <div className="space-y-3">
        {saved.map((q) => (
          <Card key={q.id}>
            <div className="flex items-center justify-between">
              <Pill>{q.category}</Pill>
              <Pill>Intensity {q.intensity}</Pill>
            </div>
            <div className="mt-3 text-base font-semibold text-slate-900 leading-snug">{q.prompt}</div>
            {q.notes && <div className="mt-3 text-sm text-slate-600">{q.notes}</div>}
          </Card>
        ))}
        {saved.length === 0 && (
          <Card>
            <div className="text-sm text-slate-600">No saved questions yet.</div>
          </Card>
        )}
      </div>
    </div>
  );
}