'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function RealExperienceSection() {
  const bullets = [
    'Created by a practicing ICU nurse, not a test-prep company',
    'Content shaped by real clinical scenarios, not just textbook theory',
    'Designed to build both exam confidence and floor-ready skills',
    'Continuously updated to reflect current NCLEX standards and practices'
  ];

  return (
    <section className="section_wrapper_custom" id="real-experience">
      <div className="container">
        {/* Top Header Row */}
        <div className="row align-items-center mb-5">
          <div className="col-12 col-lg-6">
            <h2 className="section_title_main text-start fw-bold mb-0">
              <span className="gold_text_span">Real</span> Experience. <br />
              <span className="gold_text_span">Real</span> Results.
            </h2>
          </div>

          <div className="col-12 col-lg-6 mt-3 mt-lg-0 text-lg-end">
            <p className="section_subtitle_desc ms-auto mb-3">
              Every guide, question, and lesson is built from real bedside knowledge — not recycled textbook theory — so you learn exactly what you need for the exam and the unit floor.
            </p>

            {/* Social Avatars */}
            <div className="d-inline-flex align-items-center gap-3 bg-dark border border-warning rounded-pill px-3 py-2">
              <div className="d-flex">
                <img src="/assets/trusted_profile.png" alt="Avatar" className="avatar_circle_img" />
              </div>
              <span className="small text-white fw-bold">
                Trusted By <span className="gold_text_span">25,000+</span> Nursing Students
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Content & Photo Grid */}
        <div className="row align-items-center g-5">
          {/* Left Text & Checkmark Bullets */}
          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="instructor_bio_paragraph mb-4">
                RNroadmap wasn't built in a classroom — it was built at the bedside, shift after shift, by someone who've lived the exact pressure you're facing now. That real-world foundation means every resource is designed to close the gap between passing an exam and actually knowing what to do when it counts.
              </p>

              {/* 4 Gold Bullet Points */}
              <div className="mb-4">
                {bullets.map((b, idx) => (
                  <div key={idx} className="real_exp_bullet_item">
                    <span className="bullet_gold_circle_icon">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <button type="button" className="btn_gold_solid">
                BROWSE GUIDES <i className="bi bi-arrow-up-right ms-1"></i>
              </button>
            </motion.div>
          </div>

          {/* Right ICU Bedside Photo */}
          <div className="col-12 col-lg-6 text-center text-lg-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/rerr.png"
                alt="RNroadmap Bedside Nurse ICU Monitor"
                className="img-fluid"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
