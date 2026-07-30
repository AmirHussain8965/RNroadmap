'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ShopHeaderSection() {
  return (
    <section className="section_wrapper_custom pb-0" id="shop-header">
      <div className="container">
        {/* Title Block */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h1 className="section_title_main display-4 fw-bold">
              SHOP
            </h1>
            <p className="section_subtitle_desc mx-auto mt-2">
              Everything you need to study smarter — guides, flashcards, bundles, and more, all in one place.
            </p>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="shop_header_controls">
          {/* Search Box */}
          <div className="search_input_wrapper mb-0 flex-grow-1">
            <input
              type="text"
              placeholder="Search study guides, flashcards, NCLEX..."
              className="search_input_field"
            />
            <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-warning"></i>
          </div>

          {/* Right Action Buttons */}
          <div className="d-flex align-items-center gap-2">
            <button type="button" className="shop_icon_btn" aria-label="Filter">
              <i className="bi bi-funnel-fill"></i>
            </button>
            <button type="button" className="shop_icon_btn" aria-label="Sort">
              <i className="bi bi-arrow-down-up"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
