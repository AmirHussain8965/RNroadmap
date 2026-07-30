'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function WhatNursesSaySection() {
  const [activeVideo, setActiveVideo] = useState(0);

  // Reliable Pexels CDN Photos (Zero CORS blocks, zero broken image placeholders!)
  const photoAvatars = [
    '/assets/np2.png',
    '/assets/np5.png',
    '/assets/np3.png',
    '/assets/np4.png',
    '/assets/np6.png',
    '/assets/np1.png',
  ];

  const videoThumbnails = [
    {
      name: 'Shantelle',
      role: 'New ICU Nurse - Florida',
      img: '/assets/slider_client1.png'
    },
    {
      name: 'Nursing Manager',
      role: 'Lead Preceptor',
      img: '/assets/slider_client2.png'
    },
    {
      name: 'Daphnie',
      role: 'Nursing Student - Florida',
      img: '/assets/slider_client3.png'
    }
  ];

  const writtenReviews = [
    {
      name: 'Sherman',
      role: 'Med-Surg RN - Mississippi',
      avatar: photoAvatars[0],
      title: 'Amazing Experience!',
      quote: "Honestly this got me through nursing school, and I still pull it up now that I'm on the floor. It's not bloated like the big review books — just what you actually need. I've already passed it to a couple coworkers.",
      isGold: true
    },
    {
      name: 'Tim D.',
      role: 'ICU Nurse - California',
      avatar: photoAvatars[1],
      quote: "I've been in the ICU for years and these still earned a spot on my phone. Straight to the point — no fluff, just what you actually reach for at the bedside. Honestly wish I'd had them back when I was grinding for my CCRN.",
      isGold: false
    },
    {
      name: 'Ronald K.',
      role: 'Float Pool - ICU / MedSurg - California',
      avatar: photoAvatars[2],
      quote: "As a float pool nurse, I bounce between ICU, MedSurg, and Tele — RNRoadmap's flashcards keep me sharp no matter where I land. Clear, accurate, and built by someone who's actually been at the bedside.",
      isGold: false
    },
    {
      name: 'Jessica M.',
      role: 'BSN Graduate - Texas',
      avatar: photoAvatars[3],
      quote: "Passed my NCLEX-RN on the first try in 85 questions! The rationale breakdowns and study guides are hands down the best investment I made during nursing school.",
      isGold: false
    }
  ];

  return (
    <section className="section_wrapper_custom" id="reviews">
      <div className="container">
        {/* Section Header */}
        <div className="row text-center justify-content-center mb-4">
          <div className="col-12 col-lg-8">
            <h2 className="section_title_main">
              What <span className="gold_text_span">Nurses</span> Say
            </h2>
            <p className="section_subtitle_desc mx-auto">
              Real stories, real results — hear and read directly from nursing students and RNs who've walked this path and passed.
            </p>
          </div>
        </div>

        {/* Orbital Ring & Avatars Wrapper */}
        <div className="orbital_main_wrapper">
          {/* Outer Dashed Arc SVG */}
          <svg className="orbital_ring_outer_svg" viewBox="0 0 780 780" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="390" cy="390" r="380" stroke="rgba(255, 255, 255, 0.22)" strokeWidth="1.5" strokeDasharray="6 6" />
          </svg>

          {/* Inner Solid Gold Arc SVG */}
          <svg className="orbital_ring_inner_svg" viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="280" cy="280" r="270" stroke="rgba(249, 209, 95, 0.45)" strokeWidth="1.5" />
          </svg>

          {/* Center Heading */}
          <div className="orbital_center_heading">
            <h3> Trusted By 25,000+ <br /> Nursing Students &amp; RNs</h3>
          </div>

          {/* 6 Floating Nurse Photo Avatars & Gold Speech Bubbles */}
          {/* Avatar 1: Outer Ring Top-Left */}
          <div className="orbital_avatar_node orbital_node_1 d-none d-md-flex">
            <img src={photoAvatars[0]} alt="Nurse Avatar" className="orbital_avatar_img_real" />
          </div>

          {/* Avatar 2: Inner Ring Top-Left + Reliable Support Bubble */}
          <div className="orbital_avatar_node orbital_node_2 d-none d-md-flex">
            <img src={photoAvatars[1]} alt="Nurse Avatar" className="orbital_avatar_img_real" />
            <div className="orbital_gold_bubble">Reliable Support</div>
          </div>

          {/* Avatar 3: Outer Ring Top-Right */}
          <div className="orbital_avatar_node orbital_node_3 d-none d-md-flex">
            <img src={photoAvatars[2]} alt="Nurse Avatar" className="orbital_avatar_img_real" />
          </div>

          {/* Avatar 4: Inner Ring Mid-Right + Affordable And Easy Bubble */}
          <div className="orbital_avatar_node orbital_node_4 d-none d-md-flex">
            <img src={photoAvatars[3]} alt="Nurse Avatar" className="orbital_avatar_img_real" />
            <div className="orbital_gold_bubble">Affordable And Easy</div>
          </div>

          {/* Avatar 5: Outer Ring Far-Right */}
          <div className="orbital_avatar_node orbital_node_5 d-none d-md-flex">
            <img src={photoAvatars[4]} alt="Nurse Avatar" className="orbital_avatar_img_real" />
          </div>

          {/* Avatar 6: Outer Ring Bottom-Left + Always Accurate Content Bubble */}
          <div className="orbital_avatar_node orbital_node_6 d-none d-md-flex">
            <img src={photoAvatars[5]} alt="Nurse Avatar" className="orbital_avatar_img_real" />
            <div className="orbital_gold_bubble">Always Accurate Content<br />Fast &amp; Reliable</div>
          </div>
        </div>

        {/* Overlapping Main Video Showcase Card */}
        <div className="video_showcase_section text-center">
          <div className="video_main_card text-start">
            <div className="position-relative h-100">
              <img
                src={videoThumbnails[activeVideo].img}
                alt={videoThumbnails[activeVideo].name}
                className="w-100 h-100 object-fit-cover d-block"
              />
              <div className="position-absolute top-50 start-50 translate-middle">
                <button type="button" className="video_play_btn" aria-label="Play video review">
                  <i className="bi bi-play-fill ms-1"></i>
                </button>
              </div>
              <div className="position-absolute bottom-0 start-0 p-4 text-white bg-dark bg-opacity-75 w-100">
                <h4 className="fw-bold fs-4 text-white mb-0">{videoThumbnails[activeVideo].name}</h4>
                <p className="text-warning small mb-0">{videoThumbnails[activeVideo].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Thumbnails Swiper Slider */}
        <div className="position-relative my-4 px-lg-5">
          <button type="button" className="carousel_arrow_btn video_swiper_prev position-absolute top-50 start-0 translate-middle-y z-3" aria-label="Previous video">
            <i className="bi bi-chevron-left"></i>
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              992: { slidesPerView: 3 }
            }}
            navigation={{
              prevEl: '.video_swiper_prev',
              nextEl: '.video_swiper_next'
            }}
            className="py-2"
          >
            {videoThumbnails.map((v, idx) => (
              <SwiperSlide key={idx}>
                <div
                  onClick={() => setActiveVideo(idx)}
                  className={`video_thumb_card ${activeVideo === idx ? 'border-warning' : ''}`}
                >
                  <div className="position-relative flex-shrink-0">
                    <img src={v.img} alt={v.name} className="img-fluid video_thumb_card_img" />
                    <span className="video_thumb_card_icon">
                      <i className="bi bi-play-circle-fill"></i>
                    </span>
                  </div>
                  <div className="video_thumb_card_text">
                    <h5>{v.name}</h5>
                    <p>{v.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" className="carousel_arrow_btn video_swiper_next position-absolute top-50 end-0 translate-middle-y z-3" aria-label="Next video">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        {/* Written Testimonials Swiper Slider */}
        <div className="position-relative mt-5 pt-3">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.testimonial_swiper_prev',
              nextEl: '.testimonial_swiper_next'
            }}
            className="pb-5"
          >
            {writtenReviews.map((rev, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className={rev.isGold ? 'testimonial_card_gold' : 'testimonial_card_dark'}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img src={rev.avatar} alt={rev.name} className="rounded-circle border border-warning object-fit-cover" width="50" height="50" />
                    <div>
                      <h5 className={`fs-5 fw-bold mb-0 ${rev.isGold ? 'text-dark' : 'text-white'}`}>{rev.name}</h5>
                      <p className={`small mb-0 ${rev.isGold ? 'text-dark opacity-75' : 'text-muted'}`}>{rev.role}</p>
                    </div>
                  </div>

                  <div className="text-warning fs-6 mb-2">
                    ★★★★★
                  </div>

                  {rev.title && (
                    <h4 className={`fs-5 fw-bold mb-2 ${rev.isGold ? 'text-dark' : 'text-white'}`}>{rev.title}</h4>
                  )}

                  <p className={`fs-6 mb-0 ${rev.isGold ? 'text-dark fw-medium' : 'text-white opacity-90'}`}>
                    "{rev.quote}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Testimonial Arrow Buttons Controls */}
          <div className="text-end d-flex justify-content-end gap-2 mt-2">
            <button type="button" className="carousel_arrow_btn testimonial_swiper_prev" aria-label="Previous review">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button type="button" className="carousel_arrow_btn testimonial_swiper_next" aria-label="Next review">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
