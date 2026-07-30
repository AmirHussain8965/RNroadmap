'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ExploreSection() {
  return (
    <section className="section_wrapper_custom" id="explore">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main">
              Explore <span className="gold_text_span">RNRoadmap</span>
            </h2>
            <p className="section_subtitle_desc mx-auto">
              Everything you need to prepare, practice, and pass — organized in one place so you always know where to go next.
            </p>
          </div>
        </div>

        {/* Top Row: 2 Cards */}
        <div className="row mb-4">
          <div className="col-lg-8 col-md-10 col-sm-12 mx-auto">
            <div className="row g-4 ">
              <div className="col-12 col-md-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="explore_card_gold"
                >
                  <div className="explore_icon_box">
                    <img src="/assets/ern1.png" alt="" />
                  </div>
                  <h3 className="explore_card_title">Study Guides</h3>
                  <p className="explore_card_desc">
                    Simplified, high-yield guides that break down complex nursing concepts into what actually matters for your exam.
                  </p>
                  <a href="#explore" className="explore_action_link">
                    LEARN MORE <i className="bi bi-arrow-up-right"></i>
                  </a>
                </motion.div>
              </div>

              <div className="col-12 col-md-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="explore_card_dark"
                >
                  <div className="explore_icon_box">
                    <img src="/assets/ern2.png" alt="" />
                  </div>
                  <h3 className="explore_card_title">Audio Study Guides</h3>
                  <p className="explore_card_desc">
                    Listen and learn on the go — perfect for reviewing between shifts, clinicals, or your commute.
                  </p>
                  <a href="#explore" className="explore_action_link">
                    LEARN MORE <i className="bi bi-arrow-up-right"></i>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Cards */}
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <motion.div
              whileHover={{ y: -6 }}
              className="explore_card_dark"
            >
              <div className="explore_icon_box">
                <img src="/assets/ern3.png" alt="" />
              </div>
              <h3 className="explore_card_title">NCLEX Test Bank</h3>
              <p className="explore_card_desc">
                Thousands of practice questions with detailed rationales to build real exam-day confidence.
              </p>
              <a href="#explore" className="explore_action_link">
                LEARN MORE <i className="bi bi-arrow-up-right"></i>
              </a>
            </motion.div>
          </div>

          <div className="col-12 col-md-4">
            <motion.div
              whileHover={{ y: -6 }}
              className="explore_card_dark"
            >
              <div className="explore_icon_box">
                <img src="/assets/ern4.png" alt="" />
              </div>
              <h3 className="explore_card_title">Membership</h3>
              <p className="explore_card_desc">
                Unlock full access to guides, test banks, and audio lessons with a plan built around your stage of learning.
              </p>
              <a href="#explore" className="explore_action_link">
                LEARN MORE <i className="bi bi-arrow-up-right"></i>
              </a>
            </motion.div>
          </div>

          <div className="col-12 col-md-4">
            <motion.div
              whileHover={{ y: -6 }}
              className="explore_card_dark"
            >
              <div className="explore_icon_box">
                <img src="/assets/ern5.png" alt="" />
              </div>
              <h3 className="explore_card_title">Shop</h3>
              <p className="explore_card_desc">
                Branded RNRoadmap merch and study essentials to keep you motivated on the journey.
              </p>
              <a href="#explore" className="explore_action_link">
                LEARN MORE <i className="bi bi-arrow-up-right"></i>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
