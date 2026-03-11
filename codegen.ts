import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // schema: "./shopify-2025-04.graphql",
  schema: "https://shopify.dev/admin-graphql-direct-proxy/2025-04",
  documents: ["./src/Test/documents.ts", "./src/Test/documents-2.ts"],
  generates: {
    "src/Test/types.generated.ts": {
      plugins: [
        "typescript-operations",
        {
          add: {
            content:
              "/* tslint:disable */\n/* eslint-disable */\n// @generated\n// This file was automatically generated and should not be edited.",
          },
        },
      ],
      config: {
        generateOperationTypes: false,
        enumType: "native",
      },
    },
    "src/Test/": {
      preset: "near-operation-file",
      presetConfig: {
        folder: "types",
        extension: ".ts",
      },
      plugins: ["typescript-operations"],
      config: {
        declarationKind: "interface",
        defaultScalarType: "unknown",
        enumType: "native",
        extractAllFieldsToTypes: true,
        extractAllFieldsToTypesCompact: true,
        importSchemaTypesFrom: "src/Test/types.generated.ts",
        inlineFragmentTypes: "combine",
        // mergeFragmentTypes causes issues with shopify tag types even when false
        // when false it generates a lot more but merging them seems to not work
        mergeFragmentTypes: true,
        namingConvention: {
          typeNames: "keep",
          enumValues: "keep",
        },
        omitOperationSuffix: true,
        scalars: {
          JSON: "object",
          Money: "string",
          URL: "string",
          Decimal: "string",
          DateTime: "string",
          UnsignedInt64: "bigint",
          Date: "string",
        },
        skipTypename: true,
        skipTypeNameForRoot: true,
        useTypeImports: true,
      },
    },
  },
};

export default config;
