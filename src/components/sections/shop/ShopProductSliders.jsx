'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ShopProductSliders() {
  const [wishlist, setWishlist] = useState({});

  const bestSellers = [
    {
      id: 'bs1',
      title: 'CNA Study Guide',
      tag: 'Made Simple • Easy • Fast',
      desc: 'Pass the CNA exam faster — bite-size visual lessons, diagrams, gold must-know boxes, a skills-test checklist, 60 practice questions with answers, rapid-review flashcards & exam-day tips.',
      price: '$12.99',
      sold: '320+ Sold'
    },
    {
      id: 'bs2',
      title: 'LVN / LPN Study Guide',
      tag: 'Made Simple • Easy • Fast',
      desc: 'Pass the LVN/LPN exam faster — ADPIE, pharmacology & med-surg made simple with diagrams, must-know boxes, 60 practice questions with answers, rapid-review flashcards & exam-day tips.',
      price: '$12.99',
      sold: '320+ Sold'
    },
    {
      id: 'bs3',
      title: 'Getting Into Nursing School',
      tag: 'Vol. 01',
      desc: 'Prerequisites, TEAS prep, applications & interviews — your admission roadmap.',
      price: '$12.99',
      sold: '320+ Sold'
    }
  ];

  const newIn = [
    {
      id: 'ni1',
      title: 'CNA Study Guide',
      tag: 'Made Simple • Easy • Fast',
      desc: 'Pass the CNA exam faster — bite-size visual lessons, diagrams, gold must-know boxes, a skills-test checklist, 60 practice questions with answers, rapid-review flashcards & exam-day tips.',
      price: '$9.99',
      sold: '320+ Sold'
    },
    {
      id: 'ni2',
      title: 'LVN / LPN Study Guide',
      tag: 'Made Simple • Easy • Fast',
      desc: 'Pass the LVN/LPN exam faster — ADPIE, pharmacology & med-surg made simple with diagrams, must-know boxes, 60 practice questions with answers, rapid-review flashcards & exam-day tips.',
      price: '$9.99',
      sold: '320+ Sold'
    },
    {
      id: 'ni3',
      title: 'Getting Into Nursing School',
      tag: 'Vol. 01',
      desc: 'Prerequisites, TEAS prep, applications & interviews — your admission roadmap.',
      price: '$9.99',
      sold: '320+ Sold'
    }
  ];

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section_wrapper_custom pt-0" id="shop-sliders">
      <div className="container">
        
        {/* SECTION 1: Best Sellers */}
        <div className="mb-5">
          <div className="row align-items-end mb-4">
            <div className="col-12 col-md-8">
              <h2 className="section_title_main display-6 fw-bold mb-1">
                <span className="gold_text_span">Best Sellers</span> Among Students
              </h2>
              <p className="section_subtitle_desc">
                The most-loved guides and flashcards, trusted by thousands of nursing students at every stage.
              </p>
            </div>
            <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
              <div className="d-inline-flex gap-2">
                <button type="button" className="slider_arrow_btn" aria-label="Previous">
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button type="button" className="slider_arrow_btn" aria-label="Next">
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {bestSellers.map((p, idx) => (
              <div key={p.id} className="col-12 col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="product_card_box"
                >
                  <span className="product_card_tag">{p.tag}</span>
                  <h3 className="product_card_title">{p.title}</h3>
                  <p className="product_card_desc">{p.desc}</p>

                  <div className="mb-4">
                    <span className="product_card_price">{p.price}</span>
                    <span className="product_card_sold">{p.sold}</span>
                  </div>

                  <div className="d-flex align-items-center gap-2 w-100 justify-content-center">
                    <button
                      type="button"
                      className={`icon_square_action_btn ${wishlist[p.id] ? 'bg-warning text-dark border-warning' : ''}`}
                      onClick={() => toggleWishlist(p.id)}
                      aria-label="Add to wishlist"
                    >
                      <i className={`bi ${wishlist[p.id] ? 'bi-heart-fill' : 'bi-heart'}`}></i>
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
        </div>

        {/* SECTION 2: New In */}
        <div>
          <div className="row align-items-end mb-4">
            <div className="col-12 col-md-8">
              <h2 className="section_title_main display-6 fw-bold mb-1">
                <span className="gold_text_span">New In</span> Study Material
              </h2>
              <p className="section_subtitle_desc">
                The newest additions to our study library — updated and ready when you are.
              </p>
            </div>
            <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
              <div className="d-inline-flex gap-2">
                <button type="button" className="slider_arrow_btn" aria-label="Previous">
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button type="button" className="slider_arrow_btn" aria-label="Next">
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {newIn.map((p, idx) => (
              <div key={p.id} className="col-12 col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="product_card_box"
                >
                  <span className="product_card_tag">{p.tag}</span>
                  <h3 className="product_card_title">{p.title}</h3>
                  <p className="product_card_desc">{p.desc}</p>

                  <div className="mb-4">
                    <span className="product_card_price">{p.price}</span>
                    <span className="product_card_sold">{p.sold}</span>
                  </div>

                  <div className="d-flex align-items-center gap-2 w-100 justify-content-center">
                    <button
                      type="button"
                      className={`icon_square_action_btn ${wishlist[p.id] ? 'bg-warning text-dark border-warning' : ''}`}
                      onClick={() => toggleWishlist(p.id)}
                      aria-label="Add to wishlist"
                    >
                      <i className={`bi ${wishlist[p.id] ? 'bi-heart-fill' : 'bi-heart'}`}></i>
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
        </div>

      </div>
    </section>
  );
}
