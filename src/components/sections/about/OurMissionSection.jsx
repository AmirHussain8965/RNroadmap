'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function OurMissionSection() {
  const missions = [
    {
      icon: 'bi-heart-pulse-fill',
      title: 'Simplify The Complex',
      desc: 'We break down dense nursing concepts into clear, high-yield content so you spend less time decoding and more time learning.'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'Support Every Stage',
      desc: 'From nursing school to ICU to CRNA, our resources grow with you — meeting you exactly where you are in your career.'
    },
    {
      icon: 'bi-person-fill-up',
      title: 'Build Real Confidence',
      desc: 'Grounded in real bedside experience, our guides prepare you not just to pass exams, but to succeed on the floor.'
    }
  ];

  return (
    <section className="section_wrapper_custom pt-0" id="mission">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h3 className="gold_text_span fs-3 fw-bold mb-2">Our Mission</h3>
            <h2 className="section_title_main mb-3">
              Guiding Every Nurse, At Every Stage
            </h2>
            <p className="section_subtitle_desc mx-auto">
              From your first nursing school exam to your CRNA acceptance letter, our mission is to simplify the path — one high-yield, easy-to-understand resource at a time.
            </p>
          </div>
        </div>

        {/* Two Columns Grid: Left (List of Missions) & Right (Photo Stack) */}
        <div className="row align-items-center g-5 mt-2">
          {/* Left Column: Missions List */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column gap-4">
              {missions.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="d-flex align-items-start gap-3"
                >
                  {/* Glowing Icon Circle */}
                  <div className="mission_item_icon_wrapper flex-shrink-0">
                    <div className="mission_item_icon_circle">
                      <i className={`bi ${m.icon}`}></i>
                    </div>
                  </div>
                  {/* Item Description */}
                  <div className="text-start">
                    <h4 className="mission_item_heading">{m.title}</h4>
                    <p className="mission_item_text">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo Stack */}
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <div className="mission_photo_stack_container">
              {/* Couple Image (Upper Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mission_photo_couple_wrapper"
              >
                <img
                  src="/assets/missions1.png"
                  alt="RNroadmap Nurse Couple"
                  className="img-fluid mission_stack_img"
                />
              </motion.div>

              {/* Single Nurse Image (Lower Left Overlapping) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mission_photo_single_wrapper"
              >
                <img
                  src="/assets/missions2.png"
                  alt="RNroadmap ICU Nurse"
                  className="img-fluid mission_stack_img"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
