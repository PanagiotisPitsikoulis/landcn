import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
};

export default withNextra(nextConfig);
