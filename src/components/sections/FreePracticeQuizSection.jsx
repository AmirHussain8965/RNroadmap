'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function FreePracticeQuizSection() {
  const [activeTab, setActiveTab] = useState('NCLEX-RN');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(1); // Default option 2 (index 1) selected like screenshot
  const [score, setScore] = useState(1);

  const quizQuestions = [
    {
      id: 1,
      question: 'A Nurse Is Caring For A Client Taking Digoxin. Which Finding Should The Nurse Report Immediately?',
      options: [
        'Heart rate 78 bpm',
        'Nausea and visual halos around lights',
        'Blood pressure 118/76',
        'Urine output 40 mL/hr'
      ],
      correctIndex: 1,
      explanation: 'Correct Answer: Nausea, vomiting, and visual disturbances (halos, blurred or yellow-green vision) are classic early signs of digoxin toxicity and must be reported immediately. The other findings are within normal limits.'
    },
    {
      id: 2,
      question: 'A client with heart failure is prescribed furosemide (Lasix). Which electrolyte abnormality should the nurse monitor for closely?',
      options: [
        'Hyperkalemia',
        'Hypokalemia',
        'Hypercalcemia',
        'Hypernatremia'
      ],
      correctIndex: 1,
      explanation: 'Correct Answer: Furosemide is a loop diuretic that causes potassium excretion, increasing the risk for hypokalemia.'
    }
  ];

  const currentQ = quizQuestions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setCurrentQuestionIndex(0);
      setSelectedOption(1);
    }
  };

  return (
    <section className="section_wrapper_custom" id="quiz">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-4">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main">
              Take A <span className="gold_text_span">Free</span> Practice Round
            </h2>
            <p className="section_subtitle_desc mx-auto mb-4">
              Try a free sample of our NCLEX-style questions — then unlock the full 2,000+ question bank on our Test Bank page.
            </p>

            {/* Filter Tabs */}
            <div className="d-flex justify-content-center gap-3 mb-4">
              <button
                type="button"
                className={`quiz_tab_btn ${activeTab === 'NCLEX-RN' ? 'active' : ''}`}
                onClick={() => setActiveTab('NCLEX-RN')}
              >
                NCLEX-RN
              </button>
              <button
                type="button"
                className={`quiz_tab_btn ${activeTab === 'NCLEX-PN' ? 'active' : ''}`}
                onClick={() => setActiveTab('NCLEX-PN')}
              >
                NCLEX-PN
              </button>
            </div>
          </div>
        </div>

        {/* Quiz Container Box */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="quiz_card_container"
            >
              {/* Question Index & Dash Segments */}
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3 className="gold_text_span fs-4 fw-bold mb-0">
                  Question: {currentQ.id}/10
                </h3>
              </div>

              <div className="d-flex gap-2 mb-4">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`quiz_dash_segment ${i < currentQ.id ? 'quiz_dash_active' : ''}`}
                  ></div>
                ))}
              </div>

              {/* Question Text */}
              <h3 className="text-white fs-5 fw-bold mb-4">
                {currentQ.question}
              </h3>

              {/* Options List */}
              <div className="mb-4">
                {currentQ.options.map((opt, idx) => {
                  const isCorrect = idx === currentQ.correctIndex;
                  const isSelected = selectedOption === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      className={`quiz_option_btn ${isSelected && isCorrect ? 'selected_correct' : ''}`}
                      onClick={() => setSelectedOption(idx)}
                    >
                      <span className="quiz_num_badge">{idx + 1}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation Box */}
              {selectedOption !== null && (
                <div className="quiz_explanation_box">
                  {currentQ.explanation}
                </div>
              )}

              {/* Next Question Button */}
              <div className="text-end mt-4">
                <button type="button" className="btn_gold_solid" onClick={handleNext}>
                  NEXT QUESTION
                </button>
              </div>
            </motion.div>

            {/* Current Score Banner */}
            <div className="quiz_score_banner">
              <span className="gold_text_span fs-4 fw-bold">Current Score</span>
              <span className="gold_text_span fs-3 fw-bold">{score}/10</span>
            </div>

            {/* Bottom Callout */}
            <div className="text-center mt-5">
              <p className="section_subtitle_desc mx-auto mb-4">
                That was just a preview of our full question bank — complete with every core topic, full rationales, and unlimited retakes. For full access, get our membership today.
              </p>
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                <button type="button" className="btn_gold_solid">
                  LEARN MORE ABOUT NCLEX TEST BANK <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
                <button type="button" className="btn_gold_outline">
                  VIEW MEMBERSHIP PLANS <i className="bi bi-arrow-up-right ms-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
