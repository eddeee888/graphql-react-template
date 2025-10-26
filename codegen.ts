import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/**/*.graphqls",
  documents: "src/**/*.graphql.ts",
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        avoidOptionals: {
          // Use `null` for nullable fields instead of optionals
          field: true,
        },
        skipTypeNameForRoot: true,
        nonOptionalTypename: true,
      },
    },
  },
};

export default config;
