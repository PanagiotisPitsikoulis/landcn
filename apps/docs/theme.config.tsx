import type { DocsThemeConfig } from "nextra-theme-docs";
import { PlayIcon } from "@repo/ui/icons";
import { Footer } from "@repo/ui/landing";

const config: DocsThemeConfig = {
  logo: (
    <>
      <PlayIcon size={20} />
    </>
  ),
  footer: {
    component: (
      <Footer
        creatorExternalLink='https://www.panagiotispitsikoulis.gr'
        text={{
          brandName: "LandCN",
          copyrightText: "All rights reserved",
          createdByText: "Created by",
          creatorName: "Panagiotis Pitsikoulis",
        }}
      />
    ),
  },
  sidebar: {
    toggleButton: true,
  },
  docsRepositoryBase:
    "https://github.com/PanagiotisPitsikoulis/landing.monorepo",
  project: {
    link: "https://github.com/PanagiotisPitsikoulis/landing.monorepo",
  },
};
export default config;
