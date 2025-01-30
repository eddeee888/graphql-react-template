import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  schema: "./schema/schema.generated.graphqls",
  documents: "src/**/*.graphql",
};

export default config;
