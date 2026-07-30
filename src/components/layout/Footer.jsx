'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="footer_figma_wrapper">
      <div className="container">
        {/* Top 5 Columns Row */}
        <div className="row g-4 pb-4">
          {/* Column 1: Official 3D Metallic Logo & Socials */}
          <div className="col-12 col-lg-3">
            <Link href="/" className="d-inline-block mb-3">
              <img src="/assets/Logo.png" alt="RNroadmap Logo" height="65" className="d-block" />
            </Link>

            <h5 className="footer_column_title mt-2 mb-2">Follow Us</h5>
            <div className="d-flex align-items-center gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social_gold_btn" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social_gold_btn" aria-label="TikTok">
                <i className="bi bi-tiktok"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social_gold_btn" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-12 col-md-3 col-lg-2">
            <div className="footer_gold_bar_line"></div>
            <h5 className="footer_column_title">Quick Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link href="/" className="footer_link_item">Home</Link></li>
              <li><Link href="/about" className="footer_link_item">About</Link></li>
              <li><Link href="/study-guides" className="footer_link_item">Study Guides</Link></li>
              <li><Link href="/audio-guides" className="footer_link_item">Audio Study Guides</Link></li>
              <li><Link href="/test-bank" className="footer_link_item">NCLEX Test Bank</Link></li>
              <li><Link href="/membership" className="footer_link_item">Membership</Link></li>
              <li><Link href="/shop" className="footer_link_item">Shop</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-12 col-md-3 col-lg-2">
            <div className="footer_gold_bar_line"></div>
            <h5 className="footer_column_title">Contact</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-white">
              <li className="d-flex align-items-center gap-2">
                <i className="bi bi-telephone-fill text-warning"></i>
                <span className="fw-medium">+00 0000 0000</span>
              </li>
              <li className="d-flex align-items-center gap-2 mt-2">
                <i className="bi bi-envelope-fill text-warning"></i>
                <span className="fw-medium">Email Address</span>
              </li>
              <li className="ps-3 text-white-50">
                • hello@rnroadmap.com
              </li>
              <li className="ps-3 text-white-50">
                • rnroadmapguides@gmail.com
              </li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="col-12 col-md-3 col-lg-2">
            <div className="footer_gold_bar_line"></div>
            <h5 className="footer_column_title">Support</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link href="/about" className="footer_link_item">Privacy Policy</Link></li>
              <li><Link href="/about" className="footer_link_item">Terms Of Service</Link></li>
              <li><Link href="/about" className="footer_link_item">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 5: Subscribe To My Newsletter */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footer_gold_bar_line"></div>
            <h5 className="footer_column_title">Subscribe To My Newsletter</h5>

            {subscribed ? (
              <div className="alert alert-warning py-2 small mb-2 text-dark fw-bold">
                ✓ Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="footer_subscribe_box mb-2">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="footer_subscribe_input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn_gold_solid py-2 px-3 fs-7">
                  SUBSCRIBE
                </button>
              </form>
            )}

            <p className="footer_subtext_note">
              Send Your Email To Receive Newsletters For New Course, Guides &amp; Updates.
            </p>
          </div>
        </div>

        {/* Bottom Gold Line & Copyright */}
        <hr className="border-warning opacity-50 my-3" />

        <div className="text-center py-2">
          <p className="text-white small mb-1 fw-bold">
            &copy; 2026 RNroadmap · By Walner Alcius RN, CCRN, BSN
          </p>
          <p className="footer_disclaimer_text">
            Educational Material Only. Verify All Dosing &amp; Clinical Decisions With Institutional Protocols.
          </p>
        </div>
      </div>
    </footer>
  );
}
