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

    // TODO: eddeee888 remove before merge
    "src/operations-standalone/types.generated.ts": {
      plugins: ["typescript-operations"],
      config: {
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
      },
    },

    // TODO: eddeee888 remove before merge
    "./src/operations-near-operation-files/__generated__/graphql.ts": {
      plugins: ["typescript-operations"],
      config: {
        generateOperationTypes: false,
      },
    },
    "./src/": {
      preset: "near-operation-file",
      plugins: ["typescript-operations"],
      config: {
        importSchemaTypesFrom:
          "./src/operations-near-operation-files/__generated__/graphql.ts",
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
      },
    },

    // TODO: eddeee888 remove before merge
    "./src/operations-near-operation-files-with-doc/__generated__/graphql.ts": {
      plugins: ["typescript-operations"],
      config: {
        generateOperationTypes: false,
      },
    },
    "./src": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated-with-doc.tsx",
      },
      plugins: ["typescript-operations", "typed-document-node"],
      config: {
        importSchemaTypesFrom:
          "./src/operations-near-operation-files-with-doc/__generated__/graphql.ts",
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
      },
    },

    // TODO: eddeee888 remove before merge
    src: {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated-inline.tsx",
      },
      plugins: ["typescript-operations"],
      config: {
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
      },
    },
  },
};

export default config;
