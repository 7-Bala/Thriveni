export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { 
    label: 'About Us', 
    href: '/about',
    dropdown: [
      { label: 'History & Vision', href: '/about#story' },
      { label: 'About MD', href: '/about#leadership' },
      { label: 'Achievements', href: '/about#recognition' },
      { label: 'CSR', href: '/about#csr' }
    ]
  },
  { 
    label: 'Inventory', 
    href: '/inventory',
    dropdown: [
      { label: 'New Cars', href: '/inventory?condition=New' },
      { label: 'Maruti Arena', href: '/inventory?brand=Maruti+Arena' },
      { label: 'NEXA', href: '/inventory?brand=NEXA' },
      { label: 'Honda', href: '/inventory?brand=Honda' },
      { label: 'Royal Enfield', href: '/inventory?brand=Royal+Enfield' },
      { label: 'Commercial', href: '/inventory?brand=Commercial' },
      { label: 'Used Cars', href: '/inventory?condition=Used' }
    ]
  },
  { 
    label: 'Our Ventures', 
    href: '/ventures',
    dropdown: [
      { label: 'Sales', href: '/ventures#sales' },
      { label: 'Service', href: '/ventures#service' },
      { label: 'Driving School', href: '/ventures#driving' },
      { label: 'Insurance', href: '/ventures#insurance' },
      { label: 'Finance & Exchange', href: '/ventures#finance' }
    ]
  },
  { label: 'Offers', href: '/offers' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact Us', href: '/contact' }
];

export const BRANCHES = [
  {
    id: 'b1',
    name: 'T.Nagar Showroom',
    address: '123, G.N. Chetty Road, T.Nagar, Salem - 600017',
    phone: '+91 98765 43210',
    whatsapp: '+91 98765 43210',
    mapUrl: 'https://maps.google.com/?q=T.Nagar,Salem',
    lat: 13.0405,
    lng: 80.2337
  },
  {
    id: 'b2',
    name: 'Anna Nagar Showroom',
    address: '45, Second Avenue, Anna Nagar, Salem - 600040',
    phone: '+91 98765 43211',
    whatsapp: '+91 98765 43211',
    mapUrl: 'https://maps.google.com/?q=Anna+Nagar,Salem',
    lat: 13.0837,
    lng: 80.2119
  }
];

export const BRAND_LIST = [
  'Maruti Arena', 
  'NEXA', 
  'Honda', 
  'Royal Enfield', 
  'Commercial'
];
