'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MembershipPlansSection() {
  const plans = [
    {
      name: 'Essential',
      price: '$20.99',
      desc: 'Build your foundation with core study guides covering fundamentals and every essential nursing school topic.',
      features: [
        'Nursing Study Guides',
        'Pharmacology',
        'Med-Surg',
        'Dosage Calculations',
        'OB/Pediatrics',
        'Fundamentals',
        'ATI Resources',
        'Resume Templates'
      ],
      featured: false
    },
    {
      name: 'Professional',
      price: '$29.99',
      desc: 'Get exam-ready with full NCLEX review, audio guides, the complete question bank, and critical care study resources included.',
      subheader: 'Everything In Essential, Plus:',
      features: [
        'NCLEX Review',
        'Audio Study Guides',
        'NCLEX Question Bank',
        'ICU Guides',
        'Hemodynamics',
        'Vasopressors',
        'CCRN Resources'
      ],
      featured: true
    },
    {
      name: 'Ultimate',
      price: '$29.99',
      desc: 'Go further with advanced CRNA prep, premium content, expanded resources, and priority support.',
      subheader: 'Everything In Professional, Plus:',
      features: [
        'CRNA Interview Prep',
        'Critical Care Physiology',
        'Advanced Pharmacology',
        'Premium Audio Library',
        'Future Content',
        'Priority Support'
      ],
      featured: false
    }
  ];

  return (
    <section className="section_wrapper_custom" id="pricing-plans">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h1 className="section_title_main display-4 fw-bold">
              MEMBERSHIP
            </h1>
            <p className="section_subtitle_desc mx-auto mt-2">
              Get full access to every guide, flashcard deck, and audio lesson — one membership, every stage of your nursing journey.
            </p>
          </div>
        </div>

        {/* 3 Columns Row */}
        <div className="row g-4 align-items-stretch">
          {plans.map((p, idx) => (
            <div key={p.name} className="col-12 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`membership_card_box ${p.featured ? 'featured' : ''}`}
              >
                {/* Header */}
                <h2>{p.name}</h2>

                {/* Price */}
                <h3>{p.price} <span>/month</span></h3>

                <hr className="border-warning opacity-25 my-3" />

                {/* Description */}
                <p className="instructor_bio_paragraph small leading-relaxed mb-4">
                  {p.desc}
                </p>

                {/* Subheader */}
                {p.subheader && (
                  <h5 className="gold_text_span small fw-bold mb-3">{p.subheader}</h5>
                )}

                {/* Feature List */}
                <div className="flex-grow-1 mb-4">
                  {p.features.map((f, fIdx) => (
                    <div key={fIdx} className="d-flex align-items-center gap-2 mb-2">
                      <span className="membership_feature_icon">
                        <i className="bi bi-arrow-right"></i>
                      </span>
                      <span className="text-white-80 small fw-medium">{f}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {p.featured ? (
                  <button type="button" className="btn_gold_solid w-100 py-3 mt-auto">
                    CHOOSE PLAN <i className="bi bi-arrow-up-right ms-1"></i>
                  </button>
                ) : (
                  <button type="button" className="btn_gold_outline w-100 py-3 mt-auto">
                    CHOOSE PLAN <i className="bi bi-arrow-up-right ms-1"></i>
                  </button>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
