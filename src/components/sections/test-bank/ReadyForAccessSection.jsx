'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ReadyForAccessSection() {
  return (
    <section className="section_wrapper_custom pt-0" id="ready-full-access">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta_next_step_card"
        >
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-12 col-lg-7">
              <h2 className="section_title_main display-4 fw-bold mb-3">
                Ready For <span className="gold_text_span">Full</span> Access?
              </h2>

              <p className="instructor_bio_paragraph fs-5 mb-4">
                Unlock the complete Test Bank as part of your membership and start practicing with confidence today.
              </p>

              <div>
                <button type="button" className="btn_gold_solid">
                  GET TEST BANK ACCESS <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
              </div>
            </div>

            {/* Right Books Visual */}
            <div className="col-12 col-lg-5 text-center text-lg-end mt-4 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
                alt="RNroadmap Complete Test Bank Stack"
                className="img-fluid rounded-4 shadow-lg border border-warning opacity-90"
                width="380"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
