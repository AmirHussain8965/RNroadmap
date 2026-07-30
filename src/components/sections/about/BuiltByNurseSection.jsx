'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BuiltByNurseSection() {
  return (
    <section className="built_by_nurse_section" id="built-by-nurse">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main display-4 fw-bold">
              Built By A <span className="gold_text_span">Nurse</span>, For <span className="gold_text_span">Nurses</span>
            </h2>
          </div>
        </div>

        {/* 3 Columns Row */}
        <div className="row align-items-center g-4">
          {/* Left Text Column */}
          <div className="col-12 col-lg-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="instructor_bio_paragraph fs-6 leading-relaxed mb-0"
            >
              RNroadmap was created by <strong className="gold_text_span">Walner Alcius</strong>, a BSN- and CCRN-certified ICU nurse who spent years watching students and new grads drown in scattered, bloated study material. Instead of another generic review course, he built the resource he wished he'd had — one roadmap covering every stage of a nursing career, from CNA all the way to CRNA.
            </motion.p>
          </div>

          {/* Center 3D Metallic Logo Column */}
          <div className="col-12 col-lg-4 text-center my-4 my-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="d-flex justify-content-center align-items-center"
            >
              <img src="/assets/Roadmap_Logo.png" alt="RNroadmap Logo" height="110" className="d-block" />
            </motion.div>
          </div>

          {/* Right Text Column */}
          <div className="col-12 col-lg-4">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="instructor_bio_paragraph fs-6 leading-relaxed mb-0"
            >
              Every guide, flashcard deck, and audio lesson is grounded in real bedside experience, distilled down to exactly what you need to know, minus the fluff. Whether you're prepping for the NCLEX, surviving your first year in the ICU, or chasing a CRNA acceptance letter, RNroadmap meets you exactly where you are — and gets you to where you're going next.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
