
import { useState } from "react";

interface ThemeToggleProps {}

export function ThemeToggle({}: ThemeToggleProps) {
  const allDaisyUiThems = [
    "forest",
    "cupacake",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "luxury",
    "dracula",
    "night",
    "cmyk",
    "autumn",
    "winter",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
  ];
  // const { theme, updateTheme } = useTheme();
  const [theme, setTheme] = useState(allDaisyUiThems[0]);

  function changeTheme(theme: string) {
    try {
      document.startViewTransition(() => {
        document.documentElement.dataset.theme = theme;
        setTheme(theme);
      });
    } catch (error) {
      document.documentElement.dataset.theme = theme;
      setTheme(theme);
    }
  }

  return (
    <div data-test="theme-toggle" className="flex items-center justify-between gap-5 ">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 p-1 px-2">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048">
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-100 rounded-box z-1  gap-2 w-52 p-2 shadow-2xl">
          {allDaisyUiThems.map((thm) => {
            return (
              <li
                data-selected={thm === theme ? true : false}
                className="btn btn-ghost btn-sm w-full   data-[selected=true]:bg-primary data-[selected=true]:text-primary-content px-2 min-h-5  justify-start"
                key={thm}
                onClick={() => {
                  changeTheme(thm);
                }}>
                {thm}
              </li>
            );})}
        </ul>
      </div>
      <div className="hidden md:flex">
        {import.meta.env.DEV && (
          <select
            className="select select-bordered select-sm max-w-xs"
            onChange={(e) => (document.documentElement.dataset.style = e.target.value)}>
            <option value="default">Default</option>
            <option value="vertical">Vertical</option>
            <option value="wipe">Wipe</option>
            <option value="angled">Angled</option>
            <option value="flip">Flip</option>
            <option value="slides">Slides</option>
          </select>
        )}
      </div>
      {/* <button onClick={() => transitionColors()} data-test="theme-toggle-button" className="btn">
        {theme === "light" ? <Moon /> : <Sun />}
      </button> */}
    </div>
  );
}
