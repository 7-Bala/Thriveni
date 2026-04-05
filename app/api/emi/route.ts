import { NextResponse } from 'next/server';
import { z } from 'zod';
import { emiSchema } from '@/lib/validations';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = emiSchema.parse(body);

    const { carPrice, downPayment, tenure, interestRate } = validatedData;

    // P = Principal loan amount
    const P = carPrice - downPayment;
    
    if (P <= 0) {
      return NextResponse.json(
        { success: false, message: 'Down payment cannot be greater than or equal to car price' },
        { status: 400 }
      );
    }

    // r = Monthly interest rate (annual rate / 12 / 100)
    const r = interestRate / 12 / 100;
    
    // n = Tenure in months
    const n = tenure;

    // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    // Generate amortization schedule for first 12 months
    const amortizationSchedule = [];
    let balance = P;
    
    for (let month = 1; month <= Math.min(12, n); month++) {
      const interestPayment = balance * r;
      const principalPayment = emi - interestPayment;
      balance -= principalPayment;
      
      amortizationSchedule.push({
        month,
        principalPayment: Math.round(principalPayment),
        interestPayment: Math.round(interestPayment),
        balance: Math.max(0, Math.round(balance))
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        emi: Math.round(emi),
        loanAmount: Math.round(P),
        totalAmount: Math.round(totalAmount),
        totalInterest: Math.round(totalInterest),
        amortizationSchedule
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
