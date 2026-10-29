/**
 * properties.js — Bhumi Associates
 * Central decoupled property data store and helper functions.
 *
 * IMPORTANT NOTE ON INVENTORY:
 * No verified client property listings have been provided yet.
 * The entries below are strictly development-only sample cards
 * labelled [SAMPLE — NOT REAL]. Do NOT represent these as real inventory.
 *
 * When real listings are verified, add or replace objects in PROPERTIES array.
 */

var PROPERTIES = [
  {
    id: 'prop-1',
    sample: true,
    title: '[SAMPLE — NOT REAL] 3 BHK Builder Floor',
    location: 'Bhajanpura, New Delhi',
    category: 'residential',
    subtype: 'apartment',
    typeLabel: 'Apartment',
    specs: {
      type: '3 BHK',
      area: '1,150 sq.ft',
      status: 'Ready to Move'
    },
    price: 'Price on Request',
    image: 'assets/images/prop-apartment-1.jpg',
    alt: 'Sample 3 BHK Builder Floor in Bhajanpura, New Delhi',
    description: 'Development sample card. Demonstrates residential apartment layout with dedicated parking and road connectivity.',
    enquiryLink: 'https://wa.me/919310704571?text=Enquiry%20regarding%20Property%20Ref%3A%20SAMPLE-3BHK-Apartment'
  },
  {
    id: 'prop-2',
    sample: true,
    title: '[SAMPLE — NOT REAL] Independent Residential House',
    location: 'Shahdara, New Delhi',
    category: 'residential',
    subtype: 'house',
    typeLabel: 'Independent House',
    specs: {
      type: 'Independent House',
      area: '150 sq.yd',
      status: 'Resale'
    },
    price: 'Price on Request',
    image: 'assets/images/prop-house-1.jpg',
    alt: 'Sample Independent House in Shahdara, New Delhi',
    description: 'Development sample card. Demonstrates independent residential property structure with private terrace access.',
    enquiryLink: 'https://wa.me/919310704571?text=Enquiry%20regarding%20Property%20Ref%3A%20SAMPLE-House-Shahdara'
  },
  {
    id: 'prop-3',
    sample: true,
    title: '[SAMPLE — NOT REAL] Retail Commercial Space',
    location: 'Main Market, Bhajanpura, New Delhi',
    category: 'commercial',
    subtype: 'commercial',
    typeLabel: 'Commercial',
    specs: {
      type: 'Retail Shop',
      area: '450 sq.ft',
      status: 'Ground Floor'
    },
    price: 'Price on Request',
    image: 'assets/images/prop-commercial-1.jpg',
    alt: 'Sample Retail Commercial Space in Bhajanpura, New Delhi',
    description: 'Development sample card. Demonstrates prime commercial frontage suitable for retail operations or professional office.',
    enquiryLink: 'https://wa.me/919310704571?text=Enquiry%20regarding%20Property%20Ref%3A%20SAMPLE-Retail-Bhajanpura'
  },
  {
    id: 'prop-4',
    sample: true,
    title: '[SAMPLE — NOT REAL] 2 BHK Modern Apartment',
    location: 'Yamuna Vihar, New Delhi',
    category: 'residential',
    subtype: 'apartment',
    typeLabel: 'Apartment',
    specs: {
      type: '2 BHK',
      area: '850 sq.ft',
      status: 'Ready to Move'
    },
    price: 'Price on Request',
    image: 'assets/images/prop-apartment-2.jpg',
    alt: 'Sample 2 BHK Modern Apartment in Yamuna Vihar, New Delhi',
    description: 'Development sample card. Demonstrates compact urban residential apartment with balcony view and natural light.',
    enquiryLink: 'https://wa.me/919310704571?text=Enquiry%20regarding%20Property%20Ref%3A%20SAMPLE-2BHK-YamunaVihar'
  },
  {
    id: 'prop-5',
    sample: true,
    title: '[SAMPLE — NOT REAL] Duplex Independent Villa',
    location: 'Dilshad Garden, New Delhi',
    category: 'residential',
    subtype: 'house',
    typeLabel: 'Independent House',
    specs: {
      type: 'Duplex Villa',
      area: '200 sq.yd',
      status: 'Spacious Plot'
    },
    price: 'Price on Request',
    image: 'assets/images/prop-house-2.jpg',
    alt: 'Sample Duplex Independent Villa in Dilshad Garden, New Delhi',
    description: 'Development sample card. Demonstrates multi-level residential living with modular kitchen and private front court.',
    enquiryLink: 'https://wa.me/919310704571?text=Enquiry%20regarding%20Property%20Ref%3A%20SAMPLE-Duplex-DilshadGarden'
  },
  {
    id: 'prop-6',
    sample: true,
    title: '[SAMPLE — NOT REAL] Corporate Office Space',
    location: 'Shahdara Commercial Hub, New Delhi',
    category: 'commercial',
    subtype: 'commercial',
    typeLabel: 'Commercial',
    specs: {
      type: 'Office Suite',
      area: '1,200 sq.ft',
      status: 'Fitted Out'
    },
    price: 'Price on Request',
    image: 'assets/images/prop-commercial-2.jpg',
    alt: 'Sample Corporate Office Space in Shahdara, New Delhi',
    description: 'Development sample card. Demonstrates commercial office floor with reception area, meeting room, and workstation layout.',
    enquiryLink: 'https://wa.me/919310704571?text=Enquiry%20regarding%20Property%20Ref%3A%20SAMPLE-Office-Shahdara'
  }
];

/**
 * Filter properties by category key.
 * Supported filters: 'all', 'residential', 'apartment', 'house', 'commercial'
 *
 * @param {string} filterKey
 * @returns {Array} Filtered list of property objects
 */
function getFilteredProperties(filterKey) {
  if (!filterKey || filterKey === 'all') {
    return PROPERTIES;
  }
  if (filterKey === 'residential') {
    return PROPERTIES.filter(function (p) {
      return p.category === 'residential';
    });
  }
  if (filterKey === 'apartment') {
    return PROPERTIES.filter(function (p) {
      return p.subtype === 'apartment';
    });
  }
  if (filterKey === 'house') {
    return PROPERTIES.filter(function (p) {
      return p.subtype === 'house';
    });
  }
  if (filterKey === 'commercial') {
    return PROPERTIES.filter(function (p) {
      return p.category === 'commercial' || p.subtype === 'commercial';
    });
  }
  return PROPERTIES;
}

/**
 * Retrieve a property by unique id.
 * @param {string} id
 * @returns {Object|undefined}
 */
function getPropertyById(id) {
  return PROPERTIES.find(function (p) { return p.id === id; });
}
