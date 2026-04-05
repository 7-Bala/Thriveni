'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InventoryPage() {
  const [activeBrand, setActiveBrand] = useState('All');

  const cars = [
    { id: '1', brand: 'Maruti Arena', model: 'Swift', variant: 'ZXI Plus', price: '₹8.99 Lakh', fuel: 'Petrol', trans: 'Manual', year: 2024, img: '/images/placeholder-car.jpg' },
    { id: '2', brand: 'NEXA', model: 'Baleno', variant: 'Alpha', price: '₹9.88 Lakh', fuel: 'Petrol', trans: 'Automatic', year: 2024, img: '/images/placeholder-car.jpg' },
    { id: '3', brand: 'Honda', model: 'City', variant: 'ZX CVT', price: '₹16.05 Lakh', fuel: 'Petrol', trans: 'Automatic', year: 2023, img: '/images/placeholder-car.jpg' },
    { id: '4', brand: 'Royal Enfield', model: 'Classic 350', variant: 'Dark Stealth', price: '₹2.20 Lakh', fuel: 'Petrol', trans: 'Manual', year: 2024, img: '/images/placeholder-car.jpg' },
  ];

  return (
    <div className="min-h-screen bg-bg-primary pt-20">
      <div className="bg-metal-900 py-16 text-center">
        <div className="container-custom">
          <div className="text-metal-400 text-sm mb-4">Home / Inventory</div>
          <h1 className="font-display text-4xl text-metal-50">Explore Our Collection</h1>
          <p className="text-metal-400 mt-3">200+ vehicles across 5 brands. Filter to find yours.</p>
          <div className="max-w-2xl mx-auto mt-8 relative">
            <input type="text" placeholder="Search cars..." className="w-full bg-metal-800 border border-metal-700 text-metal-50 placeholder-metal-500 rounded-lg py-4 px-6 text-base outline-none focus:border-amber-cta" />
            <button className="absolute right-2 top-2 bottom-2 bg-amber-cta text-metal-900 rounded-md px-6 font-semibold">Search</button>
          </div>
        </div>
      </div>

      <div className="container-custom py-12 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-xl border border-metal-100 p-6 sticky top-24">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-metal-800">Filters</h2>
              <button className="text-amber-cta text-sm">Clear All</button>
            </div>
            
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-sm font-medium text-metal-700 mb-3">Brand</h3>
                <div className="flex flex-col gap-2">
                  {['All', 'Maruti Arena', 'NEXA', 'Honda', 'Royal Enfield', 'Commercial'].map(brand => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer text-sm text-metal-600">
                      <input type="radio" name="brand" checked={activeBrand === brand} onChange={() => setActiveBrand(brand)} className="text-olive-600 focus:ring-olive-600" />
                      {brand}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div className="text-metal-600 text-sm">Showing {cars.length} vehicles</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map(car => (
              <div key={car.id} className="bg-white rounded-xl border border-metal-100 overflow-hidden hover:shadow-automotive transition-all group">
                <div className="aspect-[4/3] relative bg-metal-100 overflow-hidden">
                  <Image src={car.img} alt={car.model} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-olive-600 text-white text-xs font-semibold px-2 py-1 rounded">NEW</div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-olive-600 bg-olive-50 px-2 py-0.5 rounded inline-block">{car.brand}</div>
                  <h3 className="font-display text-xl font-semibold text-metal-800 mt-2">{car.model}</h3>
                  <p className="text-sm text-metal-500">{car.variant}</p>
                  
                  <div className="flex gap-4 mt-4 text-xs text-metal-500">
                    <span>{car.fuel}</span>
                    <span>{car.trans}</span>
                    <span>{car.year}</span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-metal-100 flex justify-between items-end">
                    <div>
                      <div className="font-mono text-lg font-semibold text-metal-800">{car.price}</div>
                      <div className="text-xs text-olive-600">~₹8,500/mo</div>
                    </div>
                    <Link href={`/inventory/${car.id}`} className="bg-metal-900 text-white px-4 py-2 rounded text-xs font-semibold hover:bg-olive-800 transition-colors">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
