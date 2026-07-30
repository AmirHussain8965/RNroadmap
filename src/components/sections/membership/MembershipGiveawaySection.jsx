'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MembershipGiveawaySection() {
  return (
    <section className="section_wrapper_custom" id="membership-giveaway">
      <div className="container">
        {/* Top Giveaway Banner */}
        <div className="giveaway_banner_gold mb-4">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7 text-center text-lg-start position-relative z-2">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 mb-2">
                <span className="giveaway_announcement_icon fs-2">📢</span>
                <h3 className="giveaway_banner_title text-white fw-bold mb-0">Weekly Giveaway!</h3>
              </div>
              <h2 className="giveaway_prize_highlight text-white fw-bold mb-4">
                This Week's Prize: Apple Watch
              </h2>
              <button type="button" className="btn_dark_action py-2.5 px-4 rounded-pill">
                JOIN &amp; GET ENTERED <i className="bi bi-arrow-up-right ms-1"></i>
              </button>
            </div>

            <div className="col-12 col-lg-5 text-center position-relative">
              <div className="giveaway_prize_glow"></div>
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80"
                alt="Apple Watch Giveaway Prize"
                className="img-fluid rounded-3 shadow-lg position-relative z-2"
                width="220"
              />
            </div>
          </div>
        </div>

        {/* Bottom 2 side-by-side cards */}
        <div className="row g-4 mt-2">
          {/* Last Week's Winner Card */}
          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="giveaway_winner_card text-center"
            >
              {/* Confetti decoration */}
              <div className="position-absolute top-0 start-0 p-3 opacity-25 fs-4">🎉</div>
              <div className="position-absolute top-0 end-0 p-3 opacity-25 fs-4">✨</div>

              <h4 className="gold_text_span fs-4 fw-bold mb-4">Last Week's Winner</h4>

              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150"
                  alt="Sherman Last Week Winner"
                  className="rounded-circle border border-warning shadow mb-3"
                  width="96"
                  height="96"
                />
                <h5 className="fs-5 fw-bold text-white mb-1">Sherman</h5>
                <p className="text-warning small mb-0 fw-medium">Med-Surg RN</p>
              </div>
            </motion.div>
          </div>

          {/* Process Is Simple Card */}
          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="giveaway_winner_card d-flex flex-column align-items-center justify-content-center text-center"
            >
              <span className="fs-1 mb-3">📝</span>
              <h4 className="gold_text_span fs-4 fw-bold mb-3">Process Is Simple</h4>
              <p className="instructor_bio_paragraph fs-5 text-white-80 leading-relaxed mb-0">
                Join Our Membership And You'll Automatically Become A Part Of Our Giveaway
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
