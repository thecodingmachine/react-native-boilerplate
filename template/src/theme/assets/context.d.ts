// Based on https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/webpack-env/index.d.ts
// Adds support for the runtime `require.context` method.
// https://github.com/facebook/metro/pull/822/
//
// Separate file required until the types land in react-native itself:
// https://github.com/facebook/react-native/pull/41421

declare let module: NodeModule;

declare namespace __MetroModuleApi {
  interface RequireContext {
    /** Return the keys that can be resolved. */
    keys(): string[];
    (id: string): unknown;
    <T>(id: string): T;
    /** **Unimplemented:** Readable identifier for the context module. */
    id: string;
    /** **Unimplemented:** Return the module identifier for a user request. */
    resolve(id: string): string;
  }

  interface RequireFunction {
    /**
     * Returns the exports from a dependency. The call is sync. No request to the server is fired. The compiler ensures that the dependency is available.
     */
    (path: string): unknown;
    <T>(path: string): T;

    /**
     * **Experimental:** Import all modules in a given directory. This module dynamically updates when the files in a directory are added or removed.
     *
     * **Enabling:** This feature can be enabled by setting the `transformer.unstable_allowRequireContext` property to `true` in your Metro configuration.
     *
     * @param path File path pointing to the directory to require.
     * @param recursive Should search for files recursively. Optional, default `true` when `require.context` is used.
     * @param filter Filename filter pattern for use in `require.context`. Optional, default `.*` (any file) when `require.context` is used.
     * @param mode Mode for resolving dynamic dependencies. Defaults to `sync`.
     */
    context(
      path: string,
      recursive?: boolean,
      filter?: RegExp,
      mode?: 'eager' | 'lazy-once' | 'lazy' | 'sync' | 'weak',
    ): RequireContext;
  }
}

/**
 * Declare process variable
 */
declare namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Require extends __MetroModuleApi.RequireFunction {}
}
declare let process: NodeJS.Process;

declare module '*.png';

declare module '*.svg' {
  import type React from 'react';
  import type { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}
