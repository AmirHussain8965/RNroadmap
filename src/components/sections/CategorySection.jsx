'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Image component import kar liya

export default function CategorySection() {
  const [activeCategory, setActiveCategory] = useState('CNA');

  // Icons ki jagah image paths add kar diye hain. Apni export ki hui images ke actual names yahan daal dain.
  const categories = [
    { id: 'CNA', label: 'CNA', image: '/assets/Browse_category1.png' },
    { id: 'LPN', label: 'LPN', image: '/assets/Browse_category2.png' },
    { id: 'RNSchool', label: 'RN School', image: '/assets/Browse_category3.png' },
    { id: 'NCLEX', label: 'NCLEX', image: '/assets/Browse_category4.png' },
    { id: 'ICU', label: 'ICU', image: '/assets/Browse_category5.png' },
    { id: 'CCRN', label: 'CCRN', image: '/assets/Browse_category6.png' },
    { id: 'CRNA', label: 'CRNA', image: '/assets/Browse_category7.png' },
    { id: 'FNP', label: 'FNP', image: '/assets/Browse_category8.png' }
  ];

  return (
    <section className="section_wrapper_custom" id="category">
      <div className="container">
        {/* Section Header Row */}
        <div className="row align-items-end mb-5">
          <div className="col-12 col-md-8">
            <h2 className="section_title_main">
              Browse By <span className="gold_text_span">Category</span>
            </h2>
            <p className="section_subtitle_desc">
              Wherever you are in your nursing journey, find the guides built specifically for that stage.
            </p>
          </div>
          <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
            <button type="button" className="btn_gold_solid">
              VIEW ALL GUIDES <i className="bi bi-arrow-up-right ms-1"></i>
            </button>
          </div>
        </div>

        {/* 8 Categories Grid */}
        <div className="row g-3 justify-content-center">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <div key={cat.id} className="col-6 col-sm-4 col-md-3 col-lg-2-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`category_card_box ${isActive ? 'category_card_active' : ''}`}
                >
                  <div className="category_icon_glyph">
                    {/* Yahan <i> tag ko hata kar Image component laga diya hai */}
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      width={40} // Apne design ke mutabiq adjust kar lein
                      height={40} // Apne design ke mutabiq adjust kar lein
                    />
                  </div>
                  <div className="category_label_text">{cat.label}</div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}