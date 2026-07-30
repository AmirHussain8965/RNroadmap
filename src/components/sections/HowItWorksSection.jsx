'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // 1. Image component import kiya

export default function HowItWorksSection() {
  const steps = [
    {
      num: 1,
      title: 'Pick Your Guide',
      subtitle: 'Find The One Built For Where You Are Now.',
      image: '/assets/hiw1.png', // 2. Icon ki jagah image path add kiya
      position: 'left'
    },
    {
      num: 2,
      title: 'Download Instantly',
      subtitle: 'Get Your PDF On Any Device. No Waiting.',
      image: '/assets/hiw2.png', // Image path
      position: 'right'
    },
    {
      num: 3,
      title: 'Move Forward',
      subtitle: 'Study Smarter And Reach Your Next Step.',
      image: '/assets/hiw3.png', // Image path
      position: 'left'
    }
  ];

  return (
    <section className="section_wrapper_custom" id="works">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main">
              How It <span className="gold_text_span">Works</span>
            </h2>
            <p className="section_subtitle_desc mx-auto">
              Simple. Easy. Fast.
            </p>
          </div>
        </div>

        {/* Stepper Timeline */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            {steps.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="row align-items-center my-2">
                  {/* Left Column */}
                  <div className="col-5">
                    {step.position === 'left' && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="stepper_content_left"
                      >
                        <div className="stepper_icon_box">
                          {/* 3. Left column mein Image tag lagaya */}
                          <Image
                            src={step.image}
                            alt={step.title}
                            width={40}
                            height={40}
                          />
                        </div>
                        <h3 className="highlight_title_text fs-4">{step.title}</h3>
                        <p className="highlight_desc_text fs-6">{step.subtitle}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center Node Circle Column */}
                  <div className="col-2 text-center position-relative">
                    <div className="stepper_node_circle">
                      {step.num}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="col-5">
                    {step.position === 'right' && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="stepper_content_right"
                      >
                        <div className="stepper_icon_box">
                          {/* 4. Right column mein bhi Image tag lagaya */}
                          <Image
                            src={step.image}
                            alt={step.title}
                            width={40}
                            height={40}
                          />
                        </div>
                        <h3 className="highlight_title_text fs-4">{step.title}</h3>
                        <p className="highlight_desc_text fs-6">{step.subtitle}</p>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Dashed Connecting Line between nodes */}
                {idx < steps.length - 1 && (
                  <div className="row justify-content-center">
                    <div className="col-2 text-center">
                      <div className="stepper_line_vertical"></div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}