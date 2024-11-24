import type { MetadataRoute } from 'next';
import { getAllPosts, getPostSlugs } from 'src/lib/api';

function url(suffix: string): string {
  return `https://lillestrømshowkor.no${suffix}`;
}

function post(slug: string, date: string) {
  return {
    slug,
    date,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = [
    post('2024-05-30-byfesten-lillestrøm', '2024-05-30'),
    post('2024-06-01-rekruttere-menn', '2024-06-01'),
    post('2024-06-21-hverdag-i-koret', '2024-06-21'),
  ].map((post) => {
    return {
      url: url(`/${post.slug}`),
      lastModified: '2024-08-01',
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  }) as MetadataRoute.Sitemap;

  return [
    {
      url: url(''),
      lastModified: new Date(2024, 9, 4),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: url('/blog'),
      lastModified: new Date(2024, 9, 4),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    {
      url: url('/contact'),
      lastModified: '2024-09-04',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: url('/join'),
      lastModified: new Date(2024, 9, 4),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...posts,
  ];
}
