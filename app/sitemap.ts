import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://thrivenicars.com';

  const staticRoutes = [
    '',
    '/about',
    '/inventory',
    '/ventures',
    '/offers',
    '/testimonials',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  try {
    const cars = await prisma.car.findMany({
      where: { isAvailable: true },
      select: { id: true, updatedAt: true }
    });

    const dynamicRoutes = cars.map((car) => ({
      url: `${baseUrl}/inventory/${car.id}`,
      lastModified: car.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    return [...staticRoutes, ...dynamicRoutes];
  } catch {
    return staticRoutes;
  }
}
