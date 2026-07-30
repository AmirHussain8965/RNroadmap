'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isGuidesDropdownOpen, setIsGuidesDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg header_nav_custom">
      <div className="container-fluid px-lg-5">
        {/* Bootstrap Navbar Brand */}
        <Link href="/" className="navbar-brand brand_logo_link">
          <img src="/assets/Logo.png" alt="RNroadmap Logo" height="40" className="d-inline-block align-top" />
        </Link>

        {/* Bootstrap Navbar Toggler */}
        <div className="d-flex align-items-center gap-2 d-lg-none">
          <button className="icon_circle_btn" type="button" aria-label="Cart">
            <i className="bi bi-cart3"></i>
          </button>
          <button
            className="navbar-toggler btn_gold_solid py-1 px-3 border-0"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${isNavOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>

        {/* Bootstrap Navbar Collapse */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav_menu_custom">
            <li className="nav-item">
              <Link href="/" className="nav-link nav_item_link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link nav_item_link">
                About
              </Link>
            </li>
            <li className="nav-item dropdown position-relative">
              <button
                type="button"
                className="nav-link nav_item_link dropdown-toggle bg-transparent border-0"
                onClick={() => setIsGuidesDropdownOpen(!isGuidesDropdownOpen)}
                aria-expanded={isGuidesDropdownOpen}
              >
                Guides
              </button>
              {isGuidesDropdownOpen && (
                <ul className="dropdown-menu dropdown_menu_box show border-0">
                  <li>
                    <Link href="/study-guides" className="dropdown-item dropdown_item_link" onClick={() => setIsGuidesDropdownOpen(false)}>
                      Study Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/audio-guides" className="dropdown-item dropdown_item_link" onClick={() => setIsGuidesDropdownOpen(false)}>
                      Audio Guides
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link href="/test-bank" className="nav-link nav_item_link">
                NCLEX Test Bank
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/membership" className="nav-link nav_item_link">
                Membership
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/shop" className="nav-link nav_item_link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact-us" className="nav-link nav_item_link">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right Action Icons & Login Button */}
          <div className="d-flex align-items-center justify-content-center gap-3 mt-3 mt-lg-0">
            <button className="icon_circle_btn" type="button" aria-label="Search">
              <i className="bi bi-search"></i>
            </button>
            <button className="icon_circle_btn d-none d-lg-inline-flex" type="button" aria-label="Cart">
              <i className="bi bi-cart3"></i>
            </button>
            <button className="btn_gold_solid" type="button">
              LOGIN <i className="bi bi-arrow-up-right ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
