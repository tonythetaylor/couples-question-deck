import { useEffect, useState } from "react";

function isLandscape() {
  return window.matchMedia("(orientation: landscape)").matches;
}

export function PortraitGuard() {
  const [landscape, setLandscape] = useState(false);

  useEffect(() => {
    const update = () => setLandscape(isLandscape());

    update(); // initial check
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  // Desktop should never be blocked
  if (window.innerWidth > 768) return null;

  if (!landscape) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-sm text-center space-y-4">
        <div className="text-2xl font-extrabold tracking-tight">
          Is This Everything?
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          This experience is designed for portrait mode.
          Please rotate your device back to continue.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-xs font-semibold tracking-wide">
          Portrait only
        </div>
      </div>
    </div>
  );
}