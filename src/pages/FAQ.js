import React from 'react';
import './faq.css';

export default function FAQ() {
  const faqs = [
    {
      question: 'What areas do you serve?',
      answer:
        'We proudly serve Foxborough, MA and surrounding towns including Mansfield, Sharon, and Wrentham.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes! We are fully licensed in Massachusetts and carry comprehensive insurance for your protection.',
    },
    {
      question: 'What kind of equipment do you use?',
      answer:
        'We use industry-grade soft-wash systems and hot/cold pressure washers from top manufacturers, ensuring safe and effective cleaning.',
    },
    {
      question: 'How do I schedule a service?',
      answer:
        'Simply call us at (774) 215-5153, email info@washworks.com, or fill out the contact form on our website.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept cash, check, and all major credit cards. Payment is due upon job completion unless otherwise arranged.',
    },
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((item, idx) => (
          <details key={idx} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
