import { MetadataRoute } from "next";
import { SITE } from "@/lib/siteData";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/conditions", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/treatments", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/specialized-testing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/occupational-therapy", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/policies", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${SITE.url}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
