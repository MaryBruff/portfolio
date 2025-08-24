import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpackDevMiddleware: (config: {
      watchOptions: {
        poll: number;
        aggregateTimeout: number;
      };
    }) => {
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // Delay rebuild after changes
    };
    return config;
  },
};

export default nextConfig;