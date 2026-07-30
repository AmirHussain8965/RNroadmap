'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './buyers.css';

export function BuyersLibrary({ defaultTab = 'purchases' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAudioEpisodesOpen, setIsAudioEpisodesOpen] = useState(false);

  const menuItems = [
    { id: 'purchases', label: 'My Purchases', icon: 'bi-bag-check' },
    { id: 'orders', label: 'Order History', icon: 'bi-receipt' },
    { id: 'upgrade', label: 'Upgrade Plan', icon: 'bi-arrow-up-circle' }
  ];

  const orders = [
    {
      id: '#123456',
      item: 'CNA Study Guide',
      date: '12.09.2026 - 12.53 PM',
      amount: '$ 19.99',
      status: 'Pending',
      badgeClass: 'badge_pending'
    },
    {
      id: '#177889',
      item: 'LVN/LPN Study Guide',
      date: '12.09.2026 - 12.53 PM',
      amount: '$ 20.87',
      status: 'Delivered',
      badgeClass: 'badge_delivered'
    },
    {
      id: '#177889',
      item: 'Audio Study Guide (PN)',
      date: '12-10-2026- 01.53 PM',
      amount: '$ 56.99',
      status: 'Cancelled',
      badgeClass: 'badge_cancelled'
    },
    {
      id: '#177889',
      item: 'Audio Study Guide (PN)',
      date: '12-10-2026- 01.53 PM',
      amount: '$ 65.89',
      status: 'Delivered',
      badgeClass: 'badge_delivered'
    },
    {
      id: '#177889',
      item: 'LVN Bundle',
      date: '12-10-2026- 01.53 PM',
      amount: '$ 23.66',
      status: 'Delivered',
      badgeClass: 'badge_delivered'
    }
  ];

  const upgradeFeatures = [
    'Full access to every study guide, from CNA to CRNA',
    'Complete RN and PN audio libraries',
    'The entire NCLEX Test Bank, 2,000+ questions with rationales',
    'Exclusive member discounts and weekly giveaway entries',
    'New content added regularly, always included'
  ];

  return (
    <div className="buyers_dashboard_layout">
      {/* Sidebar Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          className="sidebar_backdrop"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Left Sidebar Panel */}
      <aside className={`buyers_sidebar ${isSidebarOpen ? 'mobile_sidebar_open' : ''}`}>
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
      <main className="buyers_main_content">
        {/* Top Header Bar */}
        <header className="buyers_top_header">
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
          <div className="buyers_header_search flex-grow-1 mx-4">
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
                  <span className="text-light extra_small leading-none">Member</span>
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
        <div className="buyer_witdth_manage w-100">
          <AnimatePresence mode="wait">

            {/* VIEW 1: My Purchases */}
            {activeTab === 'purchases' && (
              <motion.div
                key="purchases-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="fs-4 fw-bold text-white text-start mb-4">MY PURCHASES</h3>

                {/* Heading: STUDY GUIDES */}
                <h4 className="fs-5 fw-bold text-start text-white-50 mb-3 uppercase tracking-wider">STUDY GUIDES</h4>
                <div className="row g-4 mb-5">
                  {/* Card 1: Nursing School Study Guide */}
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="buyer_panel_card text-start d-flex flex-column">
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
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="buyer_panel_card text-start d-flex flex-column">
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
                  <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                    <div className="buyer_panel_card text-start d-flex flex-column">
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
                </div>

                {/* Heading: AUDIO GUIDES */}
                <h4 className="fs-5 fw-bold text-start text-white-50 mb-3 uppercase tracking-wider">AUDIO GUIDES</h4>
                <div className="buyer_panel_card text-start">
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

            {/* VIEW 2: Order History */}
            {activeTab === 'orders' && (
              <motion.div
                key="orders-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="fs-4 fw-bold text-white text-start mb-4">ORDER HISTORY</h3>
                <div className="buyer_panel_card">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h4 className="fs-5 fw-bold text-white mb-0">ORDERED ITEMS</h4>
                    <button type="button" className="btn_gold_outline py-1.5 px-3 fs-7">
                      July <i className="bi bi-chevron-down ms-1"></i>
                    </button>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-dark table-hover border-0 align-middle mb-0 text-start">
                      <thead>
                        <tr className="border-bottom border-secondary">
                          <th className="bg-transparent border-0 py-3"><div className="dash_thp">Order Id</div></th>
                          <th className="bg-transparent border-0 py-3"><div className="dash_thp">Item Purchased</div></th>
                          <th className="bg-transparent border-0 py-3"><div className="dash_thp">Date/Time</div></th>
                          <th className="bg-transparent border-0 py-3"><div className="dash_thp">Amount</div></th>
                          <th className="bg-transparent border-0 py-3 text-end"><div className="dash_thp">Status</div></th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((o, idx) => (
                          <tr key={idx} className="border-bottom border-secondary border-opacity-25">
                            <td className="bg-transparent border-0 py-3 text-white fw-bold">{o.id}</td>
                            <td className="bg-transparent border-0 py-3 text-white fw-medium">{o.item}</td>
                            <td className="bg-transparent border-0 py-3 text-white-50 small">{o.date}</td>
                            <td className="bg-transparent border-0 py-3 text-warning fw-bold">{o.amount}</td>
                            <td className="bg-transparent border-0 py-3 text-end">
                              <span className={o.badgeClass}>{o.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 3: Upgrade Plan */}
            {activeTab === 'upgrade' && (
              <motion.div
                key="upgrade-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="fs-4 fw-bold text-white text-start mb-4">BECOME A MEMBER</h3>
                <div className="buyer_panel_card">
                  <div className="row align-items-center g-4">
                    {/* Left Content */}
                    <div className="col-12 col-lg-7 text-start">
                      <h4 className="fs-3 fw-bold text-warning mb-3">Become A Member. Unlock It All.</h4>
                      <p className="product_card_desc fs-6 mb-4">
                        Unlock everything RNroadmap has to offer with a membership built to take you all the way through your nursing career.
                      </p>

                      <div className="mb-4">
                        {upgradeFeatures.map((f, i) => (
                          <div key={i} className="upgrade_feature_item">
                            <div className="upgrade_feature_icon">
                              <i className="bi bi-chevron-right"></i>
                            </div>
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>

                      <button type="button" className="btn_gold_solid px-4 py-2.5">
                        VIEW PACKAGES <i className="bi bi-arrow-up-right ms-1"></i>
                      </button>
                    </div>

                    {/* Right Member Ribbon graphic */}
                    <div className="col-12 col-lg-5 text-center">
                      <div className="position-relative">
                        <img src="/assets/member_tag.png" className='img-fluid' alt="" />
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

export default function BuyersLibraryPageDefault() {
  return <BuyersLibrary defaultTab="purchases" />;
}
