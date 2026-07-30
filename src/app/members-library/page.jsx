'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './members.css';

export function MembersLibrary({ defaultTab = 'guides' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAudioEpisodesOpen, setIsAudioEpisodesOpen] = useState(false);
  const [isFavAudioEpisodesOpen, setIsFavAudioEpisodesOpen] = useState(false);

  const menuItems = [
    { id: 'guides', label: 'My Study Guides', icon: 'bi-book' },
    { id: 'audio', label: 'My Audio Guides', icon: 'bi-headphones' },
    { id: 'test-bank', label: 'NCLEX Test Bank', icon: 'bi-journal-check' },
    { id: 'favourites', label: 'Favourites', icon: 'bi-heart' },
    { id: 'membership', label: 'Membership Status', icon: 'bi-person-badge' },
    { id: 'discounts', label: 'Member Discounts', icon: 'bi-tag' }
  ];

  return (
    <div className="members_dashboard_layout">
      {/* Sidebar Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          className="sidebar_backdrop"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Left Sidebar Panel */}
      <aside className={`members_sidebar ${isSidebarOpen ? 'mobile_sidebar_open' : ''}`}>
        {/* Brand logo */}
        <div className="sidebar_logo_div">
          <img src="/assets/Logo.png" alt="RNroadmap Logo" />
        </div>

        <span className="sidebar_menu_section_title">Menu</span>
        <nav className="d-flex flex-column mb-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`sidebar_menu_link border-0 bg-transparent text-start w-100 ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(item.id);
                setIsSidebarOpen(false); // Close sidebar on mobile item selection
              }}
            >
              <i className={`bi ${item.icon}`}></i>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <span className="sidebar_menu_section_title">General</span>
        <nav className="d-flex flex-column">
          <button type="button" className="sidebar_menu_link border-0 bg-transparent text-start w-100">
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </button>
          <button type="button" className="sidebar_menu_link border-0 bg-transparent text-start w-100">
            <i className="bi bi-info-circle"></i>
            <span>Help &amp; Support</span>
          </button>
          <button type="button" className="sidebar_menu_link border-0 bg-transparent text-start w-100">
            <i className="bi bi-box-arrow-right"></i>
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Right Main Content Area */}
      <main className="members_main_content">
        {/* Top Header Bar */}
        <header className="members_top_header">
          <div className="d-flex align-items-center">
            {/* Mobile Toggle Button */}
            <button
              type="button"
              className="btn_mobile_menu_toggle border-0 bg-transparent text-white me-2 d-lg-none"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle navigation menu"
            >
              <i className="bi bi-list fs-2"></i>
            </button>
            <h2 className="fs-3 fw-bold text-white mb-0">My Library</h2>
          </div>

          {/* Search bar */}
          <div className="members_header_search flex-grow-1 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="search_input_field py-2"
            />
            <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-warning"></i>
          </div>

          {/* Profile controls */}
          <div className="dash_profile_main_div">
            <button type="button" className="icon_circle_btn" aria-label="Cart">
              <i className="bi bi-cart-fill"></i>
            </button>
            <button type="button" className="icon_circle_btn" aria-label="Notifications">
              <i className="bi bi-bell-fill"></i>
            </button>

            <div className="position-relative">
              <button
                type="button"
                className="dash_profile_main"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                aria-label="Toggle profile menu"
              >
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80"
                  alt="Avatar"
                  className="dashboard_avatar"
                />
                <div className="text-start d-none d-sm-block">
                  <span className="d-block small text-warning fw-bold leading-none">Herry S.</span>
                  <span className="text-white extra_small leading-none">Member</span>
                </div>
                <i className={`bi ${isProfileOpen ? 'bi-chevron-up' : 'bi-chevron-down'} text-warning small ms-1`}></i>
              </button>

              {isProfileOpen && (
                <div className="profile_dropdown_menu">
                  <button type="button" className="dropdown_menu_item" onClick={() => setIsProfileOpen(false)}>
                    <i className="bi bi-person me-2"></i> My Profile
                  </button>
                  <button type="button" className="dropdown_menu_item" onClick={() => setIsProfileOpen(false)}>
                    <i className="bi bi-gear me-2"></i> Account Settings
                  </button>
                  <button type="button" className="dropdown_menu_item border-top border-secondary border-opacity-50" onClick={() => setIsProfileOpen(false)}>
                    <i className="bi bi-box-arrow-right me-2 text-danger"></i> <span className="text-danger">Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Tab Views Panel */}
        <div className="admin_content_inner w-100">
          <AnimatePresence mode="wait">

            {/* VIEW 1: My Study Guides */}
            {activeTab === 'guides' && (
              <motion.div
                key="guides-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="fs-4 fw-bold text-white text-start mb-4">MY STUDY GUIDES</h3>
                <div className="row g-4">
                  {/* Card 1: Nursing School Study Guide */}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="member_panel_card text-start d-flex flex-column">
                      <h4 className="fs-4 fw-bold text-white mb-2">Nursing School Study Guide</h4>
                      <span className="gold_text_span small fw-bold mb-3 d-block">Vol. 02</span>
                      <p className="product_card_desc flex-grow-1 mb-4">
                        Study methods, NCLEX questions, dosage math &amp; lab values that actually stick.
                      </p>
                      <div className="d-flex align-items-center gap-2 w-100">
                        <button type="button" className="icon_square_action_btn" aria-label="Download">
                          <i className="bi bi-download"></i>
                        </button>
                        <button type="button" className="btn_gold_solid flex-grow-1">
                          OPEN <i className="bi bi-arrow-up-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Nursing Care Plan Guide */}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="member_panel_card text-start d-flex flex-column">
                      <h4 className="fs-4 fw-bold text-white mb-2">Nursing Care Plan Guide</h4>
                      <span className="text-white-50 small fw-medium mb-3 d-block">Made Simple • Easy • Fast</span>
                      <p className="product_card_desc flex-grow-1 mb-4">
                        32 pages — everything for ATI in one: a full study guide (TEAS, content mastery &amp; strategies), entrance &amp; exit practice exams, and 100 flashcards, with worked answers for every problem.
                      </p>
                      <div className="d-flex align-items-center gap-2 w-100">
                        <button type="button" className="icon_square_action_btn" aria-label="Download">
                          <i className="bi bi-download"></i>
                        </button>
                        <button type="button" className="btn_gold_solid flex-grow-1">
                          OPEN <i className="bi bi-arrow-up-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: ATI Complete */}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="member_panel_card text-start d-flex flex-column">
                      <h4 className="fs-4 fw-bold text-white mb-2">ATI Complete</h4>
                      <span className="text-white-50 small fw-medium mb-3 d-block">Made Simple • Easy • Fast</span>
                      <p className="product_card_desc flex-grow-1 mb-4">
                        73 pages — everything for ATI in one: a full study guide (TEAS, content mastery &amp; strategies), entrance &amp; exit practice exams, and 100 flashcards, with worked answers for every problem.
                      </p>
                      <div className="d-flex align-items-center gap-2 w-100">
                        <button type="button" className="icon_square_action_btn" aria-label="Download">
                          <i className="bi bi-download"></i>
                        </button>
                        <button type="button" className="btn_gold_solid flex-grow-1">
                          OPEN <i className="bi bi-arrow-up-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Duplicate Nursing School Study Guide */}
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="member_panel_card text-start d-flex flex-column">
                      <h4 className="fs-4 fw-bold text-white mb-2">Nursing School Study Guide</h4>
                      <span className="gold_text_span small fw-bold mb-3 d-block">Vol. 02</span>
                      <p className="product_card_desc flex-grow-1 mb-4">
                        Study methods, NCLEX questions, dosage math &amp; lab values that actually stick.
                      </p>
                      <div className="d-flex align-items-center gap-2 w-100">
                        <button type="button" className="icon_square_action_btn" aria-label="Download">
                          <i className="bi bi-download"></i>
                        </button>
                        <button type="button" className="btn_gold_solid flex-grow-1">
                          OPEN <i className="bi bi-arrow-up-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 2: My Audio Guides */}
            {activeTab === 'audio' && (
              <motion.div
                key="audio-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="fs-4 fw-bold text-white text-start mb-4">MY AUDIO GUIDES</h3>
                <div className="member_panel_card text-start">
                  <span className="text-warning small fw-bold mb-2 d-block">NCLEX-PN</span>
                  <h4 className="fs-3 fw-bold text-white mb-2">PN High-Yield Audio Study Guide</h4>
                  <p className="product_card_desc mb-4">
                    10 focused episodes across the full NCLEX-PN test plan — built for LPN/LVN students and repeat testers.
                  </p>

                  {/* Episodes Dropdown */}
                  <div className="mb-4">
                    <button
                      type="button"
                      className="episodes_dropdown_bar"
                      onClick={() => setIsAudioEpisodesOpen(!isAudioEpisodesOpen)}
                    >
                      <span className="text-white fw-bold">VIEW ALL 10 EPISODES</span>
                      <i className={`bi ${isAudioEpisodesOpen ? 'bi-chevron-up' : 'bi-chevron-down'} text-warning`}></i>
                    </button>

                    {isAudioEpisodesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="alert alert-dark p-3 border border-secondary rounded-3 mt-2"
                      >
                        <ol className="mb-0 text-white-80 small ps-3">
                          <li className="py-1">Pharmacology Foundations</li>
                          <li className="py-1">Fluid &amp; Electrolyte Balance</li>
                          <li className="py-1">Cardiovascular System Review</li>
                          <li className="py-1">Respiratory Management</li>
                          <li className="py-1">Gastrointestinal Assessments</li>
                        </ol>
                      </motion.div>
                    )}
                  </div>

                  <div className="d-flex align-items-center justify-content-end gap-2">
                    <button type="button" className="icon_square_action_btn" aria-label="Download">
                      <i className="bi bi-download"></i>
                    </button>
                    <button type="button" className="btn_gold_solid px-4">
                      OPEN <i className="bi bi-arrow-up-right ms-1"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 3: NCLEX Test Bank */}
            {activeTab === 'test-bank' && (
              <motion.div
                key="test-bank-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="fs-4 fw-bold text-white text-start mb-4">NCLEX TEST BANK</h3>
                <div className="test_bank_centered_box">
                  <h4 className="fs-3 fw-bold text-white mb-3">Ready To Take The Test Yourself?</h4>
                  <p className="product_card_desc mb-4 mx-auto max-w-400">
                    Put your knowledge to the test with practice questions built for exam day.
                  </p>

                  {/* Clipboard Illustration */}
                  <div className="mb-4 text-center">
                    <div className="d-inline-block position-relative">
                      <img src="/assets/mem_s3_1.png" className='img-fluid' alt="" />
                    </div>
                  </div>

                  <button type="button" className="btn_gold_solid px-5 py-3 fs-6">
                    START TEST <i className="bi bi-arrow-up-right ms-1"></i>
                  </button>
                </div>
              </motion.div>
            )}

            {/* VIEW 4: Favourites */}
            {activeTab === 'favourites' && (
              <motion.div
                key="favourites-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="fs-4 fw-bold text-white text-start mb-4">MY FAVOURITES/WISHLIST</h3>

                {/* Subheading: STUDY GUIDES */}
                <h4 className="fs-5 fw-bold text-start text-white-50 mb-3 uppercase tracking-wider">STUDY GUIDES</h4>
                <div className="row g-4 mb-5">
                  {/* Fav Card 1: Dosage Calculation */}
                  <div className="col-12 col-md-6">
                    <div className="member_panel_card text-start d-flex flex-column">
                      <h4 className="fs-4 fw-bold text-white mb-2">Dosage Calculation</h4>
                      <span className="text-white-50 small fw-medium mb-3 d-block">Made Simple • Easy • Fast</span>
                      <p className="product_card_desc flex-grow-1 mb-3">
                        Master nursing med math — fast. 3 methods explained, key conversions, IV &amp; drip rates, weight-based dosing, 100+ practice problems with fully worked answer keys, plus a 40-question final test.
                      </p>
                      <div className="mb-4">
                        <span className="gold_text_span fs-4 fw-bold me-2">$9.99</span>
                        <span className="product_card_sold">320+ Sold</span>
                      </div>
                      <div className="d-flex align-items-center gap-2 w-100">
                        <button type="button" className="icon_square_action_btn" aria-label="Add to cart">
                          <i className="bi bi-cart-plus"></i>
                        </button>
                        <button type="button" className="btn_gold_solid flex-grow-1">
                          BUY NOW <i className="bi bi-arrow-up-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Fav Card 2: Pharmacology Study Guide */}
                  <div className="col-12 col-md-6">
                    <div className="member_panel_card text-start d-flex flex-column">
                      <h4 className="fs-4 fw-bold text-white mb-2">Pharmacology Study Guide</h4>
                      <span className="text-white-50 small fw-medium mb-3 d-block">Students / NCLEX</span>
                      <p className="product_card_desc flex-grow-1 mb-3">
                        A 27-page guide that makes high-yield drug classes simple — mechanisms, side effects, nursing care, comparison tables &amp; a Key Point on every page. Built for nursing school &amp; NCLEX.
                      </p>
                      <div className="mb-4">
                        <span className="gold_text_span fs-4 fw-bold me-2">$14.99</span>
                        <span className="product_card_sold">320+ Sold</span>
                      </div>
                      <div className="d-flex align-items-center gap-2 w-100">
                        <button type="button" className="icon_square_action_btn" aria-label="Add to cart">
                          <i className="bi bi-cart-plus"></i>
                        </button>
                        <button type="button" className="btn_gold_solid flex-grow-1">
                          BUY NOW <i className="bi bi-arrow-up-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subheading: AUDIO GUIDES */}
                <h4 className="fs-5 fw-bold text-start text-white-50 mb-3 uppercase tracking-wider">AUDIO GUIDES</h4>
                <div className="member_panel_card text-start">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="text-warning small fw-bold">NCLEX-PN</span>
                    <span className="gold_text_span fs-4 fw-bold">$19.99</span>
                  </div>
                  <h4 className="fs-3 fw-bold text-white mb-2">PN High-Yield Audio Study Guide</h4>
                  <p className="product_card_desc mb-4">
                    10 focused episodes across the full NCLEX-PN test plan — built for LPN/LVN students and repeat testers.
                  </p>

                  {/* Episodes dropdown */}
                  <div className="mb-4">
                    <button
                      type="button"
                      className="episodes_dropdown_bar"
                      onClick={() => setIsFavAudioEpisodesOpen(!isFavAudioEpisodesOpen)}
                    >
                      <span className="text-white fw-bold">VIEW ALL 10 EPISODES</span>
                      <i className={`bi ${isFavAudioEpisodesOpen ? 'bi-chevron-up' : 'bi-chevron-down'} text-warning`}></i>
                    </button>

                    {isFavAudioEpisodesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="alert alert-dark p-3 border border-secondary rounded-3 mt-2"
                      >
                        <ol className="mb-0 text-white-80 small ps-3">
                          <li className="py-1">Pharmacology Foundations</li>
                          <li className="py-1">Fluid &amp; Electrolyte Balance</li>
                          <li className="py-1">Cardiovascular System Review</li>
                        </ol>
                      </motion.div>
                    )}
                  </div>

                  <div className="d-flex align-items-center justify-content-end gap-2">
                    <button type="button" className="icon_square_action_btn" aria-label="Add to cart">
                      <i className="bi bi-cart-plus"></i>
                    </button>
                    <button type="button" className="btn_gold_solid px-4">
                      BUY NOW <i className="bi bi-arrow-up-right ms-1"></i>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 5: Membership Status */}
            {activeTab === 'membership' && (
              <motion.div
                key="membership-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="fs-4 fw-bold text-white text-start mb-4">MEMBERSHIP STATUS</h3>
                <div className="row justify-content-start">
                  <div className="col-12 col-md-8 col-lg-6">
                    <div className="member_panel_card text-start">
                      <h4 className="fs-4 fw-bold text-warning mb-4 uppercase tracking-wider">PROFESSIONAL PACKAGE</h4>

                      <div className="member_info_row">
                        <span className="text-white-50 fw-medium">Plan Name</span>
                        <span className="text-white fw-bold">Professional</span>
                      </div>

                      <div className="member_info_row">
                        <span className="text-white-50 fw-medium">Member Since</span>
                        <span className="text-white fw-bold">12-10-2025</span>
                      </div>

                      <div className="member_info_row">
                        <span className="text-white-50 fw-medium">Renewal Date</span>
                        <span className="text-white fw-bold">12-10-2026</span>
                      </div>

                      <div className="member_info_row mb-4">
                        <span className="text-white-50 fw-medium">Plan Price</span>
                        <span className="text-white fw-bold">$29.99/month</span>
                      </div>

                      <div className="d-flex flex-wrap gap-2 w-100">
                        <button type="button" className="btn_gold_outline flex-grow-1">
                          UNSUBSCRIBE
                        </button>
                        <button type="button" className="btn_gold_solid flex-grow-1">
                          UPGRADE PLAN <i className="bi bi-arrow-up-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 6: Member Discounts */}
            {activeTab === 'discounts' && (
              <motion.div
                key="discounts-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="fs-4 fw-bold text-white text-start mb-4">MEMBER DISCOUNTS &amp; OFFERS</h3>
                <div className="row g-4">
                  {/* Card 1: Buy 1 Bundle, Get 1 Free */}
                  <div className="col-12 col-md-6 pb-4">
                    <div className="member_panel_card text-center d-flex flex-column justify-content-between pb-5">
                      <div>
                        <h4 className="fs-4 fw-bold text-warning text-start mb-3">Buy 1 Bundle, Get 1 Free</h4>
                        <p className="product_card_desc text-start leading-relaxed">
                          Buy one LVN / LPN Starter Bundle and get a bundle of your choice for free.
                        </p>
                      </div>

                      {/* Gift Box SVG Graphic */}
                      <div className="discount_graphic_box">
                        <img src="/assets/mem_s6_1.png" className='img-fluid' alt="" />
                      </div>

                      <div>
                        <div className="discount_validity_text">
                          Valid Till: 12-09-2026 12:00am
                        </div>
                        {/* Overlapping Button */}
                        <button type="button" className="btn_gold_solid overlap_shop_btn px-4">
                          AVAIL OFFER <i className="bi bi-arrow-up-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Save 20% */}
                  <div className="col-12 col-md-6 pb-4">
                    <div className="member_panel_card text-center d-flex flex-column justify-content-between pb-5">
                      <div>
                        <h4 className="fs-4 fw-bold text-warning text-start mb-3">Save 20%</h4>
                        <p className="product_card_desc text-start leading-relaxed">
                          Members save an extra 20% on any stage bundle, from Getting Started to CRNA.
                        </p>
                      </div>

                      {/* Percentage Badge SVG Graphic */}
                      <div className="discount_graphic_box">
                        <img src="/assets/mem_s6_2.png" className='img-fluid' alt="" />
                      </div>

                      <div>
                        <div className="discount_validity_text">
                          Valid Till: 12-09-2026 12:00am
                        </div>
                        {/* Overlapping Button */}
                        <button type="button" className="btn_gold_solid overlap_shop_btn px-4">
                          AVAIL OFFER <i className="bi bi-arrow-up-right ms-1"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </main>
    </div>
  );
}

export default function MembersLibraryPageDefault() {
  return <MembersLibrary defaultTab="guides" />;
}
