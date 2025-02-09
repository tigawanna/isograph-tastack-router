/** @type {import('tailwindcss').Config} */
import shadcnTailwindPlugin from "./src/components/shadcn/lib/shadcn-tailwind-config.ts";
export default {
    darkMode: ["class"],
    // content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "border-spin": {
                    "100%": {
                        transform: "rotate(-360deg)",
                    },
                },
            },
            animation: {
                "border-spin": "border-spin 7s linear infinite",
            },
            colors: {
                sidebar: {
                    DEFAULT: "var(--sidebar-background)",
                    foreground: "var(--sidebar-foreground)",
                    primary: "var(--sidebar-primary)",
                    "primary-foreground": "var(--sidebar-primary-foreground)",
                    accent: "var(--sidebar-accent)",
                    "accent-foreground": "var(--sidebar-accent-foreground)",
                    border: "var(--sidebar-border)",
                    ring: "var(--sidebar-ring)",
                },
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        shadcnTailwindPlugin,
    ],

};
