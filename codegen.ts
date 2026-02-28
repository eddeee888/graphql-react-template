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
        skipTypeNameForRoot: true,
        nonOptionalTypename: true,
      },
    },
  },
};

export default config;
