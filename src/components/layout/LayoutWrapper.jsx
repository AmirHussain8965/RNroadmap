'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Define routes where Header and Footer should be hidden
  const hideLayout = 
    pathname?.startsWith('/dashboard') || 
    pathname?.startsWith('/members-library') || 
    pathname?.startsWith('/buyers-library');

  if (hideLayout) {
    return (
      <main className="w-100 min-vh-100" suppressHydrationWarning>
        {children}
      </main>
    );
  }

  return (
    <>
      <Header />
      <main className="main_layout" suppressHydrationWarning>
        {children}
      </main>
      <Footer />
    </>
  );
}
