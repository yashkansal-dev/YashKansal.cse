import type { MetadataRoute } from "next";

const siteUrl = "https://yashkansal.dev";
const lastModified = new Date();

const blogPosts = [
  "designing-real-time-systems-with-webrtc",
  "reducing-backend-latency-in-mern-applications",
  "using-genetic-algorithms-for-timetable-optimization",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${siteUrl}/images/ykansal.webp`,
        `${siteUrl}/images/og-preview.webp`,
      ],
    },
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((slug) => ({
      url: `${siteUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
