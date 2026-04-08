import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database (SQLite)...');

  // Create Branches
  const branches = [
    {
      name: 'T.Nagar Showroom',
      address: '123, G.N. Chetty Road, T.Nagar, Salem - 600017',
      phone: '+91 98765 43210',
      whatsapp: '+91 98765 43210',
      mapUrl: 'https://maps.google.com/?q=T.Nagar,Salem',
      lat: 13.0405,
      lng: 80.2337,
      brands: JSON.stringify(['Maruti Arena', 'NEXA']),
      openTime: '09:00',
      closeTime: '19:00'
    },
    {
      name: 'Anna Nagar Showroom',
      address: '45, Second Avenue, Anna Nagar, Salem - 600040',
      phone: '+91 98765 43211',
      whatsapp: '+91 98765 43211',
      mapUrl: 'https://maps.google.com/?q=Anna+Nagar,Salem',
      lat: 13.0837,
      lng: 80.2119,
      brands: JSON.stringify(['Honda', 'Royal Enfield']),
      openTime: '09:00',
      closeTime: '19:00'
    }
  ];

  const createdBranches = await Promise.all(
    branches.map(branch => prisma.branch.create({ data: branch }))
  );

  // Create Cars
  const cars = [
    {
      brand: 'Maruti Arena',
      model: 'Swift',
      variant: 'ZXI Plus',
      type: 'HATCHBACK',
      price: 899000,
      fuel: 'PETROL',
      transmission: 'MANUAL',
      year: 2024,
      mileage: 22.38,
      color: JSON.stringify(['Red', 'White', 'Silver']),
      images: JSON.stringify(['https://images.unsplash.com/photo-1525609004556-c46c7d6cf048?auto=format&fit=crop&q=80&w=800']),
      features: JSON.stringify({ items: ['Touchscreen', 'Alloy Wheels', 'Auto AC'] }),
      specs: JSON.stringify({ engine: '1197cc', power: '89bhp' }),
      isNew: true,
      branchId: createdBranches[0].id
    },
    {
      brand: 'NEXA',
      model: 'Baleno',
      variant: 'Alpha',
      type: 'HATCHBACK',
      price: 988000,
      fuel: 'PETROL',
      transmission: 'AUTOMATIC',
      year: 2024,
      mileage: 22.94,
      color: JSON.stringify(['Blue', 'Grey', 'Silver']),
      images: JSON.stringify(['https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800']),
      features: JSON.stringify({ items: ['HUD', '360 Camera', '6 Airbags'] }),
      specs: JSON.stringify({ engine: '1197cc', power: '88bhp' }),
      isNew: true,
      branchId: createdBranches[0].id
    },
    {
      brand: 'Honda',
      model: 'City',
      variant: 'ZX CVT',
      type: 'SEDAN',
      price: 1605000,
      fuel: 'PETROL',
      transmission: 'AUTOMATIC',
      year: 2023,
      mileage: 18.4,
      color: JSON.stringify(['White', 'Brown', 'Red']),
      images: JSON.stringify(['https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800']),
      features: JSON.stringify({ items: ['Sunroof', 'ADAS', 'Leather Seats'] }),
      specs: JSON.stringify({ engine: '1498cc', power: '119bhp' }),
      isNew: true,
      branchId: createdBranches[1].id
    }
  ];

  await Promise.all(
    cars.map(car => prisma.car.create({ data: car }))
  );

  // Create Testimonials
  await prisma.testimonial.create({
    data: {
      name: 'Vikram Kumar',
      location: 'Salem',
      carPurchased: 'NEXA Baleno',
      rating: 5,
      review: 'Excellent service and transparent process.',
      isVerified: true
    }
  });

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
