import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/**/*.graphqls",
  documents: "src/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/types.generated.ts": {
      plugins: ["typescript"],
      config: {
        scalars: {
          ID: { input: "string | number", output: "string" },
          DateTime: "string",
        },
      },
    },
    "./src/": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "./graphql/types.generated.ts",
        extension: ".generated.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        enumAsTypes: true,
        nonOptionalTypename: true,
        documentMode: "documentNode",
      },
    },
  },
};

export default config;
