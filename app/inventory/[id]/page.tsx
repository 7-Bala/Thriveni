import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import CarDetailClient from './CarDetailClient';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function CarDetailPage({ params }: PageProps) {
  const car = await prisma.car.findUnique({
    where: { id: params.id }
  });

  if (!car) {
    notFound();
  }

  return <CarDetailClient car={car} />;
}
