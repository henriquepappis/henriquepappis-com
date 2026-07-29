import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: '</sitemap.xml>; rel="sitemap", </robots.txt>; rel="robots"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
