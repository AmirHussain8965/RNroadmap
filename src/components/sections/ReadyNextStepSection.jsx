'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ReadyNextStepSection() {
  return (
    <section className="section_wrapper_custom pt-0" id="next-step">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta_next_step_card"
        >
          {/* Top Title Overlay */}
          <div className="cta_banner_title_overlay">
            <h2>READY TO TAKE THE <br /> NEXT STEP?</h2>
          </div>

          {/* Bottom Bar Box */}
          <div className="cta_banner_bottom_bar">
            <p className="cta_banner_bottom_text">
              Join thousands of nursing students and RNs who've trusted RNRoadmap to guide them from classroom to career.
            </p>
            <div className="cta_banner_bottom_actions">
              <a href="/study-guides" className="btn_gold_solid cta_pill_btn">
                BROWSE GUIDES <i className="bi bi-arrow-up-right-circle-fill ms-1"></i>
              </a>
              <a href="/shop" className="btn_gold_outline cta_pill_btn">
                EXPLORE BUNDLES <i className="bi bi-arrow-up-right-circle-fill ms-1"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
