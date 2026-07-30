'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BrowseByStageSection() {
  const [selectedStage, setSelectedStage] = useState('RN SCHOOL');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState({});

  const stages = ['CNA', 'LPN', 'RN SCHOOL', 'NCLEX', 'ICU', 'CCRN', 'CRNA', 'FNP'];

  const products = [
    {
      id: 1,
      title: 'ATI Complete',
      ribbon: 'New In',
      tag: 'Made Simple • Easy • Fast',
      desc: '73 pages — everything for ATI in one: a full study guide (TEAS, content mastery & strategies), entrance & exit practice exams, and 100 flashcards, with worked answers for every problem.',
      price: '$24.99',
      sold: '320+ Sold'
    },
    {
      id: 2,
      title: 'Nursing Care Plan Guide',
      tag: 'Made Simple • Easy • Fast',
      desc: 'A 32-page guide that makes care plans simple — the ADPIE method, PES diagnosis & SMART goals, 2 full walkthroughs, 8 worked examples, 7 practice scenarios with answer keys & a reusable template.',
      price: '$12.99',
      sold: '320+ Sold'
    },
    {
      id: 3,
      title: 'Nursing School Study Guide',
      tag: 'Vol. 02',
      desc: 'Study methods, NCLEX questions, dosage math & lab values that actually stick.',
      price: '$9.99',
      sold: '320+ Sold'
    },
    {
      id: 4,
      title: 'Dosage Calculation',
      tag: 'Made Simple • Easy • Fast',
      desc: 'Master nursing med math — fast. 3 methods explained, key conversions, IV & drip rates, weight-based dosing, 100+ practice problems with fully worked answer keys, plus a 40-question final test.',
      price: '$9.99',
      sold: '320+ Sold'
    },
    {
      id: 5,
      title: 'Pharmacology Study Guide',
      tag: 'Students / NCLEX',
      desc: 'A 27-page guide that makes high-yield drug classes simple — mechanisms, side effects, nursing care, comparison tables & a Key Point on every page. Built for nursing school & NCLEX.',
      price: '$14.99',
      sold: '320+ Sold'
    },
    {
      id: 6,
      title: 'Nursing Student Flashcards',
      ribbon: 'Best Seller',
      tag: 'Vol. 01',
      desc: '115 NCLEX-style cards covering every core nursing school subject.',
      price: '$12.99',
      sold: '320+ Sold'
    }
  ];

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section_wrapper_custom" id="browse-by-stage">
      <div className="container">
        {/* Section Header */}
        <div className="d-flex flex-wrap align-items-center justify-content-between mb-4">
          <div>
            <h2 className="section_title_main mb-1">
              Browse By <span className="gold_text_span">Stage</span>
            </h2>
            <p className="section_subtitle_desc">
              Wherever you are in your nursing journey, find the guides built specifically for that stage.
            </p>
          </div>

          <button type="button" className="btn_gold_solid">
            BY STAGE <i className="bi bi-funnel-fill ms-1"></i>
          </button>
        </div>

        {/* Interactive Search Input Box */}
        <div className="search_input_wrapper mb-4">
          <input
            type="text"
            placeholder="Search study guides, flashcards, NCLEX..."
            className="search_input_field"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-warning"></i>
        </div>

        {/* Stage Filter Pills */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {stages.map((stage) => (
            <button
              key={stage}
              type="button"
              className={`stage_pill_btn ${selectedStage === stage ? 'active' : ''}`}
              onClick={() => setSelectedStage(stage)}
            >
              {stage}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="row g-4">
          {filteredProducts.map((p, idx) => (
            <div key={p.id} className="col-12 col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="product_card_box"
              >
                {/* Ribbon Badge */}
                {p.ribbon && (
                  <div className="product_ribbon_badge">
                    {p.ribbon}
                  </div>
                )}

                {/* Tag / Subtitle */}
                {p.tag && (
                  <span className="product_card_tag">{p.tag}</span>
                )}

                {/* Title */}
                <h3 className="product_card_title">{p.title}</h3>

                {/* Description */}
                <p className="product_card_desc">
                  {p.desc}
                </p>

                {/* Price & Sold */}
                <div className="mb-4">
                  <span className="product_card_price">{p.price}</span>
                  <span className="product_card_sold">{p.sold}</span>
                </div>

                {/* Actions Row */}
                <div className="d-flex align-items-center gap-2 w-100 justify-content-center">
                  <button
                    type="button"
                    className={`icon_square_action_btn ${wishlist[p.id] ? 'bg-warning text-dark border-warning' : ''}`}
                    onClick={() => toggleWishlist(p.id)}
                    aria-label="Add to wishlist"
                  >
                    <i className={`bi ${wishlist[p.id] ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                  </button>

                  <button
                    type="button"
                    className="icon_square_action_btn"
                    aria-label="Add to cart"
                  >
                    <i className="bi bi-cart-plus"></i>
                  </button>

                  <button type="button" className="btn_gold_solid flex-grow-1 py-2">
                    BUY NOW <i className="bi bi-arrow-up-right ms-1"></i>
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Load More Button */}
        <div className="text-center mt-5">
          <button type="button" className="btn_gold_solid fs-6 py-3 px-4">
            LOAD MORE <i className="bi bi-plus-circle ms-1"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
