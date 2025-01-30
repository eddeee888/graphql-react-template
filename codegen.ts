import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema/schema.generated.graphqls",
  documents: ["src/**/*.graphql"],
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
  },
};

export default config;
