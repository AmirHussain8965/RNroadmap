'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function YourNextStepSection({
  title,
  desc = "Get the exact guide built for your stage — and study with the clarity and confidence you need to move forward.",
  imgSrc = "/assets/std_g1.png",
  btnText = "EXPLORE BUNDLES",
  btnLink = "/shop"
}) {
  const displayTitle = title || (
    <>
      Your Stage. Your Guide. <br />
      Your <span className="gold_text_span">Next Step</span>.
    </>
  );

  return (
    <section className="section_wrapper_custom pt-0" id="next-step-guides">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="guides_cta_card"
        >
          <div className="row align-items-center g-5">
            {/* Left Column: Text & CTA */}
            <div className="col-12 col-lg-7">
              <div className="text-start">
                <h2 className="guides_cta_heading">
                  {displayTitle}
                </h2>

                <p className="guides_cta_desc mb-4">
                  {desc}
                </p>

                <div>
                  <a href={btnLink} className="btn_gold_solid cta_pill_btn">
                    {btnText} <i className="bi bi-arrow-up-right-circle-fill ms-1"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Books Stack Image */}
            <div className="col-12 col-lg-5 text-center text-lg-end mt-4 mt-lg-0">
              <img
                src={imgSrc}
                alt="RNroadmap Study Guides Stack"
                className="img-fluid guides_cta_img"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
