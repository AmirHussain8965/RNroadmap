'use client';

import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Will These Work On My Phone?',
      answer: "Yes. Every guide and flashcard set is a PDF you can open and study on any phone, tablet, or computer — even offline once it's downloaded."
    },
    {
      question: 'How Do I Get My Files After I Buy?',
      answer: 'After completing your purchase, your files are available for instant digital download directly on the confirmation page and sent immediately to your email.'
    },
    {
      question: 'Is This A One-Time Purchase?',
      answer: 'Individual study guides and flashcard bundles are a one-time purchase with lifetime access. Memberships are recurring subscriptions that can be cancelled anytime.'
    },
    {
      question: 'Who Creates These Guides?',
      answer: 'All guides and flashcard decks are created and reviewed by Walner Alcius, a practicing ICU nurse (RN, BSN, CCRN) with over 11 years of experience.'
    },
    {
      question: 'What If I Have A Problem With My Order?',
      answer: 'Our support team is available 24/7! You can reach us directly via email at hello@rnroadmap.com or use the contact form below.'
    }
  ];

  return (
    <section className="section_wrapper_custom" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main">
              <span className="gold_text_span">FAQs</span>
            </h2>
            <p className="section_subtitle_desc mx-auto">
              We have compiled answers to the most common questions asked about our guides, membership &amp; commitment to your success.
            </p>
          </div>
        </div>

        {/* Bootstrap Accordion Container */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <div className="accordion accordion_custom_wrapper" id="faqBootstrapAccordion">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className={`accordion-item ${isOpen ? 'faq_item_active' : ''}`}>
                    <h3 className="accordion-header" id={`heading${idx}`}>
                      <button
                        className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        aria-controls={`collapse${idx}`}
                      >
                        <span className="faq_question_text">{faq.question}</span>
                      </button>
                    </h3>
                    <div
                      id={`collapse${idx}`}
                      className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                      aria-labelledby={`heading${idx}`}
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Callout Button */}
            <div className="text-center mt-5">
              <button type="button" className="btn_gold_solid fs-6 py-3 px-4">
                STILL HAVE QUESTIONS? ASK US NOW <i className="bi bi-arrow-up-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
