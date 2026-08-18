import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/tours",
    "/gallery",
    "/reviews",
    "/faq",
    "/contact",
  ];

  return pages.map((page) => ({
    url: `https://firstchoicejapantours.com${page}`,
    lastModified: new Date(),
    priority: 1,
  }));
}