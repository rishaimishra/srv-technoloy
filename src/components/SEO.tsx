import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
  pageType?: 'website' | 'article';
  publishedTime?: string;
  tags?: string[];
}

const SITE_NAME = 'SRV Technology';
const SITE_URL = 'https://srvtechnology.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/srv-tech-board.png`;

const LOCAL_KEYWORDS = [
  'Siliguri', 'West Bengal', 'Darjeeling',
  'North Bengal', 'India',
];

function truncate(str: string, max: number): string {
  return str.length <= max ? str : str.slice(0, max - 1).trimEnd() + '…';
}

function buildKeywords(custom?: string[]): string {
  const base = [
    'SRV Technology',
    'Software Development Company',
    'Web Development Agency',
    ...LOCAL_KEYWORDS,
  ];
  const all = custom ? [...new Set([...custom, ...base])] : base;
  return all.join(', ');
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  pageType = 'website',
  publishedTime,
  tags,
}) => {
  const fullTitle = truncate(`${title} | ${SITE_NAME}`, 60);
  const fullDescription = truncate(description, 160);
  const canonicalUrl = canonical || SITE_URL;
  const keywordContent = buildKeywords(keywords);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywordContent} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={pageType} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="geo.region" content="IN-WB" />
      <meta name="geo.placename" content={['Siliguri', 'Darjeeling', 'West Bengal'].join(', ')} />

      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
};
