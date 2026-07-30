'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TestBankHeroSection() {
  return (
    <section className="test_bank_hero_wrapper">
      <div className="container position-relative z-2">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero_main_headline display-3 fw-bold mb-3">
                PRACTICE <br />
                LIKE IT'S EXAM DAY
              </h1>

              <p className="hero_subtitle_text fs-5 mb-4">
                2,000+ NCLEX-style questions with full rationales — built to test what you know and sharpen what you don't.
              </p>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <button type="button" className="btn_gold_solid">
                  GET MEMBERSHIP <i className="bi bi-arrow-up-right ms-1"></i>
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
