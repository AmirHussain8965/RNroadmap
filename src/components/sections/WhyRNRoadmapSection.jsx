'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyRNRoadmapSection() {
  const rnFeatures = [
    'Written and reviewed by a practicing ICU nurse',
    'One structured roadmap, organized by career stage',
    'Grounded in real clinical experience and current standards',
    '2,000+ questions with full rationales, unlimited retakes',
    'Tailored to your exact stage — CNA to CRNA',
    'Guides, flashcards, and audio — study your way'
  ];

  const freeFeatures = [
    'Content is inconsistent, unverified, and often outdated',
    'Scattered across random sites, forums, and videos',
    'Accuracy varies wildly, with no accountability',
    'Limited practice questions, no rationales, or paywalled',
    'Generic, one-size-fits-all content',
    'Text-only, hard to study on the go'
  ];

  return (
    <section className="section_wrapper_custom" id="why">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-4">
          <div className="col-12 col-lg-9">
            <h2 className="section_title_main">
              <span className="gold_text_span">Why</span> RNRoadmap?
            </h2>
            <p className="section_subtitle_desc mx-auto mb-4">
              Free info online is scattered and overwhelming. Mine is everything you need in one place — organized by your stage, built from real ICU bedside experience. I built the resource I wish I'd had.
            </p>
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
              <button type="button" className="btn_gold_solid">
                SHOP GUIDES <i className="bi bi-arrow-up-right ms-1"></i>
              </button>
              <button type="button" className="btn_gold_outline">
                BROWSE THE BUNDLES <i className="bi bi-arrow-up-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="row align-items-center g-4 mt-4">
          {/* RNRoadmap Gold Card */}
          <div className="col-12 col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="comparison_card_gold"
            >
              <div className="comparison_badge_gold">
                RNRoadmap
              </div>
              <div>
                {rnFeatures.map((feat, idx) => (
                  <div key={idx} className="comparison_list_item">
                    <span className="comparison_icon_black">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* VS Divider */}
          <div className="col-12 col-lg-2 text-center my-3 my-lg-0">
            <div className="vs_badge_center">VS</div>
          </div>

          {/* Free Online Resources Dark Card */}
          <div className="col-12 col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="comparison_card_dark"
            >
              <div className="comparison_badge_dark">
                Free Online Resources
              </div>
              <div>
                {freeFeatures.map((feat, idx) => (
                  <div key={idx} className="comparison_list_item">
                    <span className="comparison_icon_white">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
