'use client';

import { motion } from 'framer-motion';

interface DonutChartProps {
  principal: number;
  interest: number;
  total: number;
  animated?: boolean;
}

export default function DonutChart({ principal, interest, total, animated = true }: DonutChartProps) {
  const principalPercent = total > 0 ? (principal / total) * 100 : 0;
  const interestPercent = total > 0 ? (interest / total) * 100 : 0;

  // SVG donut chart properties
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const principalLength = (principalPercent / 100) * circumference;
  const interestLength = (interestPercent / 100) * circumference;

  const formatAmount = (num: number) => {
    return num.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* SVG Donut Chart */}
      <div className="relative w-64 h-64">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="principalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(230, 180, 42)" />
              <stop offset="100%" stopColor="rgb(180, 140, 20)" />
            </linearGradient>
            <linearGradient id="interestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(150, 150, 150)" />
              <stop offset="100%" stopColor="rgb(100, 100, 100)" />
            </linearGradient>
          </defs>

          {/* Background Circle */}
          <circle cx="100" cy="100" r={radius} fill="none" stroke="#e5e5e5" strokeWidth="20" />

          {/* Principal Arc */}
          <motion.circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="url(#principalGrad)"
            strokeWidth="20"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
            animate={{
              strokeDashoffset: animated ? circumference - principalLength : circumference - principalLength,
            }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          />

          {/* Interest Arc */}
          <motion.circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="url(#interestGrad)"
            strokeWidth="20"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - principalLength}
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
            animate={{
              strokeDashoffset: animated ? circumference - principalLength - interestLength : circumference - principalLength - interestLength,
            }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
          />

          {/* Center Text */}
          <text x="100" y="90" textAnchor="middle" className="text-xs font-bold fill-metal-900">
            Principal vs Interest
          </text>
          <text x="100" y="110" textAnchor="middle" className="text-[11px] fill-metal-500">
            {principalPercent.toFixed(0)}% vs {interestPercent.toFixed(0)}%
          </text>
        </svg>

        {/* Overlay center content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="font-mono text-metal-900 font-bold text-lg">
              ₹{formatAmount(principal + interest)}
            </div>
            <div className="text-[10px] text-metal-500 font-light">Total</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="w-full space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4 p-4 bg-amber-50 border border-amber-200 rounded-lg"
        >
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-cta to-yellow-600" />
          <div className="flex-1">
            <div className="font-body text-sm font-semibold text-metal-900">Principal Amount</div>
            <div className="font-mono text-xs text-metal-600">₹{formatAmount(principal)}</div>
          </div>
          <div className="text-sm font-bold text-amber-cta font-mono">{principalPercent.toFixed(1)}%</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-lg"
        >
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-400 to-gray-600" />
          <div className="flex-1">
            <div className="font-body text-sm font-semibold text-metal-900">Interest Amount</div>
            <div className="font-mono text-xs text-metal-600">₹{formatAmount(interest)}</div>
          </div>
          <div className="text-sm font-bold text-gray-600 font-mono">{interestPercent.toFixed(1)}%</div>
        </motion.div>
      </div>

      {/* Info */}
      <p className="text-center font-body text-xs text-metal-500 italic">
        Visualization of how your EMI is split between principal and interest over the entire tenure.
      </p>
    </div>
  );
}
