import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const car = await prisma.car.findUnique({
      where: { id: params.id },
      include: {
        branch: true
      }
    });

    if (!car) {
      return NextResponse.json(
        { success: false, message: 'Car not found' },
        { status: 404 }
      );
    }

    // Find related cars (same brand, similar price)
    const relatedCars = await prisma.car.findMany({
      where: {
        id: { not: car.id },
        brand: car.brand,
        price: {
          gte: car.price * 0.8,
          lte: car.price * 1.2
        },
        isAvailable: true
      },
      take: 4,
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(
      { 
        success: true, 
        data: {
          car,
          relatedCars
        }
      },
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error) {
    console.error('Car detail fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
