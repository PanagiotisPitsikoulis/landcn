// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
import { nextui } from "@repo/ui/extras";

const config: Pick<Config, "content" | "presets" | "plugins" | "darkMode"> = {
  content: [
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src//**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.tsx",
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
  ],
  plugins: [nextui()],
  darkMode: "class",
  presets: [sharedConfig],
};

export default config;
