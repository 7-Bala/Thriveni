export const dynamic = "force-dynamic";
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    
    const brand = searchParams.get('brand');
    const type = searchParams.get('type');
    const fuelType = searchParams.get('fuelType');
    const transmission = searchParams.get('transmission');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const condition = searchParams.get('condition'); // 'New' or 'Used'
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '24');
    const skip = (page - 1) * limit;
    
    const sort = searchParams.get('sort') || 'relevance';

    // Build the where clause
    const where: Prisma.CarWhereInput = {
      isAvailable: true
    };
    
    if (brand && brand !== 'All') where.brand = brand;
    if (type) where.type = type.toUpperCase();
    if (fuelType) where.fuel = fuelType.toUpperCase();
    if (transmission) where.transmission = transmission.toUpperCase();
    
    if (minPrice || maxPrice) {
      where.price = {};
      if (minPrice) where.price.gte = parseFloat(minPrice);
      if (maxPrice) where.price.lte = parseFloat(maxPrice);
    }
    
    if (condition) {
      where.isNew = condition === 'New';
    }

    // Build the orderBy clause
    let orderBy: Prisma.CarOrderByWithRelationInput = { createdAt: 'desc' };
    switch (sort) {
      case 'price_asc':
        orderBy = { price: 'asc' };
        break;
      case 'price_desc':
        orderBy = { price: 'desc' };
        break;
      case 'newest':
        orderBy = { createdAt: 'desc' };
        break;
      case 'mileage_asc':
        orderBy = { mileage: 'asc' };
        break;
    }

    // Execute queries
    const [total, cars] = await Promise.all([
      prisma.car.count({ where }),
      prisma.car.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          branch: {
            select: { name: true, mapUrl: true }
          }
        }
      })
    ]);

    return NextResponse.json(
      { 
        success: true, 
        data: {
          cars,
          pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
          },
          filters: { brand, type, condition }
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
    console.error('Inventory fetch error:', error);
    
    // Fallback for build/demo environment
    return NextResponse.json({ 
      success: true, 
      data: {
        cars: [],
        pagination: { total: 0, page: 1, limit: 24, totalPages: 0 },
        filters: {}
      }
    });
  }
}
