import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { leadSchema } from '@/lib/validations';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = leadSchema.parse(body);

    // Save to database
    const lead = await prisma.lead.create({
      data: {
        name: validatedData.name,
        phone: validatedData.phone,
        email: validatedData.email,
        carInterest: validatedData.carInterest,
        branch: validatedData.branch,
        message: validatedData.message,
        source: validatedData.source,
        queryType: validatedData.queryType
      }
    });

    // Simulate sending WhatsApp notification
    console.log(`WhatsApp notification sent to branch ${validatedData.branch || 'Head Office'} for lead ${lead.id}`);

    return NextResponse.json(
      { 
        success: true, 
        leadId: lead.id, 
        message: "We'll call you within 15 minutes" 
      },
      { 
        status: 201,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      }
    );
  } catch (error) {
    console.error('Lead submission error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
  });
}
