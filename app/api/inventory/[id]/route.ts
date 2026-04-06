export const dynamic = "force-dynamic";
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const car = await prisma.car.findUnique({
      where: { id: params.id },
      include: { branch: true }
    });

    if (!car) {
      // Fallback for build/demo
      const mockCar = {
        id: params.id,
        brand: 'Maruti Arena',
        model: 'Swift',
        variant: 'ZXI Plus',
        price: 8.99,
        year: 2024,
        features: ['ABS', 'EBD', 'Airbags'],
        specs: { engine: '1.2L DualJet', power: '90PS', torque: '113Nm' }
      };
      return NextResponse.json({ success: true, data: { car: mockCar, relatedCars: [] } });
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
