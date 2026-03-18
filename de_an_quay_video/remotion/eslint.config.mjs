import tseslint from "typescript-eslint";
import sonarjs from "eslint-plugin-sonarjs";

export default tseslint.config({
  files: ["src/**/*.{ts,tsx}"],
  extends: [tseslint.configs.base],
  plugins: { sonarjs },
  rules: {
    "sonarjs/cognitive-complexity": ["warn", 15],
    "complexity": ["warn", 10],
    "max-lines-per-function": ["warn", { max: 100, skipBlankLines: true, skipComments: true }],
    "max-depth": ["warn", 4],
  },
});
