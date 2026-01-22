import { useState } from "react";
import { HomePage } from "../pages/HomePage";
import { DeckPage } from "../pages/DeckPage";
import { SavedPage } from "../pages/SavedPage";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

type Route = "home" | "deck" | "saved";

export default function App() {
  const [route, setRoute] = useState<Route>("home");

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 pt-safe">
      {" "}
      {route === "home" && (
        <div className="space-y-4">
          <HomePage onStart={() => setRoute("deck")} />
          <div className="mx-auto max-w-md px-4 pb-10">
            <Card>
              <div className="text-sm font-bold text-slate-900">Library</div>
              <p className="mt-2 text-sm text-slate-600">
                Keep what works. Save questions worth revisiting.
              </p>
              <div className="mt-3">
                <Button className="w-full" onClick={() => setRoute("saved")}>
                  View saved
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
      {route === "deck" && <DeckPage onExit={() => setRoute("home")} />}
      {route === "saved" && <SavedPage onExit={() => setRoute("home")} />}
    </div>
  );
}
