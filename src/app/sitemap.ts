import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://assafmanzur.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/cv`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
