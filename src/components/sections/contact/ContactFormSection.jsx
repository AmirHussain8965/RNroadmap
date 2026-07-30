'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    query: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email) {
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        query: ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="section_wrapper_custom" id="contact-form">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <h1 className="section_title_main display-4 fw-bold">
              GET IN TOUCH
            </h1>
            <p className="section_subtitle_desc mx-auto mt-2">
              Have a question about a guide, your membership, or something else?<br />
              We're here to help.
            </p>
          </div>
        </div>

        {/* Form Container Card */}
        <div className="contact_wrapper_card">
          <div className="row g-0">
            {/* Left Info Panel */}
            <div className="col-12 col-lg-5">
              <div className="contact_left_panel">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="contact_details_overlay"
                >
                  <h3 className="fs-3 fw-bold text-white mb-2">Contact Details</h3>
                  <p className="text-white-50 small leading-relaxed mb-3">
                    Reach out directly, and we'll get back to you as soon as possible or fill out the form and we will entertain your queries.
                  </p>
                  <p className="contact_notice_text">
                    We typically reply within 24–48 hours
                  </p>

                  {/* Horizontal Action Pills */}
                  <div className="contact_pills_row">
                    <a href="mailto:support@rnroadmap.com" className="contact_pill_info">
                      <i className="bi bi-envelope-fill text-warning"></i>
                      <span>support@rnroadmap.com</span>
                    </a>
                    <a href="tel:+0000000000" className="contact_pill_info">
                      <i className="bi bi-telephone-fill text-warning"></i>
                      <span>+00 0000 0000</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Contact Form Panel */}
            <div className="col-12 col-lg-7 contact_form_panel">
              {submitted ? (
                <div className="alert alert-warning p-4 text-center text-dark fw-bold rounded-3">
                  <i className="bi bi-check-circle-fill display-4 d-block mb-3 text-warning"></i>
                  <h3>Message Sent Successfully!</h3>
                  <p className="fw-medium mb-0 mt-2">Thank you for reaching out. We will get back to you within 24-48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {/* First & Last Name */}
                    <div className="col-12 col-md-6">
                      <label className="contact_label" htmlFor="firstName">First Name*</label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="contact_input_field"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="contact_label" htmlFor="lastName">Last Name*</label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="contact_input_field"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="col-12 col-md-6">
                      <label className="contact_label" htmlFor="email">Email*</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="contact_input_field"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="contact_label" htmlFor="phone">Phone*</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="contact_input_field"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Subject */}
                    <div className="col-12">
                      <label className="contact_label" htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="contact_input_field"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Query */}
                    <div className="col-12">
                      <label className="contact_label" htmlFor="query">Your Query</label>
                      <textarea
                        name="query"
                        id="query"
                        rows="5"
                        className="contact_input_field"
                        value={formData.query}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 text-end mt-4">
                      <button type="submit" className="btn_gold_solid px-5 py-3 fs-6">
                        SEND
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
