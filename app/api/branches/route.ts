import { NextResponse } from 'next/server';
import { BRANCHES } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { prisma } = await import('@/lib/prisma');
    const branches = await prisma.branch.findMany({
      where: { isActive: true },
      orderBy: { name: 'asc' }
    });

    if (branches.length === 0) {
      return NextResponse.json({ success: true, data: BRANCHES });
    }

    return NextResponse.json({ success: true, data: branches });
  } catch (error) {
    console.error('Branches fetch error handled for build:', error);
    return NextResponse.json({ success: true, data: BRANCHES });
  }
}
