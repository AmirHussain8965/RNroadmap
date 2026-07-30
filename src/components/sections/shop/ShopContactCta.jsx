'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ShopContactCta() {
  return (
    <section className="section_wrapper_custom pt-0" id="shop-contact-cta">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="shop_cta_card"
        >
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-12 col-lg-7">
              <div className="text-start">
                <h2 className="shop_cta_heading">
                  Didn't <span className="gold_text_span">Find</span> What You're <br />
                  Looking For?
                </h2>

                <p className="shop_cta_desc mb-4">
                  Let us help you find the right resource for your stage — whether it's a guide, a bundle, or something in between.
                </p>

                <div className="d-flex flex-wrap align-items-center gap-3">
                  <a href="tel:000000000" className="btn_gold_solid shop_cta_btn">
                    000-000-000
                    <span className="shop_cta_btn_icon">
                      <i className="bi bi-telephone-fill"></i>
                    </span>
                  </a>
                  <a href="mailto:support@rnd.com" className="btn_gold_solid shop_cta_btn">
                    support@rnd.com
                    <span className="shop_cta_btn_icon">
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Headset Visual */}
            <div className="col-12 col-lg-5 text-center text-lg-end">
              <img
                src="/assets/contact_icon.png"
                alt="Support Headset"
                className="img-fluid shop_cta_img"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
