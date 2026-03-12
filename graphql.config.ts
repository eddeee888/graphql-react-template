import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  schema: "./shopify-2025-04.graphql",
  documents: ["./src/Test/documents.ts", "./src/Test/documents-2.ts"],
};

export default config;
