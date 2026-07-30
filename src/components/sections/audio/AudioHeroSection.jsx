'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AudioHeroSection() {
  return (
    <section className="audio_hero_wrapper">
      <div className="container position-relative z-2">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero_main_headline display-3 fw-bold mb-3">
                STUDY WITH YOUR EARS WITH OUR <span className="gold_text_span">AUDIO</span> STUDY GUIDES
              </h1>

              <p className="hero_subtitle_text fs-5 mb-4">
                High-Yield Audio Study Guides for the NCLEX-RN and NCLEX-PN — 10 focused episodes each. Stream or download and review anywhere: the commute, the gym, between clinicals.
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
        </div>
      </div>
    </section>
  );
}
