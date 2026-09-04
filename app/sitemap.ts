import type { MetadataRoute } from "next";
import { headphones } from "../lib/headphones";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://headphonesbase.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/compare`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/best/headphones`, changeFrequency: "weekly", priority: 0.9 },
    ...headphones.map((item) => ({
      url: `${base}/headphones/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
