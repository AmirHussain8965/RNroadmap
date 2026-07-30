'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveQuizWidget() {
  const [selectedExam, setSelectedExam] = useState('NCLEX-RN');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showRationale, setShowRationale] = useState(false);

  const questions = [
    {
      text: 'A Nurse Is Caring For A Client Taking Digoxin. Which Finding Should The Nurse Report Immediately?',
      options: [
        'Heart rate 78 bpm',
        'Nausea and visual halos around lights',
        'Blood pressure 118/76',
        'Urine output 40 mL/hr'
      ],
      correctIndex: 1,
      rationale: 'Nausea, vomiting, and visual disturbances (halos, blurred or yellow-green vision) are classic early signs of digoxin toxicity and must be reported immediately. The other findings are within normal limits.'
    },
    {
      text: 'Which of the following is the priority intervention for a patient with acute coronary syndrome?',
      options: [
        'Administer oxygen therapy',
        'Obtain a 12-lead ECG',
        'Administer sublingual nitroglycerin',
        'Draw blood for cardiac markers'
      ],
      correctIndex: 1,
      rationale: 'Obtaining a 12-lead ECG is the priority diagnostic tool to identify myocardial infarction (STEMI) and guide immediate reperfusion therapy.'
    }
  ];

  const handleOptionClick = (idx) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    setShowRationale(true);
    if (idx === questions[currentQuestionIndex].correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowRationale(false);
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  const q = questions[currentQuestionIndex];

  return (
    <section className="section_wrapper_custom" id="quiz-widget">
      <div className="container">

        {/* Section Header */}
        <div className="row text-center justify-content-center mb-4">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main mb-2">
              <span className="gold_text_span">Try</span> It Before You <span className="gold_text_span">Buy</span> It
            </h2>
            <p className="section_subtitle_desc">
              Choose your exam — RN or PN/LPN. Answer 10 mixed-topic questions with instant rationales, no signup required.
            </p>
          </div>
        </div>

        {/* Exam Pills Selector */}
        <div className="d-flex justify-content-center gap-2 mb-4">
          <button
            type="button"
            className={`stage_pill_btn ${selectedExam === 'NCLEX-RN' ? 'active' : ''}`}
            onClick={() => setSelectedExam('NCLEX-RN')}
          >
            NCLEX-RN
          </button>
          <button
            type="button"
            className={`stage_pill_btn ${selectedExam === 'NCLEX-PN' ? 'active' : ''}`}
            onClick={() => setSelectedExam('NCLEX-PN')}
          >
            NCLEX-PN
          </button>
        </div>

        {/* Main Quiz Widget Card */}
        <div className="quiz_widget_card">
          <h3 className="fs-4 fw-bold text-white mb-2">Question: {currentQuestionIndex + 1}/10</h3>

          {/* Segment Progress Bar */}
          <div className="quiz_segment_bar">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`quiz_segment ${i <= currentQuestionIndex ? 'active' : ''}`}
              ></div>
            ))}
          </div>

          {/* Question Text */}
          <h4 className="fs-5 fw-bold text-white mb-4 leading-relaxed">
            {q.text}
          </h4>

          {/* Options list */}
          <div className="mb-4">
            {q.options.map((option, idx) => {
              let btnClass = '';
              if (selectedOption !== null) {
                if (idx === q.correctIndex) btnClass = 'correct';
              }
              return (
                <button
                  key={idx}
                  type="button"
                  className={`quiz_option_btn ${btnClass}`}
                  onClick={() => handleOptionClick(idx)}
                >
                  <span className="episode_gold_num">{idx + 1}</span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {/* Rationale description box */}
          {showRationale && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="alert alert-dark p-3 border border-success rounded-3 mt-4"
            >
              <strong className="text-success d-block mb-1">Correct Answer:</strong>
              <p className="small text-white-80 mb-0 leading-relaxed">{q.rationale}</p>
            </motion.div>
          )}

          {/* Next Button */}
          {showRationale && (
            <div className="text-end mt-4">
              <button
                type="button"
                className="btn_gold_solid px-4 py-2"
                onClick={handleNext}
              >
                NEXT QUESTION
              </button>
            </div>
          )}
        </div>

        {/* Score Display Card */}
        <div className="score_display_card">
          <span className="fs-5 fw-bold text-white">Current Score</span>
          <span className="gold_text_span fs-4 fw-bold">{score}/{currentQuestionIndex + 1}</span>
        </div>

        {/* Bottom Callout Subtext & Buttons */}
        <div className="text-center max-w-700 mx-auto">
          <p className="instructor_bio_paragraph small leading-relaxed mb-4">
            That was a 10-question sample of the full 2,000-question bank — every core topic, full rationales, select-all-that-apply, unlimited retakes. For full access, get our membership today.
          </p>

          <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
            <button type="button" className="btn_gold_solid">
              GET MEMBERSHIP <i className="bi bi-arrow-up-right ms-1"></i>
            </button>
            <button type="button" className="btn_gold_outline">
              BROWSE THE BUNDLES <i className="bi bi-arrow-up-right ms-1"></i>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
