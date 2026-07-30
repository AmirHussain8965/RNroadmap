'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function RoadmapStorySection() {
  return (
    <section className="roadmap_story_section">
      <div className="container">
        {/* Section Heading */}
        <div className="row text-center mb-5 justify-content-center">
          <div className="col-12 col-lg-9">
            <h2 className="section_title_main">
              Your <span className="gold_text_span">Roadmap</span>
            </h2>
            <h2 className="section_title_main fw-bold">
              Written By Someone Who's Lived It
            </h2>
          </div>
        </div>

        {/* 3-Column Story Layout */}
        <div className="row align-items-center g-4">
          {/* Left Text Column */}
          <div className="col-12 col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="instructor_bio_paragraph text-lg-start text-center">
                RNRoadmap was created by Walner Alcius, a BSN- and CCRN-certified ICU nurse who spent years watching students and new grads drown in scattered, bloated study material. Instead of another generic review course, he built the resource he wished he'd had — one roadmap covering every stage of a nursing career, from CNA all the way to CRNA.
              </p>
            </motion.div>
          </div>

          {/* Center Glowing Logo Symbol */}
          <div className="col-12 col-lg-4 text-center my-4 my-lg-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="brand_center_glow_box"
            >
              <img src="/assets/Roadmap_Logo.png" alt="" />
            </motion.div>
          </div>

          {/* Right Text Column */}
          <div className="col-12 col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="instructor_bio_paragraph text-lg-start text-center">
                Every guide, flashcard deck, and audio lesson is grounded in real bedside experience, distilled down to exactly what you need to know, minus the fluff. Whether you're prepping for the NCLEX, surviving your first year in the ICU, or chasing a CRNA acceptance letter, RNRoadmap meets you exactly where you are — and gets you to where you're going next.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
