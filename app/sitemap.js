import { getServices, getHomepage } from '@/lib/wordpress'

export default async function sitemap() {
  const [services, homepage] = await Promise.all([getServices(), getHomepage()])

  const serviceEntries = services
    .filter(s => s.slug)
    .map((s) => ({
      url: `https://ekkleon.com/services/${s.slug}`,
      lastModified: s.modified ? new Date(s.modified) : new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

  return [
    {
      url: 'https://ekkleon.com',
      lastModified: homepage?.modified ? new Date(homepage.modified) : new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...serviceEntries,
    {
      url: 'https://ekkleon.com/ai-info',
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://ekkleon.com/privacy-policy',
      lastModified: new Date('2026-05-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
