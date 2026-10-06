import type { MetadataRoute } from "next";
import { abs } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/radnici", "/radnici/"],
    },
    sitemap: abs("/sitemap.xml"),
  };
}
