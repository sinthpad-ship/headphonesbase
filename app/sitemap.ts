import type { MetadataRoute } from "next";
import { headphones } from "../lib/headphones";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://headphonesbase.com";
  return [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/compare`, changeFrequency: "weekly", priority: 0.8 },
    ...headphones.map((item) => ({
      url: `${base}/headphones/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
