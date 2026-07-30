'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ShopFormatSelector() {
  return (
    <section className="section_wrapper_custom pt-0" id="format-selector">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main mb-2">
              Read It Or Listen To It - <span className="gold_text_span">Your Call</span> <br />
              Select From 2 Inclusive Guides
            </h2>
            <p className="section_subtitle_desc mx-auto">
              Two formats, one goal: helping you learn faster and retain more.
            </p>
          </div>
        </div>

        {/* 2 Cards side-by-side */}
        <div className="row g-5 mt-2">
          {/* Card 1: Study Guides */}
          <div className="col-12 col-md-6 pb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inclusive_format_card"
            >
              <h3 className="fs-3 fw-bold text-white mb-3">Study Guides</h3>
              <p className="product_card_desc flex-grow-1 leading-relaxed">
                High-yield, easy-to-understand guides covering every stage of your nursing journey — from CNA to CRNA. Simplified concepts, must-know boxes, and practice questions designed to help you retain what actually matters on exam day.
              </p>
              <div className="mb-5">
                <span className="text-white-50 fw-medium">Starting from </span>
                <span className="gold_text_span fs-4 fw-bold">$9.99</span>
              </div>

              {/* Overlapping Button */}
              <Link href="/study-guides" className="btn_gold_solid overlap_shop_btn text-decoration-none">
                SHOP STUDY GUIDES <i className="bi bi-arrow-up-right ms-1"></i>
              </Link>
            </motion.div>
          </div>

          {/* Card 2: Audio Study Guides */}
          <div className="col-12 col-md-6 pb-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inclusive_format_card"
            >
              <h3 className="fs-3 fw-bold text-white mb-3">Audio Study Guides</h3>
              <p className="product_card_desc flex-grow-1 leading-relaxed">
                Prefer to listen and learn? These focused audio lessons cover every major NCLEX-RN and NCLEX-PN topic — perfect for reviewing on your commute, between clinicals, or whenever reading isn't an option.
              </p>
              <div className="mb-5">
                <span className="text-white-50 fw-medium">Starting from </span>
                <span className="gold_text_span fs-4 fw-bold">$19.99</span>
              </div>

              {/* Overlapping Button */}
              <Link href="/audio-guides" className="btn_gold_solid overlap_shop_btn text-decoration-none">
                SHOP AUDIO GUIDES <i className="bi bi-arrow-up-right ms-1"></i>
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
