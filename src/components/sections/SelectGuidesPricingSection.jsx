'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SelectGuidesPricingSection() {
  return (
    <section className="section_wrapper_custom" id="select-guides">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-9">
            <h2 className="section_title_main">
              Read It Or Listen To It - <span className="gold_text_span">Your Call</span>
            </h2>
            <h2 className="section_title_main">
              Select From 2 Inclusive Guides
            </h2>
            <p className="section_subtitle_desc mx-auto">
              Two formats, one goal: helping you learn faster and retain more.
            </p>
          </div>
        </div>

        {/* 2 Pricing Cards Grid */}
        <div className="row g-5 justify-content-center">
          {/* Card 1: Study Guides */}
          <div className="col-12 col-md-6">
            <motion.div
              whileHover={{ y: -6 }}
              className="pricing_card_box"
            >
              <h3 className="section_title_main fs-2 mb-3">Study Guides</h3>
              <p className="instructor_bio_paragraph text-center mb-4">
                High-yield, easy-to-understand guides covering every stage of your nursing journey — from CNA to CRNA. Simplified concepts, must-know boxes, and practice questions designed to help you retain what actually matters on exam day.
              </p>

              <div className="mt-auto mb-3">
                <span className="text-white fs-5 fw-bold me-2">Starting from</span>
                <span className="gold_text_span fs-2 fw-bold">$9.99</span>
              </div>

              <div className="price_floating_btn_box">
                <button type="button" className="btn_gold_solid w-100 py-3 fs-6">
                  SHOP STUDY GUIDES <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Card 2: Audio Study Guides */}
          <div className="col-12 col-md-6">
            <motion.div
              whileHover={{ y: -6 }}
              className="pricing_card_box"
            >
              <h3 className="section_title_main fs-2 mb-3">Audio Study Guides</h3>
              <p className="instructor_bio_paragraph text-center mb-4">
                Prefer to listen and learn? These focused audio lessons cover every major NCLEX-RN and NCLEX-PN topic — perfect for reviewing on your commute, between clinicals, or whenever reading isn't an option.
              </p>

              <div className="mt-auto mb-3">
                <span className="text-white fs-5 fw-bold me-2">Starting from</span>
                <span className="gold_text_span fs-2 fw-bold">$19.99</span>
              </div>

              <div className="price_floating_btn_box">
                <button type="button" className="btn_gold_solid w-100 py-3 fs-6">
                  SHOP AUDIO GUIDES <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
