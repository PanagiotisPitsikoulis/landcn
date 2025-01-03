module.exports = {
  extends: ["@repo/eslint-config/next.js"],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/jsx-sort-props": "off"
  }
};
