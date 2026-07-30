'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="hero_section_wrapper">
      {/* ICU Nurse Background Overlay with Gradient Fade */}
      <div className="hero_bg_image_overlay"></div>

      <div className="container position-relative z-1">
        <div className="row align-items-center min-vh-75">
          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="hero_main_headline">
                PASS <span className="gold_text_span">EVERY STAGE,</span> WITH CONFIDENCE
              </h1>

              <p className="hero_subtitle_text">
                Study guides &amp; flashcards built by an ICU nurse — one roadmap for your whole career, CNA to CRNA.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <button type="button" className="btn_gold_solid">
                  SHOP GUIDES <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
                <button type="button" className="btn_gold_outline">
                  BROWSE THE BUNDLES <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
              </div>

              {/* Trusted Social Proof Bar */}
              <div className="trusted_avatars_row">
                <div className="avatars_group">
                  <img
                    src="/assets/trusted_profile.png"
                    alt="Nursing Student"
                    className="avatar_circle_img"
                  />
                </div>
                <div className="trusted_text_box">
                  <span className="trusted_highlight">Trusted By 25000+</span>
                  <span className="trusted_label">Nursing Students</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
