'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ReadyNextStepAboutSection() {
  return (
    <section className="section_wrapper_custom pt-0" id="next-step-about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta_about_card"
        >
          <div className="row align-items-center g-5">
            {/* Left Column: Text & CTAs */}
            <div className="col-12 col-lg-6">
              <div className="text-start text-lg-start">
                <h2 className="cta_about_heading">
                  READY TO TAKE THE <br />
                  <span className="gold_text_span">NEXT</span> STEP?
                </h2>

                <p className="cta_about_desc mb-4">
                  Join thousands of nursing students and RNs who've trusted RNRoadmap to guide them from classroom to career.
                </p>

                <div className="d-flex flex-wrap align-items-center gap-3">
                  <a href="/study-guides" className="btn_gold_solid cta_pill_btn">
                    BROWSE GUIDES <i className="bi bi-arrow-up-right-circle-fill ms-1"></i>
                  </a>
                  <a href="/shop" className="btn_gold_outline cta_pill_btn">
                    EXPLORE BUNDLES <i className="bi bi-arrow-up-right-circle-fill ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Overlapping Photos Stack */}
            <div className="col-12 col-lg-6">
              <div className="cta_about_photo_stack">
                {/* Upper Right Image (Single Nurse) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="cta_about_img_upper_wrapper"
                >
                  <img
                    src="/assets/ab_last1.png"
                    alt="Ready next step single nurse"
                    className="img-fluid cta_about_stack_img"
                  />
                </motion.div>

                {/* Lower Left Overlapping Image (Couple) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="cta_about_img_lower_wrapper"
                >
                  <img
                    src="/assets/ab_last2.png"
                    alt="Ready next step nurse couple"
                    className="img-fluid cta_about_stack_img"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
