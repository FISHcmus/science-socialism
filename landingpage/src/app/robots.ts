import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/gallery" },
    sitemap: "https://cnxhkh.fishcmus.io.vn/sitemap.xml",
  };
}
