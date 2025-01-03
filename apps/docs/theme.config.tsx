import type { DocsThemeConfig } from "nextra-theme-docs";
import { PlayIcon } from "@repo/ui/icons";

const config: DocsThemeConfig = {
  logo: (
    <>
      <PlayIcon size={20} />
    </>
  ),
  sidebar: {
    toggleButton: true,
  },
  banner: {
    content: "LandCN, the ShadCN for landing pages.",
  },
  color: {
    hue: 200,
    lightness: 50,
    saturation: 50,
  },
  docsRepositoryBase:
    "https://github.com/PanagiotisPitsikoulis/landing.monorepo",
  project: {
    link: "https://github.com/PanagiotisPitsikoulis/landing.monorepo",
  },
};
export default config;
