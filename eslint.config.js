import globals from "globals";
import my from "@eddeee888/eslint-plugin";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: [
      "dist",
      "src/**/*.generated.*",
      "eslint.config.js",
      "graphql.config.ts",
      "codegen.ts",
    ],
  },
  ...my.configs["base-typescript"],
  ...my.configs.typescript,
  ...my.configs["react-typescript"],
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: { "react-refresh": reactRefresh },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
