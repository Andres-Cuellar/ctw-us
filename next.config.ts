import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  /**
   * Every internal href on this site is derived at runtime from the content
   * layer and prefixed with the active locale (see src/shared/lib/routes.ts).
   * Typed routes cannot express that, so link integrity is guaranteed by the
   * single source of nav paths in src/content/<locale>/global.ts instead.
   */
  typedRoutes: false,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
