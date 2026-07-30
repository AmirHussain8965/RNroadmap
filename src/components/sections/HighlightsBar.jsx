import React from 'react';
import Image from 'next/image'; // 1. Next.js ka Image component import karein

export default function HighlightsBar() {
  // 2. Icon classes ki jagah apne image paths daal dain
  const highlights = [
    {
      image: '/assets/HighlightsBar1.png',
      title: 'High Yield Content',
      description: 'Focused, Simplified & Easy To Understand'
    },
    {
      image: '/assets/HighlightsBar2.png',
      title: 'Practice Smarter',
      description: '2,500+ Practice Questions With Rationales.'
    },
    {
      image: '/assets/HighlightsBar3.png',
      title: 'Track Progress',
      description: 'Monitor Your Performance And Improve Faster.'
    },
    {
      image: '/assets/HighlightsBar4.png',
      title: 'Achieve Faster',
      description: "We're with you from CNA to CRNA."
    }
  ];

  return (
    <section className="highlights_bar_section">
      <div className="container">
        <div className="row g-4 align-items-center">
          {highlights.map((item, index) => (
            <React.Fragment key={index}>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="highlight_item_wrapper">
                  <div className="highlight_icon_box">

                    {/* 3. <i> tag ko hta kar <Image /> component laga dain */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={48} // Image ki width (apne design ke hisaab se adjust karein)
                      height={48} // Image ki height
                      className="highlight_image" // Agar CSS se style karna ho
                    />

                  </div>
                  <div>
                    <h3 className="highlight_title_text">{item.title}</h3>
                    <p className="highlight_desc_text">{item.description}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}