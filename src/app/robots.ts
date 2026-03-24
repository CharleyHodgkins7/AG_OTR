import { MetadataRoute } from "next";
import { SITE } from "@/lib/siteData";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "PetalBot",
        disallow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
