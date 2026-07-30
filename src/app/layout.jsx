import './globals.css';
import LayoutWrapper from '@/components/layout/LayoutWrapper';
import Script from 'next/script';

export const metadata = {
  title: 'RNroadmap | Pass Every Stage, With Confidence',
  description: 'A comprehensive, modular, and interactive study guide and test bank platform built by Walner Alcius RN, BSN, CCRN.',
  keywords: [
    'Nursing Study Guides',
    'NCLEX Test Bank',
    'ICU Nurse',
    'CCRN',
    'CRNA',
    'CNA',
    'LPN',
    'RNroadmap'
  ],
  authors: [{ name: 'RNroadmap Team' }],
  openGraph: {
    title: 'RNroadmap — Built By A Nurse, For Nurses',
    description: 'Nursing study guides and test bank built at the bedside.',
    type: 'website',
    url: 'https://rnroadmap.com',
    siteName: 'RNroadmap'
  }
};

export const viewport = {
  themeColor: '#060A0B',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="pronouncer-cleanup"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const removePronouncer = () => {
                  const el = document.getElementById('pronouncerRootElement') || document.querySelector('.pronouncerRootElementItem');
                  if (el) el.remove();
                  const audioEl = document.querySelector('audio');
                  if (audioEl && audioEl.src && audioEl.src.includes('pronouncer')) {
                    audioEl.remove();
                  }
                };
                removePronouncer();
                const observer = new MutationObserver(removePronouncer);
                observer.observe(document.documentElement, { childList: true, subtree: true });
                window.addEventListener('DOMContentLoaded', removePronouncer);
              })();
            `
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <div className="bg_glow_top" suppressHydrationWarning></div>
        <div className="bg_glow_middle" suppressHydrationWarning></div>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
