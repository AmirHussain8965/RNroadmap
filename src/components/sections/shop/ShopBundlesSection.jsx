'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ShopBundlesSection() {
  const [wishlist, setWishlist] = useState({});

  const bundles = [
    {
      id: 'b1',
      title: 'LVN / LPN Starter Bundle',
      desc: 'Start strong on the LPN/LVN path: Getting In + LPN/LVN Study Guide + Dosage Calc + Pharmacology.',
      price: '$29',
      oldPrice: '$44.96'
    },
    {
      id: 'b2',
      title: 'Student Bundle',
      ribbon: 'New In',
      desc: 'Everything for nursing school: Getting In + Study Guide + 115 Flashcards.',
      price: '$24.99',
      oldPrice: '$32.97'
    },
    {
      id: 'b3',
      title: 'Complete Bundle',
      ribbon: 'Most Popular',
      desc: 'All 9 guides & flashcard decks. Everything you need, every stage.',
      price: '$49.99',
      oldPrice: '$111.90'
    },
    {
      id: 'b4',
      title: 'CRNA Path Bundle',
      ribbon: 'Best Seller',
      desc: 'Everything for the CRNA journey: Getting Into CRNA School + GRE Prep + CRNA Interview Flashcards.',
      price: '$29',
      oldPrice: '$42'
    },
    {
      id: 'b5',
      title: 'ICU Starter Pack',
      desc: 'Start strong in critical care: ICU Success From Day One + ICU Flashcards + CCRN Exam Flashcards.',
      price: '$27',
      oldPrice: '$38'
    },
    {
      id: 'b6',
      title: 'FNP Complete Bundle',
      desc: 'Everything for FNP school & boards: 30-page Clinical Study Guide + 90 Board Review Flashcards.',
      price: '$29',
      oldPrice: '$36.98'
    }
  ];

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section_wrapper_custom pt-0" id="shop-bundles">
      <div className="container">

        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main">
              Save More With A <span className="gold_text_span">Bundle</span>
            </h2>
            <p className="section_subtitle_desc mx-auto mt-2">
              Save more with a complete bundle — everything you need for your stage, packaged together at one price.
            </p>
          </div>
        </div>

        {/* 6 Bundles Grid */}
        <div className="row g-4">
          {bundles.map((b, idx) => (
            <div key={b.id} className="col-12 col-md-6 col-lg-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bundle_card_box"
              >
                {/* Ribbon Badge */}
                {b.ribbon && (
                  <div className="product_ribbon_badge">
                    {b.ribbon}
                  </div>
                )}

                {/* Title */}
                <h3 className="product_card_title text-start mb-3">{b.title}</h3>

                {/* Description */}
                <p className="product_card_desc text-start flex-grow-1 mb-4">
                  {b.desc}
                </p>

                {/* Price Row */}
                <div className="d-flex align-items-baseline gap-2 mb-4 justify-content-start w-100">
                  <span className="product_card_price mb-0">{b.price}</span>
                  {b.oldPrice && (
                    <span className="text-decoration-line-through text-muted small">{b.oldPrice}</span>
                  )}
                </div>

                {/* Action Buttons Row */}
                <div className="d-flex align-items-center gap-2 w-100 justify-content-center">
                  <button
                    type="button"
                    className={`icon_square_action_btn ${wishlist[b.id] ? 'bg-warning text-dark border-warning' : ''}`}
                    onClick={() => toggleWishlist(b.id)}
                    aria-label="Add to wishlist"
                  >
                    <i className={`bi ${wishlist[b.id] ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                  </button>
                  <button type="button" className="icon_square_action_btn" aria-label="Add to cart">
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

        {/* Load More Button */}
        <div className="text-center mt-5">
          <button type="button" className="btn_gold_solid fs-6 py-3 px-4">
            LOAD MORE <i className="bi bi-plus-circle ms-1"></i>
          </button>
        </div>

      </div>
    </section>
  );
}
