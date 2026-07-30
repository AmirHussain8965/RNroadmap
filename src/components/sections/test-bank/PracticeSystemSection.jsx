'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function PracticeSystemSection() {
  const topRow = [
    {
      icon: 'bi-file-earmark-text',
      text: '2,000+ Practice Questions Covering Every Core NCLEX Topic'
    },
    {
      icon: 'bi-check2-circle',
      text: 'Full Rationales Explaining Every Right And Wrong Answer'
    }
  ];

  const bottomRow = [
    {
      icon: 'bi-cursor-text',
      text: 'Select-All-That-Apply Questions, Just Like The Real Exam'
    },
    {
      icon: 'bi-arrow-counterclockwise',
      text: 'Unlimited Retakes To Track Your Progress Over Time'
    },
    {
      icon: 'bi-shuffle',
      text: 'Separate Tracks For NCLEX-RN And NCLEX-PN'
    }
  ];

  return (
    <section className="section_wrapper_custom" id="practice-system">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main mb-2">
              More Than A Quiz <br />
              A <span className="gold_text_span">Full Practice</span> System
            </h2>
            <p className="section_subtitle_desc">
              Everything you need to walk into exam day with confidence.
            </p>
          </div>
        </div>

        {/* Top 2 Items Row */}
        <div className="row g-4 justify-content-center mb-4">
          {topRow.map((item, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="practice_system_card"
              >
                <div className="practice_card_icon_glow">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h4 className="fs-5 fw-bold text-white mb-0 leading-relaxed">
                  {item.text}
                </h4>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom 3 Items Row */}
        <div className="row g-4 justify-content-center">
          {bottomRow.map((item, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="practice_system_card"
              >
                <div className="practice_card_icon_glow">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <h4 className="fs-5 fw-bold text-white mb-0 leading-relaxed">
                  {item.text}
                </h4>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
