import { useTheme } from "@/lib/tanstack/router/use-theme";
import { Moon, Sun } from "lucide-react";
import { ViewTransitionSelect } from "./ViewTransitionSelect";

interface ThemeToggleProps {
  compact?: boolean;
}

export function ThemeToggle({compact}: ThemeToggleProps) {
  const { theme: biTheme, updateTheme } = useTheme();

  function transitionColors() {
    if (typeof window !== "undefined") {
      try {
        document.startViewTransition(() => {
          const newTheme = biTheme === "light" ? "dark" : "light";
          document.documentElement.dataset.theme = newTheme;
          updateTheme(newTheme);
        });
      } catch (error) {
        const newTheme = biTheme === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = newTheme;
        updateTheme(newTheme);
      }
    }
  }
  return (
    <div data-test="theme-toggle" className="flex flex-wrap  items-center justify-between gap-5 ">
      <div className="hidden md:flex">
      <ViewTransitionSelect compact={compact}/>
      </div>
      <button onClick={() => transitionColors()} data-test="theme-toggle-button" className="btn">
        {biTheme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}
