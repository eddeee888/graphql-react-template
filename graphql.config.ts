import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  schema: "src/**/*.graphqls",
  documents: "src/**/*.graphql.ts",
};

export default config;
