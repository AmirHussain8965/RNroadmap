'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHeroSection() {
  return (
    <section className="about_hero_wrapper">
      <div className="container position-relative z-2">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero_main_headline display-3 fw-bold mb-3">
                Built by a Nurse Who's <br /> Been
                <span className="gold_text_span"> Where You Are</span>
              </h1>

              <p className="hero_subtitle_text fs-5 mb-4">
                RNroadmap started with one ICU nurse who believed no student should have to study alone, disorganized, or overwhelmed.
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
