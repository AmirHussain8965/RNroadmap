'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './admin.css';

export default function AdminDashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // 1. Overview Metric Filter States
  const [overviewMonth, setOverviewMonth] = useState('JULY');
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const metrics = (() => {
    switch (overviewMonth) {
      case 'JUNE':
        return [
          { title: 'TOTAL SALES AMOUNT', value: '$ 10,250.00', trend: '15.2% vs last month', icon: 'bi-wallet2', trendUp: true },
          { title: 'AUDIO STUDY GUIDES SOLD', value: '95', trend: '1.5% vs last month', icon: 'bi-headphones', trendUp: true },
          { title: 'STUDY GUIDES SOLD', value: '110', trend: '6.2% vs last month', icon: 'bi-book', trendUp: true },
          { title: 'NEW MEMBERS', value: '14', trend: '1.2% vs last month', icon: 'bi-person-badge', trendUp: true },
          { title: 'TOTAL MEMBERS', value: '72', trend: '5.5% vs last month', icon: 'bi-people', trendUp: true }
        ];
      case 'MAY':
        return [
          { title: 'TOTAL SALES AMOUNT', value: '$ 8,420.00', trend: '10.1% vs last month', icon: 'bi-wallet2', trendUp: true },
          { title: 'AUDIO STUDY GUIDES SOLD', value: '80', trend: '0.8% vs last month', icon: 'bi-headphones', trendUp: true },
          { title: 'STUDY GUIDES SOLD', value: '90', trend: '4.1% vs last month', icon: 'bi-book', trendUp: true },
          { title: 'NEW MEMBERS', value: '12', trend: '2.3% vs last month', icon: 'bi-person-badge', trendUp: false },
          { title: 'TOTAL MEMBERS', value: '58', trend: '3.8% vs last month', icon: 'bi-people', trendUp: true }
        ];
      case 'ALL TIME':
        return [
          { title: 'TOTAL SALES AMOUNT', value: '$ 56,840.00', trend: 'All-time active', icon: 'bi-wallet2', trendUp: true },
          { title: 'AUDIO STUDY GUIDES SOLD', value: '520', trend: 'All-time active', icon: 'bi-headphones', trendUp: true },
          { title: 'STUDY GUIDES SOLD', value: '640', trend: 'All-time active', icon: 'bi-book', trendUp: true },
          { title: 'NEW MEMBERS', value: '124', trend: 'All-time active', icon: 'bi-person-badge', trendUp: true },
          { title: 'TOTAL MEMBERS', value: '90', trend: 'Current active', icon: 'bi-people', trendUp: true }
        ];
      case 'JULY':
      default:
        return [
          { title: 'TOTAL SALES AMOUNT', value: '$ 12,099.00', trend: '20.5% vs last month', icon: 'bi-wallet2', trendUp: true },
          { title: 'AUDIO STUDY GUIDES SOLD', value: '120', trend: '2.8% vs last month', icon: 'bi-headphones', trendUp: true },
          { title: 'STUDY GUIDES SOLD', value: '146', trend: '8.5% vs last month', icon: 'bi-book', trendUp: true },
          { title: 'NEW MEMBERS', value: '18', trend: '3.5% vs last month', icon: 'bi-person-badge', trendUp: false },
          { title: 'TOTAL MEMBERS', value: '90', trend: '8.5% vs last month', icon: 'bi-people', trendUp: true }
        ];
    }
  })();

  // 2. Chart Range Filter States
  const [chartRange, setChartRange] = useState('YEAR');
  const [isChartRangeOpen, setIsChartRangeOpen] = useState(false);

  const chartData = (() => {
    switch (chartRange) {
      case 'MONTH':
        return {
          val: '146',
          trend: '8.5% vs last month',
          path1: "M 40 130 Q 100 160 150 110 T 250 140 T 350 80 T 450 150",
          path1Area: "M 40 130 Q 100 160 150 110 T 250 140 T 350 80 T 450 150 L 450 170 L 40 170 Z",
          path2: "M 40 110 Q 90 90 140 140 T 240 110 T 340 130 T 450 90",
          axisLabels: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4']
        };
      case 'WEEK':
        return {
          val: '32',
          trend: '4.2% vs last week',
          path1: "M 40 90 Q 100 110 150 130 T 250 80 T 350 140 T 450 60",
          path1Area: "M 40 90 Q 100 110 150 130 T 250 80 T 350 140 T 450 60 L 450 170 L 40 170 Z",
          path2: "M 40 140 Q 90 120 140 90 T 240 130 T 340 100 T 450 120",
          axisLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        };
      case 'YEAR':
      default:
        return {
          val: '1,239',
          trend: '2.3% vs last year',
          path1: "M 40 160 Q 100 130 150 160 T 250 120 T 350 90 T 450 110",
          path1Area: "M 40 160 Q 100 130 150 160 T 250 120 T 350 90 T 450 110 L 450 170 L 40 170 Z",
          path2: "M 40 120 Q 90 140 140 130 T 240 170 T 340 110 T 450 70",
          axisLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        };
    }
  })();

  // 3. Activity Log States
  const [logSort, setLogSort] = useState('EARLIEST');
  const [isLogSortOpen, setIsLogSortOpen] = useState(false);
  const [logDay, setLogDay] = useState('TODAY');
  const [isLogDayOpen, setIsLogDayOpen] = useState(false);

  const activities = (() => {
    let list = [];
    if (logDay === 'TODAY') {
      list = [
        { title: 'New Order Placed', desc: 'CNA Study Guide purchased by Priya Nair', time: 'Today 09:00 am', icon: 'bi-cart-fill' },
        { title: 'New Member Joined', desc: 'Sarah Johnson signed up for the Premium plan', time: 'Today 09:30 am', icon: 'bi-person-plus-fill' },
        { title: 'Membership Cancelled', desc: 'Maria Lopez cancelled her Basic plan', time: 'Today 12:00 pm', icon: 'bi-dash-circle-fill' },
        { title: 'Bundle Purchased', desc: 'Complete Bundle purchased by Daniel Osei', time: 'Today 01:00 pm', icon: 'bi-box-seam-fill' },
        { title: 'New Member Joined', desc: 'Sarah Johnson signed up for the Premium plan', time: 'Today 01:25 pm', icon: 'bi-person-plus-fill' }
      ];
    } else {
      list = [
        { title: 'New Order Placed', desc: 'NCLEX Flashcards purchased by Alex Rivera', time: 'Yesterday 10:00 am', icon: 'bi-cart-fill' },
        { title: 'New Member Joined', desc: 'David Kim joined the Gold Plan', time: 'Yesterday 11:15 am', icon: 'bi-person-plus-fill' },
        { title: 'Refund Processed', desc: 'Refunded $19.99 to John Doe', time: 'Yesterday 04:30 pm', icon: 'bi-arrow-left-circle-fill' }
      ];
    }

    if (logSort === 'LATEST') {
      return [...list].reverse();
    }
    return list;
  })();

  // 4. Order History States
  const [orderMonth, setOrderMonth] = useState('JULY');
  const [isOrderMonthOpen, setIsOrderMonthOpen] = useState(false);

  const orders = (() => {
    switch (orderMonth) {
      case 'JUNE':
        return [
          { purchaser: 'June Client', date: '06.12.2026 - 10:15 AM', item: 'Pharmacology Guide', amount: '$ 24.99', state: 'Purchased', badgeClass: 'badge_purchased' },
          { purchaser: 'June Buyer', date: '06.18.2026 - 02:40 PM', item: 'Dosage Calculations Quiz', amount: '$ 14.99', state: 'In Cart', badgeClass: 'badge_cart' }
        ];
      case 'MAY':
        return [
          { purchaser: 'May Client', date: '05.04.2026 - 09:30 AM', item: 'Complete Starter Bundle', amount: '$ 79.99', state: 'Purchased', badgeClass: 'badge_purchased' },
          { purchaser: 'May Member', date: '05.15.2026 - 01:10 PM', item: 'Monthly Membership', amount: '$ 19.99', state: 'Cancelled', badgeClass: 'badge_cancelled' }
        ];
      case 'JULY':
      default:
        return [
          { purchaser: 'Client Name', date: '12.09.2026 - 12.53 PM', item: 'CNA Study Guide', amount: '$ 19.99', state: 'Purchased', badgeClass: 'badge_purchased' },
          { purchaser: 'Name', date: '12.09.2026 - 12.53 PM', item: 'LVN/LPN Study Guide', amount: '$ 20.87', state: 'In Cart', badgeClass: 'badge_cart' },
          { purchaser: 'Name', date: '12-10-2026- 01.53 PM', item: 'Audio Study Guide (PN)', amount: '$ 56.99', state: 'Cancelled', badgeClass: 'badge_cancelled' },
          { purchaser: 'Name', date: '12-10-2026- 01.53 PM', item: 'Audio Study Guide (PN)', amount: '$ 65.89', state: 'Purchased', badgeClass: 'badge_purchased' },
          { purchaser: 'Name', date: '12-10-2026- 01.53 PM', item: 'LVN Bundle', amount: '$ 23.66', state: 'Purchased', badgeClass: 'badge_purchased' }
        ];
    }
  })();

  return (
    <div className="admin_dashboard_layout">
      {/* Sidebar Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          className="sidebar_backdrop"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Panel */}
      <aside className={`admin_sidebar ${isSidebarOpen ? 'mobile_sidebar_open' : ''}`}>
        {/* Brand logo */}
        <div className="sidebar_logo_div">
          <img src="/assets/Logo.png" alt="RNroadmap Logo" />
        </div>

        <span className="sidebar_menu_section_title">Menu</span>
        <nav className="d-flex flex-column">
          <a href="#" className="sidebar_menu_link active">
            <i className="bi bi-grid-fill"></i>
            <span>Dashboard</span>
          </a>
        </nav>

        <span className="sidebar_menu_section_title">General</span>
        <nav className="d-flex flex-column">
          <a href="#" className="sidebar_menu_link">
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </a>
          <a href="#" className="sidebar_menu_link">
            <i className="bi bi-info-circle"></i>
            <span>Help &amp; Support</span>
          </a>
          <a href="#" className="sidebar_menu_link">
            <i className="bi bi-box-arrow-right"></i>
            <span>Logout</span>
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="admin_main_content">
        {/* Top Header */}
        <header className="admin_top_header">
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
            <h2 className="fs-3 fw-bold text-white mb-0">Admin Dashboard</h2>
          </div>

          {/* Search */}
          <div className="admin_header_search flex-grow-1 mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="search_input_field py-2"
            />
            <i className="bi bi-search position-absolute top-50 end-0 translate-middle-y me-3 text-warning"></i>
          </div>

          {/* Profile controls */}
          <div className="dash_profile_main_div">
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
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=80"
                  alt="Avatar"
                  className="dashboard_avatar"
                />
                <div className="text-start d-none d-sm-block">
                  <span className="d-block small text-warning fw-bold leading-none">Warner Alcius</span>
                  <span className="text-light extra_small leading-none">Admin</span>
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
        <div className="admin_content_inner">
          {/* Overview Row */}
          <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
            <h3 className="gold_text_span fs-4 fw-bold mb-0">Overview</h3>
            <div className="position-relative">
              <button
                type="button"
                className="btn_gold_outline py-1.5 px-3 fs-7 text-uppercase"
                onClick={() => setIsOverviewOpen(!isOverviewOpen)}
              >
                {overviewMonth} <i className={`bi ${isOverviewOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ms-1`}></i>
              </button>
              {isOverviewOpen && (
                <div className="admin_dropdown_menu">
                  {['JULY', 'JUNE', 'MAY', 'ALL TIME'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      className={`admin_dropdown_item ${overviewMonth === m ? 'active' : ''}`}
                      onClick={() => {
                        setOverviewMonth(m);
                        setIsOverviewOpen(false);
                      }}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="row g-3 mb-4">
            {metrics.map((m, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl">
                <div className="admin_metric_card">
                  <div className="admin_metric_card_inner">
                    <div className="admin_metric_icon">
                      <i className={`bi ${m.icon}`}></i>
                    </div>
                    <h6>{m.title}</h6>
                  </div>
                  <div className="admin_metric_card_text">
                    <h4>{m.value}</h4>
                    <span className={`extra_small fw-medium ${m.trendUp ? 'text-success' : 'text-danger'}`}>
                      <i className={`bi ${m.trendUp ? 'bi-graph-up' : 'bi-graph-down'} me-1`}></i>
                      {m.trend}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Visuals Row */}
          <div className="row g-4 mb-4">
            {/* SVG Sales Curve Chart Card */}
            <div className="col-12 col-lg-7">
              <div className="chart_card_box">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h4 className="fs-5 fw-bold text-white mb-0">TOTAL SALES AMOUNT</h4>
                  <div className="position-relative">
                    <button
                      type="button"
                      className="btn_gold_outline py-1.5 px-3 fs-7 text-uppercase"
                      onClick={() => setIsChartRangeOpen(!isChartRangeOpen)}
                    >
                      {chartRange} <i className={`bi ${isChartRangeOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ms-1`}></i>
                    </button>
                    {isChartRangeOpen && (
                      <div className="admin_dropdown_menu">
                        {['YEAR', 'MONTH', 'WEEK'].map((r) => (
                          <button
                            key={r}
                            type="button"
                            className={`admin_dropdown_item ${chartRange === r ? 'active' : ''}`}
                            onClick={() => {
                              setChartRange(r);
                              setIsChartRangeOpen(false);
                            }}
                          >
                            {r}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="d-flex align-items-baseline gap-2 mb-4">
                  <span className="display-6 fw-bold text-white">{chartData.val}</span>
                  <span className="text-success small fw-bold">
                    <i className="bi bi-arrow-up-right me-1"></i>{chartData.trend}
                  </span>
                </div>

                {/* SVG Curve Chart */}
                <div className="position-relative mt-4">
                  <svg viewBox="0 0 500 200" className="w-100 h-auto">
                    <defs>
                      <linearGradient id="chartGoldGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F9D15F" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#C9851B" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Grid Lines */}
                    <line x1="40" y1="20" x2="480" y2="20" stroke="rgba(255, 255, 255, 0.05)" />
                    <line x1="40" y1="70" x2="480" y2="70" stroke="rgba(255, 255, 255, 0.05)" />
                    <line x1="40" y1="120" x2="480" y2="120" stroke="rgba(255, 255, 255, 0.05)" />
                    <line x1="40" y1="170" x2="480" y2="170" stroke="rgba(255, 255, 255, 0.05)" />

                    {/* Gold curve line (This year) */}
                    <path
                      d={chartData.path1}
                      fill="none"
                      stroke="#F9D15F"
                      strokeWidth="3.5"
                    />
                    {/* Fill area under curve */}
                    <path
                      d={chartData.path1Area}
                      fill="url(#chartGoldGrad)"
                    />

                    {/* Dotted curve line (Last year) */}
                    <path
                      d={chartData.path2}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.4)"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />

                    {/* Chart Axes Labels */}
                    {chartData.axisLabels.map((lbl, idx) => {
                      const xCoord = 40 + (idx * (410 / (chartData.axisLabels.length - 1 || 1)));
                      return (
                        <text key={idx} x={xCoord} y="190" fill="rgba(255, 255, 255, 0.4)" fontSize="10" textAnchor="middle">
                          {lbl}
                        </text>
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>

            {/* Activity Log Card */}
            <div className="col-12 col-lg-5">
              <div className="activity_log_card">
                <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
                  <h4 className="fs-5 fw-bold text-white mb-0">ACTIVITY LOG</h4>
                  <div className="d-flex align-items-center gap-2">
                    {/* Log Sort */}
                    <div className="position-relative">
                      <button
                        type="button"
                        className="btn_gold_outline py-1 px-2 fs-7 text-uppercase"
                        onClick={() => setIsLogSortOpen(!isLogSortOpen)}
                      >
                        {logSort} <i className="bi bi-arrow-down-up ms-1"></i>
                      </button>
                      {isLogSortOpen && (
                        <div className="admin_dropdown_menu">
                          {['EARLIEST', 'LATEST'].map((s) => (
                            <button
                              key={s}
                              type="button"
                              className={`admin_dropdown_item ${logSort === s ? 'active' : ''}`}
                              onClick={() => {
                                setLogSort(s);
                                setIsLogSortOpen(false);
                              }}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Log Day */}
                    <div className="position-relative">
                      <button
                        type="button"
                        className="btn_gold_outline py-1 px-2 fs-7 text-uppercase"
                        onClick={() => setIsLogDayOpen(!isLogDayOpen)}
                      >
                        {logDay} <i className={`bi ${isLogDayOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ms-1`}></i>
                      </button>
                      {isLogDayOpen && (
                        <div className="admin_dropdown_menu">
                          {['TODAY', 'YESTERDAY'].map((d) => (
                            <button
                              key={d}
                              type="button"
                              className={`admin_dropdown_item ${logDay === d ? 'active' : ''}`}
                              onClick={() => {
                                setLogDay(d);
                                setIsLogDayOpen(false);
                              }}
                            >
                              {d}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Log items list */}
                <div className="d-flex flex-column">
                  {activities.map((a, idx) => (
                    <div key={idx} className="activity_log_item">
                      <div className="activity_icon_box">
                        <i className={`bi ${a.icon}`}></i>
                      </div>
                      <div className="flex-grow-1 text-start">
                        <h5 className="fs-6 fw-bold text-white mb-1">{a.title}</h5>
                        <p className="text-white-50 extra_small mb-0">{a.desc}</p>
                      </div>
                      <div className="text-end flex-shrink-0">
                        <span className="text-white-50 extra_small d-block">Today</span>
                        <span className="text-warning extra_small fw-bold">{a.time.replace('Today ', '')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Order History Table Card */}
          <div className="admin_table_wrapper">
            <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
              <h4 className="fs-4 fw-bold text-white mb-0">ORDER HISTORY</h4>
              <div className="position-relative">
                <button
                  type="button"
                  className="btn_gold_outline py-1.5 px-3 fs-7 text-uppercase"
                  onClick={() => setIsOrderMonthOpen(!isOrderMonthOpen)}
                >
                  {orderMonth} <i className={`bi ${isOrderMonthOpen ? 'bi-chevron-up' : 'bi-chevron-down'} ms-1`}></i>
                </button>
                {isOrderMonthOpen && (
                  <div className="admin_dropdown_menu">
                    {['JULY', 'JUNE', 'MAY'].map((m) => (
                      <button
                        key={m}
                        type="button"
                        className={`admin_dropdown_item ${orderMonth === m ? 'active' : ''}`}
                        onClick={() => {
                          setOrderMonth(m);
                          setIsOrderMonthOpen(false);
                        }}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Responsive table */}
            <div className="table-responsive">
              <table className="table table-dark table-hover border-0 align-middle mb-0">
                <thead>
                  <tr className="border-bottom border-secondary">
                    <th className="bg-transparent border-0"><div className="dash_thp">Purchaser Name</div></th>
                    <th className="bg-transparent border-0"><div className="dash_thp">Date/Time</div></th>
                    <th className="bg-transparent border-0"><div className="dash_thp">Item Purchased</div></th>
                    <th className="bg-transparent border-0"><div className="dash_thp">Amount</div></th>
                    <th className="bg-transparent border-0 text-end"><div className="dash_thp">State</div></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o, idx) => (
                    <tr key={idx} className="border-bottom border-secondary border-opacity-25">
                      <td className="bg-transparent border-0 py-3">
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=80"
                            alt="Purchaser"
                            className="dashboard_avatar"
                            width="32"
                            height="32"
                          />
                          <span className="text-white fw-medium">{o.purchaser}</span>
                        </div>
                      </td>
                      <td className="bg-transparent border-0 py-3 text-white-50 small">{o.date}</td>
                      <td className="bg-transparent border-0 py-3 text-white fw-bold">{o.item}</td>
                      <td className="bg-transparent border-0 py-3 text-warning fw-bold">{o.amount}</td>
                      <td className="bg-transparent border-0 py-3 text-end">
                        <span className={o.badgeClass}>{o.state}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
