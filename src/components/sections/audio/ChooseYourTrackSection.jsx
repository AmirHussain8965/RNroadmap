'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChooseYourTrackSection() {
  const [rnOpen, setRnOpen] = useState(true);
  const [pnOpen, setPnOpen] = useState(false);
  const [wishlist, setWishlist] = useState({});

  const rnEpisodes = [
    'Pharm: 5 Drug Classes',
    'Cardiac Essentials',
    'Endocrine Essentials',
    'Respiratory Essentials',
    'Neuro Essentials',
    'GI Essentials',
    'Fundamentals & Safety',
    'Renal Essentials',
    'Maternity Essentials',
    'Mental Health Essentials'
  ];

  const pnEpisodes = [
    'Pharm: Basic Drug Guide',
    'Cardiac & Fluid Management',
    'Endocrine & Metabolic Care',
    'Respiratory & Oxygenation',
    'Neuro & Sensory Management',
    'GI & Nutritional Support',
    'Safety & Infection Control',
    'Renal & Urinary Systems',
    'Maternal & Child Nursing',
    'Psychiatric & Mental Care'
  ];

  const toggleWishlist = (key) => {
    setWishlist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="section_wrapper_custom" id="choose-track">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main display-4 fw-bold">
              Choose Your <span className="gold_text_span">Track</span>
            </h2>
            <p className="section_subtitle_desc mx-auto mt-2">
              High-Yield Audio Study Guides for the NCLEX-RN and NCLEX-PN — 10 focused episodes each. Stream or download and review anywhere: the commute, the gym, between clinicals.
            </p>
          </div>
        </div>

        {/* NCLEX-RN Card */}
        <div className="audio_track_card">
          <div className="row align-items-start g-3">
            <div className="col-12 col-md-9">
              <span className="product_card_tag">NCLEX-RN</span>
              <h3 className="product_card_title text-start mb-2">RN High-Yield Audio Study Guide</h3>
              <p className="product_card_desc text-start mb-0">
                10 focused episodes covering every major NCLEX-RN topic — pharm, cardiac, endocrine, and more.
              </p>
            </div>
            <div className="col-12 col-md-3 text-md-end">
              <span className="product_card_price">$29.99</span>
            </div>
          </div>

          {/* Episode Collapsible Drawer Header */}
          <div className="episode_drawer_header" onClick={() => setRnOpen(!rnOpen)}>
            <span className="text-white fw-bold small">VIEW ALL 10 EPISODES</span>
            <i className={`bi bi-chevron-${rnOpen ? 'up' : 'down'} text-warning`}></i>
          </div>

          {/* Episode Grid Panel */}
          <AnimatePresence initial={false}>
            {rnOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="row g-3 mt-3">
                  {rnEpisodes.map((ep, idx) => (
                    <div key={idx} className="col-12 col-md-6 col-lg-4">
                      <div className="episode_pill_item">
                        <span className="episode_gold_num">{idx + 1}</span>
                        <span>{ep}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Actions Row */}
          <div className="d-flex align-items-center justify-content-end gap-2 mt-4">
            <button
              type="button"
              className={`icon_square_action_btn ${wishlist['rn'] ? 'bg-warning text-dark border-warning' : ''}`}
              onClick={() => toggleWishlist('rn')}
              aria-label="Add to wishlist"
            >
              <i className={`bi ${wishlist['rn'] ? 'bi-heart-fill' : 'bi-heart'}`}></i>
            </button>
            <button type="button" className="icon_square_action_btn" aria-label="Add to cart">
              <i className="bi bi-cart-plus"></i>
            </button>
            <button type="button" className="btn_gold_solid px-4 py-2">
              BUY NOW <i className="bi bi-arrow-up-right ms-1"></i>
            </button>
          </div>
        </div>

        {/* NCLEX-PN Card */}
        <div className="audio_track_card">
          <div className="row align-items-start g-3">
            <div className="col-12 col-md-9">
              <span className="product_card_tag">NCLEX-PN</span>
              <h3 className="product_card_title text-start mb-2">PN High-Yield Audio Study Guide</h3>
              <p className="product_card_desc text-start mb-0">
                10 focused episodes across the full NCLEX-PN test plan — built for LPN/LVN students and repeat testers.
              </p>
            </div>
            <div className="col-12 col-md-3 text-md-end">
              <span className="product_card_price">$19.99</span>
            </div>
          </div>

          {/* Episode Collapsible Drawer Header */}
          <div className="episode_drawer_header" onClick={() => setPnOpen(!pnOpen)}>
            <span className="text-white fw-bold small">VIEW ALL 10 EPISODES</span>
            <i className={`bi bi-chevron-${pnOpen ? 'up' : 'down'} text-warning`}></i>
          </div>

          {/* Episode Grid Panel */}
          <AnimatePresence initial={false}>
            {pnOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="row g-3 mt-3">
                  {pnEpisodes.map((ep, idx) => (
                    <div key={idx} className="col-12 col-md-6 col-lg-4">
                      <div className="episode_pill_item">
                        <span className="episode_gold_num">{idx + 1}</span>
                        <span>{ep}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Actions Row */}
          <div className="d-flex align-items-center justify-content-end gap-2 mt-4">
            <button
              type="button"
              className={`icon_square_action_btn ${wishlist['pn'] ? 'bg-warning text-dark border-warning' : ''}`}
              onClick={() => toggleWishlist('pn')}
              aria-label="Add to wishlist"
            >
              <i className={`bi ${wishlist['pn'] ? 'bi-heart-fill' : 'bi-heart'}`}></i>
            </button>
            <button type="button" className="icon_square_action_btn" aria-label="Add to cart">
              <i className="bi bi-cart-plus"></i>
            </button>
            <button type="button" className="btn_gold_solid px-4 py-2">
              BUY NOW <i className="bi bi-arrow-up-right ms-1"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
