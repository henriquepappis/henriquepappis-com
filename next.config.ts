import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.henriquepappis.com" }],
        destination: "https://henriquepappis.com/:path*",
        permanent: true,
      },
    ];
  },
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
