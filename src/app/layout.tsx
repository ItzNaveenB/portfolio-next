'use client';

import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleLoad = () => {
      const content = document.querySelector('.content-wrapper');

      setTimeout(() => {
        content?.classList.add('zoom-in');
      }, 100);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Shubham Kumar - A Backend Engineer</title>
        <meta name="description" content="Made by Naveen Baghel" />
        <link rel="icon" type="image/png" href="/profile1.webp" sizes="32x32" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="content-wrapper">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

