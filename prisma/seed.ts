import { PrismaClient } from '@prisma/client';

// @ts-ignore
const prisma = new PrismaClient({
  datasourceUrl: 'file:./dev.db'
});

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
      images: JSON.stringify(['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg/960px-Suzuki_Swift_%282024%29_hybrid_DSC_6076.jpg']),
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
      images: JSON.stringify(['https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Suzuki_Baleno_front_20071004.jpg/960px-Suzuki_Baleno_front_20071004.jpg']),
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
      images: JSON.stringify(['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/2022_Honda_City_ZX_i-VTEC_%28India%29_front_view_%28cropped%29.jpg/960px-2022_Honda_City_ZX_i-VTEC_%28India%29_front_view_%28cropped%29.jpg']),
      features: JSON.stringify({ items: ['Sunroof', 'ADAS', 'Leather Seats'] }),
      specs: JSON.stringify({ engine: '1498cc', power: '119bhp' }),
      isNew: true,
      branchId: createdBranches[1].id
    },
    {
      brand: 'Royal Enfield',
      model: 'Classic 350',
      variant: 'Stealth Black',
      type: 'MOTORCYCLE',
      price: 225000,
      fuel: 'PETROL',
      transmission: 'MANUAL',
      year: 2024,
      mileage: 35.0,
      color: JSON.stringify(['Black', 'Silver', 'Chrome']),
      images: JSON.stringify(['https://upload.wikimedia.org/wikipedia/commons/f/f2/Royal_Enfield_Meteor.png']),
      features: JSON.stringify({ items: ['Dual Channel ABS', 'Digital Console', 'LED Tail Light'] }),
      specs: JSON.stringify({ engine: '349cc', power: '20.2bhp' }),
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
