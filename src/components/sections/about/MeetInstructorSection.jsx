'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MeetInstructorSection() {
  return (
    <section className="instructor_section_wrapper" id="instructor">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main">
              Meet <span className="gold_text_span">Walner Alcius</span> - Your Instructor
            </h2>
          </div>
        </div>

        <div className="row align-items-center g-5">
          {/* Left Avatar Ring */}
          <div className="col-12 col-lg-5 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="instructor_avatar_ring"
            >
              <img
                src="/assets/instructor_avatar_img.png"
                alt="Walner Alcius RN, BSN, CCRN"
                className="instructor_avatar_img"
              />
            </motion.div>
          </div>

          {/* Right Instructor Bio */}
          <div className="col-12 col-lg-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="instructor_bio_paragraph">
                I'm Walner Alcius — an ICU nurse, and the person behind every guide on this site. I remember exactly how overwhelming nursing school felt when I started. Eleven years later — seven of them in the ICU (RN, BSN, CCRN) — I still remember that road.
              </p>

              <p className="instructor_bio_paragraph">
                That's why I created RNRoadmap: clear, no-fluff resources written the way a good preceptor explains things on the floor — for every stage, from CNA to CRNA and beyond.
              </p>

              <p className="instructor_bio_paragraph">
                I've walked the hardest parts myself. Chasing CRNA, I took the courses, earned my bachelor's, got into the ICU — I did everything right on paper. But when the interviews came, I struggled. I didn't know what to expect, and I came up short. So I went straight to the source: I gathered everything I could from practicing CRNAs, dug into the research, and built the study guide I never had — so the next nurse walks in ready, not guessing.
              </p>

              <hr className="border-warning opacity-50 my-4" />

              {/* Social Buttons */}
              <div className="d-flex align-items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social_gold_btn" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social_gold_btn" aria-label="TikTok">
                  <i className="bi bi-tiktok"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social_gold_btn" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
