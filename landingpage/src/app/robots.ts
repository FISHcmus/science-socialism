import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/gallery" },
    sitemap: "https://cnxhkh-nhom7.vercel.app/sitemap.xml",
  };
}
