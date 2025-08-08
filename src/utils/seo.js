// src/utils/seo.js

/**
 * renderLocalBusinessSchema
 * @param {object} business - { name, address, phone, url }
 * @returns {string} JSON-LD script tag
 */
export function renderLocalBusinessSchema(business) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    address: business.address,
    telephone: business.phone,
    url: business.url
  };
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

/**
 * renderFAQSchema
 * @param {Array<{question: string, answer: string}>} faqs
 * @returns {string} JSON-LD script tag
 */
export function renderFAQSchema(faqs) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
