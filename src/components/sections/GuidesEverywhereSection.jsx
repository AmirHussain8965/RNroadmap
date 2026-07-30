'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GuidesEverywhereSection() {
  return (
    <section className="section_wrapper_custom" id="everywhere">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Text Content */}
          <div className="col-12 col-lg-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section_title_main display-4 text-start fw-bold mb-3">
                Your Guides <br />
                <span className="gold_text_span">Everywhere</span>
              </h2>

              <p className="instructor_bio_paragraph text-white mb-3">
                Study on whatever device works best for you; phone, tablet, laptop, or desktop.
              </p>

              <p className="instructor_bio_paragraph mb-4">
                Whether you're squeezing in a few minutes between classes, reviewing on your phone during a break, or settling in with your laptop at home, your guides, flashcards, and audio lessons are ready the moment you are. No restrictions, no hassle — just open it up on any screen and keep moving forward.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <button type="button" className="btn_gold_solid">
                  SHOP GUIDES <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
                <button type="button" className="btn_gold_outline">
                  BROWSE THE BUNDLES <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Devices Mockup Showcase */}
          <div className="col-12 col-lg-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="devices_mockup_container"
            >
              <img
                src="/assets/guides_main.jpg"
                alt="RNroadmap Multi-Device Guides Preview"
                className="img-fluid " />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
