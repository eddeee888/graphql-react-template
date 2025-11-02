import type { Defer20220824Handler } from "@apollo/client/incremental";
declare module "@apollo/client" {
  export type TypeOverrides = Defer20220824Handler.TypeOverrides;
}
