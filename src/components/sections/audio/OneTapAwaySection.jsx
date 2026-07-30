'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function OneTapAwaySection() {
  return (
    <section className="section_wrapper_custom" id="one-tap-away">
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
                Your Next Study Session <br />
                Is <span className="gold_text_span">One Tap</span> Away
              </h2>

              <p className="instructor_bio_paragraph fs-5 mb-4">
                Turn downtime into study time — start listening and move closer to passing with confidence.
              </p>

              <div>
                <button type="button" className="btn_gold_solid">
                  EXPLORE BUNDLES <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
              </div>
            </div>

            {/* Right Headphones with soundwave */}
            <div className="col-12 col-lg-5 text-center text-lg-end mt-4 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=600&q=80"
                alt="Audio Study Guides Headphones Soundwave"
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
