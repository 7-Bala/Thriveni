import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { BRANCHES } from '@/lib/constants';

export async function GET() {
  try {
    // Attempt to fetch from DB
    const branches = await prisma.branch.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' }
    });

    // Fallback to constants if DB is empty
    if (branches.length === 0) {
      return NextResponse.json({ success: true, data: BRANCHES });
    }

    return NextResponse.json({ success: true, data: branches });
  } catch (error) {
    console.error('Branches fetch error:', error);
    
    // Return constants as fallback if DB connection fails
    return NextResponse.json({ success: true, data: BRANCHES });
  }
}
