export interface LeadSource {
  sourcePage: string;
  sourceUrl: string;
}

// Captures the current landing page path + query so every lead submission can
// be attributed to the page/campaign it originated from.
export function getLeadSource(): LeadSource {
  if (typeof window === 'undefined') return { sourcePage: '/', sourceUrl: '/' };
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const search = window.location.search;
  return { sourcePage: path, sourceUrl: `${path}${search}` };
}
