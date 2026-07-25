import React from 'react';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://srvtechnology.com',
  name: 'SRV Technology',
  url: 'https://srvtechnology.com',
  logo: 'https://srvtechnology.com/assets/srv-tech-board.png',
  image: 'https://srvtechnology.com/assets/srv-tech-board.png',
  description:
    'SRV Technology is a leading web development agency in Siliguri, West Bengal & Darjeeling. We provide custom software, Syspro ERP, Salesforce CRM, mobile apps, e-commerce & AI/ML solutions.',
  telephone: ['+91-7001769472', '+91-7063821662'],
  email: 'info@srvtechnology.com',
  foundingDate: '2018',
  founder: { '@type': 'Person', name: 'Vikrant Singh' },
  areaServed: [
    { '@type': 'City', name: 'Siliguri' },
    { '@type': 'City', name: 'Darjeeling' },
    { '@type': 'City', name: 'Jalpaiguri' },
    { '@type': 'City', name: 'Kolkata' },
    { '@type': 'State', name: 'West Bengal' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Continent', name: 'Asia' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'United Arab Emirates' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'West Bengal',
  },
  sameAs: [
    'https://srvtechnology.com',
    'mailto:info@srvtechnology.com',
  ],
  knowsAbout: [
    'Web Development',
    'Software Development',
    'Custom Software Development',
    'Syspro ERP Implementation',
    'Salesforce CRM Development',
    'Mobile App Development',
    'React Native Development',
    'Flutter Development',
    'E-Commerce Development',
    'Shopify Development',
    'Magento Development',
    'WooCommerce Development',
    'AI / ML Development',
    'Artificial Intelligence',
    'Machine Learning',
    'LLM Integration',
    'Gemini API Integration',
    'Cyber Security',
    'Cloud Architecture',
    'DevOps',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development Company in Siliguri',
          description:
            'Professional website and web application development services in Siliguri, West Bengal.',
          areaServed: { '@type': 'City', name: 'Siliguri' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Development Company in West Bengal',
          description:
            'Best website development company serving West Bengal with custom web solutions.',
          areaServed: { '@type': 'State', name: 'West Bengal' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development Agency in Darjeeling',
          description:
            'Top web development agency providing digital solutions in Darjeeling, West Bengal.',
          areaServed: { '@type': 'City', name: 'Darjeeling' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'ERP Implementation in Siliguri',
          description: 'Syspro ERP implementation and customization services in Siliguri.',
          areaServed: { '@type': 'City', name: 'Siliguri' },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Salesforce Services in West Bengal',
          description: 'Salesforce CRM development and implementation across West Bengal.',
          areaServed: { '@type': 'State', name: 'West Bengal' },
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '25',
    bestRating: '5',
  },
};

export const LocalBusinessSchema: React.FC = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
  />
);
