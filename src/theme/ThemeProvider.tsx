import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { applyTheme, getStoredTheme, setStoredTheme, type ThemeMode, resolveDark } from "./theme";

type ThemeCtx = {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => getStoredTheme());

  // Apply on mount + whenever mode changes
  useEffect(() => {
    applyTheme(mode);
    setStoredTheme(mode);
  }, [mode]);

  // Live sync OS theme changes when mode === "system"
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq) return;

    const onChange = () => {
      const stored = getStoredTheme();
      if (stored === "system") applyTheme("system");
    };

    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, []);

  const value = useMemo(
    () => ({ mode, setMode, isDark: resolveDark(mode) }),
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}