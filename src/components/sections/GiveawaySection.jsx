'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function GiveawaySection() {
  return (
    <section className="section_wrapper_custom" id="giveaway">
      <div className="container">
        <div className="giveaway_outer_container">
          {/* Top Gold Giveaway Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="giveaway_banner_gold mb-4"
          >
            <div className="row align-items-center">
              <div className="col-12 col-md-7">
                <div className="mb-2">
                  <span className="fs-1 text-dark">
                    <img src="/assets/fxemoji_megaphone.png" className="fxemoji_megaphone" alt="" /></span>
                  <div className="giveaway_banner_gold_text">
                    <h2> Weekly Giveaway! </h2>
                    <h3> This Week's Prize: Apple Watch </h3>
                  </div>
                </div>
                <button type="button" className="giveaway_btn_black">
                  JOIN &amp; GET ENTERED <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
              </div>

              <div className="col-12 col-md-5 text-center text-md-end mt-4 mt-md-0">
                <img
                  src="/assets/watch_img.png"
                  alt="Apple Watch Giveaway Prize"
                  className="img-fluid" />
              </div>
            </div>
          </motion.div>

          {/* Bottom Grid: Winner & Process Cards */}
          <div className="row g-4">
            {/* Left Sub-Card: Last Week's Winner */}
            <div className="col-12 col-md-5">
              <div className="giveaway_winner_card">
                <h4>
                  Last Week's Winner
                </h4>
                <div className="mt-3">
                  <img
                    src="/assets/Client1.png"
                    alt="Sherman Winner"
                    className="avatar_circle_img"
                    width="56"
                    height="56"
                  />
                  <div className="gold_text_span">
                    <h5>Sherman <span> -Med-Surg RN</span></h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sub-Card: Process Is Simple */}
            <div className="col-12 col-md-7">
              <div className="giveaway_process_card">
                <h4 className="gold_text_span">
                  📋 Process Is Simple
                </h4>
                <p className="text-white fs-5 fw-medium mb-0">
                  Join Our Membership And You'll Automatically Become A Part Of Our Giveaway
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
